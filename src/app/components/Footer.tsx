"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { BsInstagram } from "react-icons/bs";
import { usePathname } from "next/navigation";
const Footer = () => {
  const path = usePathname();
  return (
    <div
      className={`${
        path.startsWith("/dashboard")
          ? "hidden"
          : "p-12 bg-white first:font-lexend xs:p-8 dark:bg-dark dark:text-light"
      }`}
    >
      <div className="ourFooter gap-6 md:flex md:flex-wrap pb-6">
        <div className="brand sm:col-span-2">
          <div
            aria-labelledby="medCode Blog"
            className="inline-flex justify-between items-center"
            role="presentation"
          >
            <Image
              src={logo}
              loading="lazy"
              quality={40}
              alt="medCode blogs & articles"
              className="w-20 dark:bg-white dark:rounded-xl dark:p-1"
            />
            <div className="block mt-2">
              <h2 className="font-Yeseva text-3xl text-gray-800 dark:text-white">
                edCode
              </h2>
              <p className="text-xs tracking-widest">blog for programmers</p>
            </div>
          </div>
          <div className="mt-6 w-auto lg:max-w-sm">
            <p className="text-sm text-gray-800 dark:text-light">
              Explore the latest insights, articles,free components, and expert
              advice on programming and software development
            </p>
          </div>
        </div>
        <div className="contact space-y-2 text-sm">
          <Link
            href="/contact-us"
            className="text-base font-bold tracking-wide text-gray-900 dark:text-light hover:text-mainColor"
          >
            Contacts us
          </Link>
          <div className="flex dark:text-gray-400">
            <p className="mr-1 text-gray-800 dark:text-gray-400">Phone:</p>
            <a
              href="tel:+212600462196"
              aria-labelledby="Our phone"
              rel="noopener noreferrer"
              className="transition-colors dark:text-light hover:text-purple-800 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              +212600462196
            </a>
          </div>
          <div className="flex">
            <label className="mr-1 text-gray-800 dark:text-gray-400">
              Email:
            </label>
            <a
              href="mailto:med@vivacode.dev"
              aria-labelledby="Our email"
              rel="noopener noreferrer"
              className="transition-colors hover:text-purple-800 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              med@vivacode.dev
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800 dark:text-gray-400">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-labelledby="Our address"
              className="transition-colors hover:text-purple-800 duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>
        <div className="social">
          <span className="text-base font-bold tracking-wide text-gray-900 dark:text-light">
            Follow on Social Media
          </span>
          <div className="flex justify-start items-center space-x-3 mt-2">
            <div>
              <a
                href="https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A"
                target={"_blank"}
                rel="noopener noreferrer"
                onBlur={() => console.log("Visit our youtube channel")}
                aria-label="Visit our youtube channel"
                className="w-auto flex mb-4 justify-start items-center mx-3 sm:mx-1 focus:outline-none focus:ring focus:border-red-600"
              >
                <AiFillYoutube size={34} className="fill-red-600" />
                <span className="ml-1 font-semibold text-xs">youtube</span>
              </a>
              <a
                href="https://www.instagram.com/med_dakir/"
                target={"_blank"}
                rel="noopener noreferrer"
                aria-label="Visit our Instagram profile"
                onBlur={() => console.log("Visit our Instagram profile")}
                className="w-auto mx-3 flex justify-start items-center text-pink-600  hover:text-pink-800 focus:outline-none focus:ring focus:border-pink-600"
              >
                <BsInstagram size={26} className="" />
                <span className="text-dark dark:text-light font-semibold text-xs ml-1">
                  Instagram
                </span>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/med134"
                target={"_blank"}
                rel="noopener noreferrer"
                onBlur={() => console.log("Visit our github profile")}
                aria-label="Visit our github profile"
                className="w-auto mb-5 flex justify-start items-center dark:bg-dark sm:mx-1 focus:outline-none focus:ring  "
              >
                <GithubIcon fontSize={28} className="" />
                <span className="ml-1 font-semibold text-xs">Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/med-dkr/"
                target={"_blank"}
                rel="noopener noreferrer"
                onBlur={() => console.log("Visit our LinkedIn profile")}
                aria-label="Visit our linkedin profile"
                className="w-auto mx-3  flex justify-start items-center  dark:bg-dark sm:mx-1 focus:outline-none focus:ring "
              >
                <LinkedInIcon fontSize={26} className="" />
                <span className="ml-1 font-semibold text-xs">Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 text-center pb-10 border-t border-gray-600 py-4 lg:flex-row ">
        <div className="text-sm text-gray-600 dark:text-light">
          © Copyright 2024{" "}
          <Link
            href="/about"
            target="_blank"
            className="font-bold text-borderColor dark:text-light"
          >
            MED DAKIR
          </Link>
          . All rights reserved./
          <Link
            href="/privacy-policy"
            target="_blank"
            className="text-sm font-bold underline hover:text-purple-800 dark:text-light"
          >
            privacy policy
          </Link>
          <Link
            href="/terms-and-conditions"
            target="_blank"
            className="text-sm ml-3 font-bold underline hover:text-purple-800 dark:text-light"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
