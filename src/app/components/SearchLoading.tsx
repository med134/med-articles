import React from "react";

const SearchLoading = () => {
  return (
    <div className="fixed z-[1000] flex justify-center items-center inset-0 overflow-y-auto bg-white opacity-75">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="rounded-md h-12 w-12 border-4 border-t-4 dark:border-light border-blue-950 animate-spin absolute sm:top-44 sm:left-[40%]"></div>
      </div>
    </div>
  );
};

export default SearchLoading;