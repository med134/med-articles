"use client";
import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import useThemeSwitcher from "./useThemeSwitcher";
import { usePathname } from "next/navigation";
import med from "@/public/images/logo-med-removebg-preview.webp";
import { RiMenu5Fill } from "react-icons/ri";
import MainLink from "./MainLink";
import logo from "@/public/images/logo.png";
import { CustomMobileLink } from "./CustomLinks";
import { MoonIcon, SunIcon } from "./Icons";
import { handelLogOut } from "@/src/utils/actions";
import Link from "next/link";
import Image from "next/image";
import { UserInfo } from "./Interfaces";

interface Props {
  user: UserInfo;
}

const NavBaLinks = ({ user }: Props) => {
  const [mode, setMode]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const path = usePathname();
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
  return (
    <header
      className={`${
        path.startsWith("/dashboard") ? "hidden" : "flex"
      } header py-6 z-40 w-[100%] items-center bg-transparent xl:px-6 ${
        sticky
          ? "!fixed !z-[80] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="hidden lg:flex lg:justify-stretch  text-sm text-gray-500 rounded-lg  dark:text-gray-400 ">
        <div className="left-2">
          <Link href="/" className="cursor-pointer">
            <Image
              src={med}
              alt="website-logo"
              className="object-cover w-12 h-12 dark:bg-light dark:rounded-md"
              width={100}
              height={100}
              loading="lazy"
            />
          </Link>
        </div>
        <div className="absolute right-2 flex justify-center items-center">
          <button
            data-collapse-toggle="navbar-search"
            aria-labelledby="menu-button"
            type="button"
            className="hover:bg-gray-100 p-2 left-0 rounded-lg dark:hover:bg-gray-700"
            aria-controls="menu-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <FiX
                className="w-7 h-7 text-dark dark:text-light"
                onClick={handleClick}
              />
            ) : (
              <RiMenu5Fill
                className="w-7 h-7 text-dark dark:text-light"
                onClick={handleClick}
              />
            )}
          </button>
          <button
            name="theme-button"
            aria-label="change-theme"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-8 h-8 flex items-center justify-center mr-2 rounded-full p-1 transition-all duration-75 ease-linear delay-75 
${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
`}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon
                className={
                  "fill-dark transition-all duration-75 ease-linear delay-75 animate-spin"
                }
              />
            )}
          </button>
        </div>
      </div>
      <MainLink user={user} />
      <button
        name="theme-button"
        aria-label="change-theme"
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={`w-8 h-8 flex items-center lg:hidden mr-16 xl:mr-0 justify-center rounded-full p-1 transition-all duration-75 ease-linear delay-75 
${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
`}
      >
        {mode === "light" ? (
          <SunIcon className={"fill-dark"} />
        ) : (
          <MoonIcon
            className={
              "fill-dark transition-all duration-75 ease-linear delay-75 animate-spin"
            }
          />
        )}
      </button>
      {isOpen && (
        <div>
          <div
            className="min-w-[60vw] fixed xs:absolute xs:top-80 sm:min-w-[70vw] sm:h-min flex flex-col justify-between z-9999 items-center top-[50%] sm:top-[20%] left-2/4 -translate-x-1/2 -translate-y-1/2
bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-8
"
          >
            <div className="flex items-center flex-col justify-center z-9999 max-w-full">
              <div className="flex items-center justify-center xs:w-full mb-1">
                <Image
                  src={logo}
                  alt="logo_website"
                  className="w-20 dark:bg-white dark:rounded-xl dark:p-1"
                  priority={false}
                  width={100}
                  height={100}
                  quality={30}
                />
                <div className="block mt-2">
                  <span className="font-Yeseva text-3xl text-light dark:text-dark">
                    edCode
                  </span>
                  <h3 className="text-xs tracking-widest text-light dark:text-dark">
                    blog for programmers
                  </h3>
                </div>
              </div>
              <div className="line bg-gray-600 w-full h-1 mb-4"></div>
              <CustomMobileLink key="home" href="/" title="Home" className="" />
              <CustomMobileLink
                key="about"
                href="/about"
                title="About us"
                className="contact"
              />
              <CustomMobileLink
                key="projects"
                href="/projects"
                title="Projects"
                className="projects"
              />

              {/*   {user ? (
                <CustomMobileLink
                  key="dashboard"
                  href="/dashboard"
                  title="Dashboard"
                  className=""
                />
              ) : (
                <CustomMobileLink
                  key="login"
                  href="/login"
                  title="Login"
                  className=""
                />
              )} */}
            </div>
            {user && (
              <form action={handelLogOut}>
                <button
                  name="log-button"
                  aria-label="login/logOut"
                  className="text-medium mt-2 text-light dark:text-dark"
                >
                  Logout
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBaLinks;
