import React from "react";
import Image from "next/image";
import { getComments } from "@/src/utils/actions";
import { FormatDate } from "./AllDataArrays";
interface Comment {
  _id: string;
  comment: string;
  blogId: string;
  imageUser: string;
  username: string;
  createdAt: Date;
}
const UserComments = async ({ articleId }: { articleId: string }) => {
  const comments = await getComments(articleId);
  console.log(comments);

  return (
    <>
      <div className="bg-light p-4">
        {comments?.map((item: Comment) => (
          <div
            key={item._id}
            className="bg-white px-4 p-2 mb-1 rounded-lg shadow dark:bg-dark"
          >
            <div className="flex items-center mb-2">
              <Image
                src={item.imageUser || "https://i.ibb.co/mSjZwpw/download.png"}
                width={100}
                height={100}
                alt="User Avatar"
                className="w-8 h-8 object-contain rounded-full mr-3"
              />
              <div className="dark:text-light">
                <h3 className="font-semibold text-xs text-gray-600 dark:text-light">
                  {item.username}
                </h3>
                <p className="text-xs text-gray-500 dark:text-light">
                  {FormatDate(item.createdAt)}
                </p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-light text-xs">
              {item.comment}
            </p>
            <div className="flex items-center mt-2">
              <button className="text-gray-700 hover:text-blue-600 mr-2 text-xs dark:text-light">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 inline dark:text-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UserComments;
