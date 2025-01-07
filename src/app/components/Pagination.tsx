"use client";
import React from "react";
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  handleMovePages: (page: number) => void;
}
const Pagination = ({
  handleMovePages,
  currentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <div
      aria-label="Page navigation"
      className="flex justify-center flex-wrap mt-16"
    >
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => handleMovePages(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-dark dark:text-light"
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <button
              onClick={() => handleMovePages(index + 1)}
              className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-500 border-gray-300 dark:bg-dark dark:text-light hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handleMovePages(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center dark:bg-dark dark:text-light px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
