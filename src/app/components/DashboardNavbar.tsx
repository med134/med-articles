"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { MdSpaceDashboard, MdOutlineExitToApp } from "react-icons/md";
import { menuItems } from "./ProjectArrays";
import { usePathname } from "next/navigation";
import { handelLogOut } from "@/src/utils/action";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { UserInfo } from "./Interfaces";
const ProfileDown = dynamic(() => import("./ProfileDown"), { ssr: false });
interface Props {
  user: UserInfo;
}
const DashboardNavbar = ({ user }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const handelOpen = () => {
    setIsOpen(!isOpen);
  };
  const session = useSession();
  return (
    <div className="h-20 flex sticky top-0 w-full justify-between z-50 items-center bg-gradient-to-r from-[#f0f0f0] to-gray-50 md:w-[100%]">
      {/* hidden navbar responsive */}
      <div className="items-center hidden lg:flex relative p-2 w-10 h-10 text-sm text-gray-500 rounded-lg">
        <button
          data-collapse-toggle="navbar-search"
          aria-labelledby="menu-button"
          type="button"
          className="hover:bg-gray-100 ml-2 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="menu-search"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? (
            <FiX className="w-6 h-6" onClick={handelOpen} />
          ) : (
            <svg
              onClick={handelOpen}
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="px-8 flex justify-center items-center text-2xl font-bold text-gray-800 lg:hidden">
        <MdSpaceDashboard className="fill-mainColor w-10 h-10" />
        <span className="text-mainColor ml-3">Admin Panel</span>
      </div>
      <div className="flex justify-start items-center px-4 cursor-pointer">
        <div className="flex mr-6 items-center md:ml-4 xs:ml-0 xs:mr-0">
          <span className="text-xs text-gray-500 mr-2">
            Hi, {user ? user?.name : session.data?.user?.name}
          </span>
          <ProfileDown user={user} />
        </div>
        <Link href="/" className="ml-3 lg:hidden">
          <RxExit className="w-8 h-8 fill-mainColor" />
        </Link>
      </div>
      {isOpen && (
        <div
          className={`absolute top-16 right-0 mt-2 w-full p-6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 `}
        >
          {menuItems.map((link, index) => {
            const LinkIcon = link.icon;
            const isActive = path === link.link;
            if (index < 5)
              return (
                <div
                  key={link.name}
                  className="py-3 text-center"
                  onClick={handelOpen}
                >
                  <Link
                    href={link.link}
                    className={`flex flex-row items-center px-5 h-10 cursor-pointer transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 ${
                      isActive ? "font-semibold bg-mainColor  text-light" : ""
                    }`}
                  >
                    <LinkIcon className="mr-3 h-6 w-6" />
                    <span className="font-medium ml-3">{link.name}</span>
                  </Link>
                </div>
              );
          })}
          <Link
            href="/"
            className={`flex flex-row items-center mt-2 py-2 px-5 h-10 cursor-pointer transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 `}
          >
            <MdOutlineExitToApp className="mr-3 h-6 w-6" />
            <span className="font-medium ml-3">Exit Dashboard</span>
          </Link>
          <form action={handelLogOut} className="">
            <button className="flex flex-row px-5 mt-4 items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <LuLogOut className="w-6 h-6" />
              <span className="font-medium ml-3 dark:text-light">Logout</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DashboardNavbar;
