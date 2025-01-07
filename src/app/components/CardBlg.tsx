import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

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
  tags: string[];
  userId: string;
  email: string;
  userImage: string;
  createdAt: string;
}
interface CardBlgProps {
  blog: Article;
}

const CardBlg = ({ blog }: CardBlgProps) => {
  return (
    <div className="bg-white grid grid-cols-2 md:flex md:flex-col h-auto dark:bg-dark dark:border dark:border-light shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full rounded-lg overflow-hidden mx-auto mt-4">
      <div className="h-full w-full grid-cols-1">
        <Image
          src={blog.image}
          className="w-full h-full object-fill"
          alt={blog.title}
          width={500}
          height={500}
        />
      </div>
      <div className="p-6 grid-cols-1">
        <Link
          href={`/blogs/${blog.slug}`}
          className="text-lg font-semibold hover:underline"
        >
          {blog.title}
        </Link>
        <p className="mt-3 text-sm text-gray-500 dark:text-light">
          {blog.tags}
        </p>
        <div className="flex flex-wrap items-center group hover:bg-slate-100 cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
          <Link
            href={`/blogs/${blog.slug}`}
            className="ml-4 flex-1 flex justify-center items-center relative group"
          >
            <p className="text-xs text-gray-500 mt-0.5 dark:text-light dark:group-hover:text-dark">
              read moore ...
            </p>
            <MdArrowForwardIos className="absolute right-4 group-hover:translate-x-2 duration-50 ease-in dark:group-hover:text-dark" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBlg;
