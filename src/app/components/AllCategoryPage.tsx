"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import imageBlog from "@/public/images/postera.png";
import dynamic from "next/dynamic";
const Pagination = dynamic(() => import("./Pagination"), { ssr: false });

interface Article {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  job: string;
  status: string;
  username: string;
  userId: string;
  userImage: string;
  createdAt: Date;
}
interface CategoryParams {
  post: Article[];
}
export const FormatDat = (dateString: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};
const AllCategoryPage: React.FC<CategoryParams> = ({ post }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleMovePages = (page: number) => {
    setCurrentPage(page);
  };
  const perPage = 3;
  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = post.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(post.length / perPage);
  return (
    <div className="">
      <div className="grid justify-center grid-cols-3 gap-6 mt-8 md:block bg-light px-16 sm:px-3 dark:bg-dark">
        {currentBlog?.map((item) => (
          <div
            key={item._id}
            className=" shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light"
          >
            <div className="hover:no-underline focus:no-underline dark:bg-gray-900">
              <Image
                width={300}
                height={300}
                className="object-fill w-full rounded h-44 dark:bg-gray-500 md:object-fill"
                src={item.image ? item.image.trimEnd() : imageBlog}
                alt={item.title}
                loading="lazy"
              />
              <div className="p-6 flex flex-col space-y-2">
                <span className="text-mainColor font-bold tex-sm">
                  #{item.category}
                </span>
                <Link
                  href={`/blogs/${item.slug}`}
                  className="bg-gradient-to-r cursor-pointer text-2xl font-semibold from-red-200 to-red-400 bg-[length:0px_10px] bg-left-bottom
  bg-no-repeat
  transition-[background-size]
  duration-500
  hover:bg-[length:100%_3px]
  group-hover:bg-[length:100%_10px]
  dark:from-red-800 dark:to-purple-900 dark:text-light"
                >
                  {item.title}
                </Link>
                <div className="flex justify-between items-center">
                  <Link
                    href={`/dashboard/users/${item?.userId}`}
                    className="flex items-center justify-center py-3"
                  >
                    <Image
                      src={
                        item?.userImage ||
                        "https://i.ibb.co/mSjZwpw/download.png"
                      }
                      alt="userImage"
                      className="w-8 h-8 rounded-full"
                      width={24}
                      height={24}
                      loading="lazy"
                      quality={30}
                    />
                    <span className="text-xs font-semibold text-gray-800 ml-2 dark:text-light">
                      {item?.username}
                    </span>
                  </Link>
                  <div className="flex justify-start items-center py-2 dark:text-light">
                    <FaRegCalendarAlt className="w-3 h-3 text-gray-800 dark:text-light" />
                    <span className="ml-2 text-xs font-semibold dark:text-light">
                      {FormatDat(item?.createdAt)}
                    </span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  {item.description.slice(0, 100)}...
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {post.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handleMovePages={handleMovePages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default AllCategoryPage;
