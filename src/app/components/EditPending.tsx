"use client";
import React, { useActionState } from "react";
import { BiSolidEdit } from "react-icons/bi";
import Link from "next/link";
import { Blog } from "./Interfaces";
import { deleteDraftBlog } from "@/src/utils/action";
import { RiDeleteBin5Line } from "react-icons/ri";

interface ArticleProps {
  draftBlog: Blog[];
}
const EditPending = ({ draftBlog }: ArticleProps) => {
  const [error, action, isPending] = useActionState(deleteDraftBlog, undefined);
  return (
    <div className="w-full overflow-x-auto">
      <h1 className="text-2xl font-bold mb-10 sm:mb-6">
        Your Blogs & Articles
      </h1>
      {error && <p>something went error</p>}
      <table className="w-full">
        <thead>
          <tr className="font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-gray-600">
            <th className="px-4 py-3 md:text-sm">title</th>
            <th className="px-4 py-3 md:text-sm sm:hidden">writer</th>
            <th className="px-4 py-3 md:text-sm">status</th>
            <th className="px-4 py-3 md:text-sm sm:hidden">Date publish</th>
            <th className="px-4 py-3 md:text-sm">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {draftBlog?.map((post: Blog) => (
            <tr key={post._id} className="text-gray-700">
              <td className="px-4 py-3 border">
                <p className="font-semibold text-dark md:text-sm">
                  {post.title.slice(0, 40)}..
                </p>
              </td>
              <td className="px-4 py-3 text-sm font-semibold border sm:hidden">
                {post.username}
              </td>
              <td className="px-4 py-3 text-xs border">
                <span
                  className={`${
                    post.status === "draft"
                      ? "text-red-600 bg-red-100 px-4 py-1 font-semibold"
                      : "px-4 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                  }`}
                >
                  {" "}
                  {post?.status}
                </span>
              </td>
              <td className="px-4 py-3 text-sm border sm:hidden">h hhejbc</td>
              <td className="flex py-5 md:py-2 text-sm border font-semibold justify-evenly md:flex md:flex-col md:justify-center md:items-center">
                <Link
                  href={`/dashboard/blogs/edit-articles/${post.slug}`}
                  className="px-3 py-2 xs:px-2 md:mb-2 hover:text-blue-500 bg-gray-100 rounded-md text-dark"
                >
                  <BiSolidEdit className="ml-2 w-5 h-5" />
                </Link>

                <button
                  className="px-3 py-2 bg-gray-100 xs:px-2 hover:text-red-500 sm:mb-2 rounded-md text-dark"
                  onClick={() => {
                    action(post._id);
                  }}
                >
                  <RiDeleteBin5Line
                    className={`w-5 h-5 ${isPending && "hidden"}`}
                  />
                  {isPending && <span>deleting...</span>}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditPending;
