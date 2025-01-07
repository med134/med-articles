import React from "react";
export default function SideBarLoading() {
  return (
    <>
      {" "}
      {Array(5) // Number of skeleton rows you want to show
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded shadow w-[340px] mb-6 mt-10"
          >
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-md bg-gray-300 h-20 w-20" />
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-300 rounded w-3/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded" />
                  <div className="h-4 bg-gray-300 rounded w-5/6" />
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
