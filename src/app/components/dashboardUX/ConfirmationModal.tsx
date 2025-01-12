"use client";
import React, { useState } from "react";
import { RiDeleteBin5Line, RiCloseFill } from "react-icons/ri";
import { handelDeleteBlog } from "@/src/utils/actions";

interface DeleteConfirmationProps {
  blogId: string | undefined;
  onClose: () => void;
}

const ConfirmationModal: React.FC<DeleteConfirmationProps> = ({
  blogId,
  onClose,
}) => {
  console.log(blogId);
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="fixed inset-0 p-4 flex justify-center items-center w-full h-full z-[1000] bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2">
          <RiCloseFill className="fill-gray-400 hover:fill-red-500 w-7 h-7 cursor-pointer" />
        </button>
        <div className="my-8 text-center flex flex-col justify-end items-center">
          <RiDeleteBin5Line className="fill-red-500 w-14 h-16 flex justify-center" />
          <h4 className="text-gray-800 text-lg font-semibold mt-4">
            Are you sure you want to delete this article?
          </h4>
          <p className="text-sm text-gray-600 mt-4">
            Touch and hold the blog you want to delete, deleting process...
          </p>
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className="flex justify-center items-center bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
              onClick={async () => {
                if (blogId) {
                  setLoading(true);
                  await handelDeleteBlog(blogId);
                }
                setLoading(false);
                onClose();
              }}
            >
              {isLoading ? "deleting..." : "Delete"}
            </button>

            <button
              onClick={onClose}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
