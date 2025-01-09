import React from "react";

const IsUpdate = ({ success }: { success: string }) => {
  return (
    <div className="text-light px-6 flex font-semibold justify-center items-center text-xl uppercase rounded-md bg-green-500 py-2">
      <svg
        className="h-6 w-6 text-green-600 bg-light rounded-full"
        stroke="currentColor"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>

      <p className="ml-4">{success}</p>
    </div>
  );
};

export default IsUpdate;
