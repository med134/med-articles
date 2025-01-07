import React from "react";

const HomeDash = () => {
  return (
    <div className="grid grid-cols-4 py-10 sm:grid-cols-2 gap-6 w-full">
      <div className="flex col-span-1 flex-col px-2 py-2 bg-white border dark:border-light shadow rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-blue-500">
            28
          </div>
          <div className="text-lg font-medium text-blue-500">Total Blogs</div>
        </div>
      </div>
      <div className="flex flex-col px-2 col-span-1 py-2 bg-white border dark:border-light shadow rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-amber-500">
            17
          </div>
          <div className="text-lg font-medium text-amber-600">
            Total Users
          </div>
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 col-span-1 bg-white shadow border dark:border-light rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-red-500">
            1
          </div>
          <div className="text-lg font-medium text-red-600">Draft Blog</div>
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 col-span-1 bg-white shadow border dark:border-light rounded-lg overflow-hidden">
        <div className="flex flex-col items-center space-y-2">
          <div className="text-6xl font-bold tracking-tight leading-none text-mainColor">
            6
          </div>
          <div className="text-lg font-medium text-mainColor">Total Topics</div>
        </div>
      </div>
    
    </div>
  );
};

export default HomeDash;
