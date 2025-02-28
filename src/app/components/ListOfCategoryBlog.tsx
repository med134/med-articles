import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FormatDate } from "./AllDataArrays";

interface Post {
  image: { url: string };
  title: string;
  category: string;
  slug: string;
  userId: string;
  userImage?: string;
  username: string;
  description: string;
  createdAt: Date;
}

const ListOfCategoryBlog = ({ post }: { post: Post }) => {
  return (
    <div className=" shadow-lg dark:shadow-white rounded-md lg:block md:mb-6 lg:w-full sm:w-full dark:bg-dark dark:border-light">
      <div className="hover:no-underline focus:no-underline dark:bg-gray-900">
        <Image
          width={800}
          height={500}
          className="object-fill w-full rounded h-44 dark:bg-gray-500 md:object-fill"
          src={post.image.url}
          alt={post.title}
          loading="lazy"
        />
        <div className="p-6 flex flex-col space-y-2">
          <span className="text-mainColor font-bold tex-sm">
            #{post.category}
          </span>
          <Link
            href={`/blogs/${post.slug}`}
            className="bg-gradient-to-r cursor-pointer text-2xl font-semibold from-red-200 to-red-400 bg-[length:0px_10px] bg-left-bottom
bg-no-repeat
transition-[background-size]
duration-500
hover:bg-[length:100%_3px]
group-hover:bg-[length:100%_10px]
dark:from-red-800 dark:to-purple-900 dark:text-light"
          >
            {post.title}
          </Link>
          <div className="flex justify-between posts-center">
            <div className="flex justify-start posts-center py-2 dark:text-light">
              <FaRegCalendarAlt className="w-3 h-3 text-gray-800 dark:text-light" />
              <span className="ml-2 text-xs font-semibold dark:text-light">
                {FormatDate(post?.createdAt)}
              </span>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            {post.description.slice(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListOfCategoryBlog;
