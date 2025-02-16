import React from "react";
import Link from "next/link";
import SearchTwo from "./SearchTwo";
import { categories } from "./AllDataArrays";

const SideBarCategory = () => {
  return (
    <>
      <SearchTwo />
      {categories?.map((item) => (
        <ul key={item.value} className="inline-flex items-start ml-2">
          <li className="flex mx-1">
            <Link
              className="p-2 px-3 border-mainColor mb-1 rounded hover:border-dark font-medium dark:hover:text-mainColor border dark:border-light text-gray-800 dark:text-light"
              href={`/category/${item.value}`}
            >
              {item?.label}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default SideBarCategory;
