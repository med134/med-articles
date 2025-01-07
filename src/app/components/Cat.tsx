import React from "react";
import Link from "next/link";
import { getAllCategories } from "@/src/utils/action";
import SearchTwo from "./SearchTwo";

const Cat = async () => {
  const cat = await getAllCategories();
  return (
    <>
      <SearchTwo />
      {cat?.map((item) => (
        <ul key={item._id} className="inline-flex items-start ml-2">
          <li className="flex mx-1">
            <Link
              className="p-2 px-3 border-mainColor mb-1 rounded hover:border-dark font-medium dark:hover:text-mainColor border dark:border-light text-gray-800 dark:text-light"
              href={`/search?query=${item.value}`}
            >
              {item?.label}
            </Link>
          </li>
        </ul>
      ))}
    </>
  );
};

export default Cat;
