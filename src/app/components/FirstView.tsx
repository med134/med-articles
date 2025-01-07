import React from "react";
import { FormatDate, getFirstPost } from "@/src/utils/action";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import icon from "@/public/images/development-amico.webp";

const FirstView = async () => {
  const post = await getFirstPost();

  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/djcnq7nmj/image/upload/v1734015580/dot-grid-removebg-preview_ncqgal.png')`,
      }}
      id="home"
      className="py-32 xl:pb-1 bg-light dark:bg-dark z-0"
    >
      {post?.map((item) => (
        <div
          key={item._id}
          className="grid grid-cols-5 px-24 p-8 sm:p-2 md:block xl:px-16 sm:px-2 xs:px-6 sm:mb-10"
        >
          <div className="p-2 col-span-3">
            <span className="flex justify-start items-center py-2 dark:text-light">
              <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
              <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                {FormatDate(item?.createdAt)}
              </span>
            </span>
            <Link href={`/blogs/${item.slug}`} aria-current="page">
              <h1
                className="bg-gradient-to-r py-3 space-y-4 text-5xl xl:text-3xl font-extrabold from-cyan-700 to-cyan-700 bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px] text-mainColor font-sans
      group-hover:bg-[length:100%_10px]
      dark:from-red-800 dark:to-purple-900 dark:text-light xs:text-2xl"
              >
                {item.title}
              </h1>
            </Link>
            <p className="mt-2 text-xl text-gray-850 py-4 xs:text-sm xs:mt-1 xs:py-2 dark:text-light">
              {item?.description.slice(0, 130)}...
            </p>
            <Link
              href={`/category/${item.category}`}
              className="flex justify-start items-center"
              aria-current="page"
            >
              <span className="bg-light p-1 xs:bg-transparent xs:text-sm dark:bg-slate-800  dark:text-light uppercase text-gray-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-transform duration-75 ease-out xs:py-4">
                {item.category} {item.tags}
              </span>
            </Link>
            <div className="flex justify-start items-center">
              <Link
                rel="preload"
                aria-current="page"
                href={`/blogs/${item.slug}`}
                className="inline-flex py-2.5 items-center xs:py-2 xs:text-xs mt-8 first-line:mt-4 mr-2  justify-center xs:justify-start rounded-md dark:text-dark bg-sky-800 px-16 xs:px-8 text-center text-white hover:text-dark md:mb-4 md:px-10 hover:bg-transparent hover:border hover:border-sky-800 dark:bg-light"
              >
                <span>Read more...</span>
              </Link>
              <Link
                rel="preload"
                aria-current="page"
                href={`/category/all`}
                className="inline-flex py-2.5 items-center xs:py-2 xs:text-xs mt-8 xs:justify-start first-line:mt-4 mr-2 hover:text-light justify-center rounded-md dark:text-dark border border-sky-800 md:px-10 xs:px-10  px-16 text-center text-dark  md:mb-4 hover:bg-sky-800 dark:bg-light"
              >
                <span>Explore Blogs</span>
              </Link>
            </div>
          </div>
          <div className="w-full rounded-xl md:hidden col-span-2 ml-6 xs:ml-2">
            <Image
              alt={item.title}
              src={icon}
              width={400}
              height={350}
              priority={true}
              className="rounded-2xl object-contain xl:object-contain xs:h-56"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FirstView;
