import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import Link from "next/link";
import { deleteDraftBlog } from "@/src/utils/actions";
import { Blog } from "../Interfaces";
import { DeleteButton } from "../SearchButton";
import { FormatDate } from "../AllDataArrays";

interface ArticleProps {
  draftBlog: Blog[];
}
const EditPending = ({ draftBlog }: ArticleProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <h1 className="text-2xl font-bold mb-10 sm:mb-6">
        Your Blogs & Articles
      </h1>
      <table className="w-full">
        <thead>
          <tr className="font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-gray-600">
            <th className="px-4 py-3 md:text-sm">title</th>
            <th className="px-4 py-3 md:text-sm sm:hidden">writer</th>
            <th className="px-4 py-3 md:text-sm sm:hidden">Date publish</th>
            <th className="px-4 py-3 md:text-sm">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {draftBlog?.map((post: Blog) => (
            <tr key={post.id} className="text-gray-700">
              <td className="px-4 py-3 border">
                <p className="font-semibold text-dark md:text-sm">
                  {post.title.slice(0, 40)}..
                </p>
              </td>
              <td className="px-4 py-3 text-sm font-semibold border sm:hidden">
                {post.username}
              </td>

              <td className="px-4 py-3 text-sm border sm:hidden">
                {FormatDate(post.createdAt)}
              </td>
              <td className="flex py-5 md:py-2 text-sm border font-semibold justify-evenly md:flex md:flex-col md:justify-center md:items-center">
                <Link
                  href={`/dashboard/blogs/edit-articles/${post.slug}`}
                  className="px-3 py-2 xs:px-2 md:mb-2 hover:text-blue-500 bg-gray-100 rounded-md text-dark"
                >
                  <BiSolidEdit className="ml-2 w-5 h-5" />
                </Link>
                <form
                  action={deleteDraftBlog}
                  className="px-3 py-2 bg-gray-100 xs:px-2 hover:text-red-500 sm:mb-2 rounded-md text-dark"
                >
                  <DeleteButton />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditPending;
