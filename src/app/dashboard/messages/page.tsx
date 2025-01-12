import React from "react";
import { FormatDate, getMessages, deleteMessage } from "@/src/utils/actions";
import Image from "next/image";
import { DeleteButton } from "@/src/app/components/SearchButton";
import { BiSolidEdit } from "react-icons/bi";

const page = async () => {
  const message = await getMessages();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Messages</h1>
      {message?.map((item) => {
        return (
          <div
            className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between"
            key={item._id}
          >
            <div>
              <div className="flex items-center mb-2">
                <Image
                  src="https://i.ibb.co/mSjZwpw/download.png"
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-3"
                  height={100}
                  width={100}
                />
                <div>
                  <h3 className="font-semibold">{item.name},</h3>
                  <p className="text-sm text-gray-500">
                    Send on {FormatDate(item.createdAt)}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{item.message}</p>
            </div>
            <div className="flex space-x-2 sm:space-x-0 p-2 sm:flex-col justify-center">
              <a
                href={`mailto:${item.email}`}
                target="_blank"
                className="flex justify-around group px-4 py-2 h-10 xs:px-2 sm:mb-2 items-center hover:bg-blue-400 bg-blue-500 rounded-md text-light"
              >
                <span className="xs:hidden">Reply</span>
                <BiSolidEdit className="ml-2" />
              </a>
              <form
                action={deleteMessage}
                className="flex justify-around h-10 group px-4 py-2 xs:px-2 sm:mb-2 items-center hover:bg-red-400 bg-red-500 rounded-md text-light"
              >
                <input type="hidden" name="id" value={item._id} />
                <DeleteButton />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default page;
