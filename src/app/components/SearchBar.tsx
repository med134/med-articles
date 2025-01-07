"use client";
import React, { useState } from "react";
import Image from "next/image";
import { searchTemplates } from "@/src/utils/action";
import Link from "next/link";

interface Template {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
}

interface TemplatesCategoryProps {
  posts: Template[];
}
const SearchBar: React.FC<TemplatesCategoryProps> = ({ posts }) => {
  const [suggestions, setSuggestions] = useState<Template[]>([]);
  const [query, setQuery] = useState("");

  const onChangeHandle = (searchQuery: string) => {
    setQuery(searchQuery);
    const filteredPosts = posts.filter((post) => {
      const regex = new RegExp(`${searchQuery}`, "gi");
      return post.title.match(regex) || post.description.match(regex);
    });
    setSuggestions(filteredPosts);
  };
  return (
    <>
      <form className="mt-6 px-4 py-2 rounded-full max-w-2xl bg-gray-50 border flex focus-within:border-gray-300 lg:ml-12 xs:ml-0 xs:px-2 xs:py-1 dark:bg-dark dark:border-light dark:shadow-light">
        <input
          type="text"
          placeholder="Search for components & templates..."
          value={query}
          onChange={(e) => onChangeHandle(e.target.value)}
          className="bg-transparent w-full focus:outline-none font-semibold border-0 focus:ring-0 px-0 py-0"
          name="topic"
        />
        <button
          type="button"
          onClick={async () => {
            const result = await searchTemplates(query);
            setSuggestions(result || []);
          }}
          name="search-button"
          title="search-button"
          aria-labelledby="search-button"
          className="flex flex-row items-center hover:bg-cyan-600 justify-center px-4 rounded-full border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-mainColor text-white font-medium tracking-wide border-transparent py-1 h-[38px]"
        >
          <svg
            className="text-gray-200 h-5 w-5 p-0 fill-current hover:text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            xmlSpace="preserve"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="mt-2 w-1/2 xs:w-full sm:w-full bg-white dark:bg-dark shadow-lg rounded-md overflow-y-auto scroll-m-0 h-auto absolute z-20">
          {suggestions.map((item) => (
            <Link
              key={item._id}
              href={`/templates/${item.slug}`}
              className="flex justify-start items-center px-4 mb-2 border hover:bg-slate-500 dark:hover:bg-slate-500"
            >
              <Image
                src={item?.image}
                alt={item?.title}
                className="w-16 h-16 rounded-md object-cover border"
                loading="lazy"
                width={100}
                height={100}
              />
              <li className="px-2 py-1 text-sm font-semibold cursor-pointer text-dark dark:text-light xs:text-xs">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  );
};

export default SearchBar;
