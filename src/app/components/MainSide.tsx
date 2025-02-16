import React from "react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import SearchTwo from "./SearchTwo";
import { categories } from "./AllDataArrays";

const Cat = async () => {
  return (
    <>
      <SearchTwo />
      {categories?.map((item) => (
        <div key={item.value}>
          <div className="group flex justify-between items-center py-1 mt-3 sm:mt-0">
            <Link
              className="px-4 xs:px-0 font-semibold text-gray-700 dark:text-light group-hover:text-mainColor group-hover:font-bold"
              href={`/search?query=${item.value}`}
            >
              {item.label}
            </Link>
            <AiOutlineRight className="group group-hover:text-mainColor dark:text-light group-hover:font-bold xs:right-3" />
          </div>
          <div className="h-[1px] mb-4 bg-slate-400"></div>
        </div>
      ))}
    </>
  );
};

export default Cat;
