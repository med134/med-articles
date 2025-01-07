import React from "react";
import Link from "next/link";
import Image from "next/image";
import BlogImage from "@/public/images/postera.png";
import { FormatDate, getPostsHome } from "@/src/utils/action";
const Card = async () => {
  const posts = await getPostsHome();
  return (
    <>
      {posts.map((item) => (
        <section
          key={item._id}
          className="w-auto p-4 flex justify-between dark:bg-dark dark:bg-opacity-80 bg-light items-start mb-3 border border-gray-500 rounded-xl sm:flex-col-reverse"
        >
          <div className="text-start">
            <span className="flex justify-start items-center py-2">
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="dark:fill-light"
              >
                <path
                  d="M3 9H21M7 3V5M17 3V5M6 12H8M11 12H13M16 12H18M6 15H8M11 15H13M16 15H18M6 18H8M11 18H13M16 18H18M6.2 21H17.8C18.9201 21 19.4802 21 19.908 20.782C20.2843 20.5903 20.5903 20.2843 20.782 19.908C21 19.4802 21 18.9201 21 17.8V8.2C21 7.07989 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="ml-2 font-semibold dark:text-light">
                {FormatDate(item?.createdAt)}
              </span>
            </span>
            <Link href={`/blogs/${item.slug}`}>
              <h2
                className="bg-gradient-to-r text-2xl font-semibold from-[#075985] to-[#075755] bg-[length:0px_10px] bg-left-bottom
      bg-no-repeat
      transition-[background-size]
      duration-500
      hover:bg-[length:100%_3px]
      group-hover:bg-[length:100%_10px]
      dark:from-[#075985] dark:to-[#075965] dark:text-light"
              >
                {item.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-700 py-3 dark:text-light">
              {item.description.slice(0, 160)}...
            </p>
            <Link
              href={`/dashboard/users/${item.userId}`}
              className="flex items-center justify-start py-3"
            >
              <Image
                src={item?.userImage || "https://i.ibb.co/mSjZwpw/download.png"}
                alt="userImage"
                className="w-8 h-8 rounded-full"
                width={24}
                height={24}
                loading="lazy"
                quality={30}
              />
              <span className="text-sm font-semibold text-gray-800 ml-2 dark:text-light">
                {item.username}
              </span>
            </Link>
            <div>
              <Link
                href={`/category/${item.category}`}
                className="flex justify-start items-center"
              >
                <span className="bg-light p-1 ml-2 px-1 text-gray-800 rounded-md font-semibold hover:bg-slate-800 hover:text-white transition-transform duration-75 ease-out">
                  {item.category} {item.tags}
                </span>
              </Link>
            </div>
          </div>
          <div className="">
            <Image
              src={item.image ? item.image : BlogImage}
              alt={item.title}
              width={300}
              height={300}
              loading="lazy"
              quality={60}
              className="object-contain h-auto rounded-xl max-w-xl xl:w-64 xs:w-full border border-gray-500"
            />
          </div>
        </section>
      ))}
      {posts.length > 0 && (
        <Link
          rel="preload"
          href="/category/all"
          className="flex justify-center items-center xs:pb-6"
        >
          <span className="text-center text-xl sm:text-sm text-gray-700 dark:text-light hover:bg-[#075985] rounded-md hover:text-light border border-gray-600 px-20 py-1 w-full dark:border-light">
            show moore articles...
          </span>
        </Link>
      )}
    </>
  );
};
export default Card;
