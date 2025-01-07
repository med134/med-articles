import React from "react";
import Image from "next/image";
import { FormatDate } from "@/src/utils/action";

interface UserCommentsProps {
  data: Array<{
    _id: string;
    imageUser: string;
    username: string;
    createdAt: Date;
    comment: string;
  }>;
}
const UserComments = ({ data }: UserCommentsProps) => {
  return (
    <>
      {data?.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 rounded-lg shadow dark:bg-dark"
        >
          <div className="flex items-center mb-2">
            <Image
              src={item.imageUser || "https://i.ibb.co/mSjZwpw/download.png"}
              width={100}
              height={100}
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="dark:text-light">
              <h3 className="font-semibold text-gray-600 dark:text-light">
                {item.username}
              </h3>
              <p className="text-sm text-gray-500 dark:text-light">
                {FormatDate(item.createdAt)}
              </p>
            </div>
          </div>
          <p className="text-gray-700 dark:text-light">{item.comment}</p>
          <div className="flex items-center mt-2">
            <button className="text-gray-700 hover:text-blue-600 mr-2 dark:text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline dark:text-light"
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
    </>
  );
};

export default UserComments;
