import Image from "next/image";
import React from "react";
import { CustomLink } from "./CustomLinks";
import med from "@/public/images/logo-med-removebg-preview.webp";
import Link from "next/link";

const MainLink = () => {
  return (
    <div
      className={`w-full px-24 flex justify-between items-center font-semibold xl:px-6 lg:hidden`}
    >
      <Link
        href="/"
        className="flex items-center justify-between flex-wrap cursor-pointer"
      >
        <Image
          src={med}
          alt="website-logo"
          className="object-cover w-16 h-16 dark:bg-light dark:rounded-md dark:w-14 dark:h-14"
          width={100}
          height={100}
          loading="lazy"
        />
        <span className={`text-3xl ml-2 text-dark dark:text-light lg:hidden`}>
          medcode
        </span>
      </Link>
      <div className="flex items-center justify-evenly xl:ml-6 bg-transparent z-50">
        <CustomLink
          key="templates"
          href="/templates"
          title="templates"
          className="mx-4 uppercase dark:text-light"
        />
        <CustomLink
          key="projects"
          href="/projects"
          title="projects"
          className="mx-4 uppercase dark:text-light"
        />
        <CustomLink
          key="about"
          href="/about"
          title="About Us"
          className="mx-4 uppercase dark:text-light"
        />
        {/*   {user ? (
          <>
            <CustomLink
              key="dashboard"
              href="/dashboard"
              title="Dashboard"
              className="mx-4 uppercase dark:text-light"
            />
            <ProfileDown user={user} />
          </>
        ) : (
          <CustomLink
            key="login"
            href="/login"
            title="Create Post"
            className="mx-4 uppercase dark:text-light"
          />
        )} */}
      </div>
    </div>
  );
};

export default MainLink;
