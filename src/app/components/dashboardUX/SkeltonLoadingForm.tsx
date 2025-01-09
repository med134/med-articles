import React from "react";

const SkeletonLoadingForm = () => {
  return (
    <div className="flex flex-col gap-3 max-w-2xl mx-auto mt-8">
      <div className="bg-gray-300 h-8 w-2/3 animate-pulse rounded"></div>
      <div className="bg-gray-300 h-8 w-full animate-pulse rounded"></div>
      <div className="bg-gray-300 h-8 w-full animate-pulse rounded"></div>
      <div className="bg-gray-300 h-8 w-full animate-pulse rounded"></div>
      <div className="bg-gray-300 h-8 w-full animate-pulse rounded"></div>
      <div className="bg-gray-300 h-12 w-full animate-pulse rounded"></div>
      <div className="bg-gray-300 h-12 w-full animate-pulse rounded"></div>
      <div className="bg-gray-300 h-400 w-full animate-pulse rounded"></div>
      <button
        type="button"
        className="bg-gray-300 font-bold text-white py-3 px-6 w-auto hover:bg-gray-400 rounded-lg cursor-not-allowed"
        disabled
      >
        Loading...
      </button>
    </div>
  );
};

export default SkeletonLoadingForm;
