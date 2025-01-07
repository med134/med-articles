import React from "react";

const BlogLoading = () => {
  return (
    <div className="p-4 flex mt-3 justify-between shadow-lg rounded-lg shadow-gray-500 items-center space-y-8 animate-pulse  md:space-x-1 md:space-y-2 md:flex-wrap-reverse md:items-start md:mb-6">
      <div className="w-full md:mt-3">
        <div className="h-4 py-3 bg-gray-500 rounded-full dark:bg-gray-700 w-44 mb-4" />
        <div className="h-3 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-80 xl:w-64 lg:w-28" />
        <div className="h-3 bg-gray-500 rounded-full dark:bg-gray-700 mb-2.5 w-80 xl:w-64 lg:w-28" />
        <div className="h-3 bg-gray-500 rounded-full dark:bg-gray-700  mb-2.5 w-72 xl:w-52" />
        <div className="h-3 bg-gray-500 rounded-full dark:bg-gray-700  mb-2.5 w-72 xl:w-52" />
        <div className="h-3 bg-gray-500 rounded-full dark:bg-gray-700 w-72 mb-3 xl:w-44" />
        <div className="flex justify-start items-center">
          <div className="rounded-full bg-gray-500 h-8 w-8" />
          <div className="h-3 bg-gray-500 rounded-full dark:bg-gray-700 w-32 ml-2" />
        </div>
        <div className=" bg-gray-500 rounded-md dark:bg-gray-900 w-20 h-6 mt-3" />
      </div>
      <div className="flex items-center justify-center w-full h-52 bg-gray-300 rounded dark:bg-gray-700 md:mb-2">
        <svg
          className="w-10 h-10 text-gray-500 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    </div>
  );
};

export default BlogLoading;
