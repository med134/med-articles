"use client";
import React, { useState } from "react";
import CardBlg from "@/src/app/components/CardBlg";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import { searchFunction } from "@/src/utils/action";

interface Article {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  job: string;
  status: string;
  username: string;
  tags: string[];
  userId: string;
  email: string;
  userImage: string;
  createdAt: string;
}
interface Category {
  _id: string;
  slug: string;
  image: string;
  value: string;
  label: string;
}

interface SearchPageProps {
  posts: Article[];
  firstSearch: Article[];
  cat: Category[];
  queryOne: string;
}
const SearchPage: React.FC<SearchPageProps> = ({
  posts,
  firstSearch,
  cat,
  queryOne,
}) => {
  const [suggestions, setSuggestions] = useState(firstSearch);
  const [query, setQuery] = useState(queryOne);
  const [selectedCategories, setSelectCategory] = useState("");

  //input onChange handler
  const onChangeHandle = (searchQuery: string) => {
    setQuery(searchQuery);
    const filteredPosts = posts.filter((post) => {
      const regex = new RegExp(`${searchQuery}`, "gi");
      return post.title.match(regex) || post.description.match(regex);
    });
    setSuggestions(filteredPosts);
  };

  // handel change category
  const handleCategoryChange = (cat: string) => {
    const filteredPosts = posts.filter((post) => post.category === cat);
    setSuggestions(filteredPosts);
    setSelectCategory(cat);
  };

  return (
    <div className="grid grid-cols-6 gap-6 xl:gap-2 lg:flex lg:flex-col-reverse dark:bg-dark sm:p-2 w-[100%]">
      <div className="right-sideT col-span-4 w-full px-10 xl:px-2 mb-6">
        <div className="flex flex-col dark:text-light mb-4 pt-2 justify-start text-gray-800 px-10 xs:px-2">
          <h1 className=" text-mainColor text-left sm:mt-3 sm:text-sm px-5 dark:text-light text-xl font-outFit font-semibold uppercase">
            #{query}, {selectedCategories}
          </h1>
          {suggestions && (
            <div className="flex flex-col justify-center p-4 xl:p-1 gap-6 bg-light dark:bg-dark">
              {suggestions.map((item) => (
                <CardBlg key={item._id} blog={item} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="left-sideT col-span-1 xl:w-72">
        <h3 className="py-2 text-lg lg:text-sm text-left sm:mb-2 font-semibold dark:text-light text-mainColor">
          #Search & filter blogs
        </h3>
        <form className="w-full lg:w-[500px] sm:w-[140px] xs:w-[350px] h-12 relative rounded-xl bg-gray-50 border focus-within:border-gray-300 xs:px-2 xs:py-1 dark:bg-dark dark:border-light dark:shadow-light">
          <input
            type="text"
            placeholder="Search for articles..."
            value={query}
            onChange={(e) => onChangeHandle(e.target.value)}
            className="bg-transparent w-full mt-2 dark:text-light focus:outline-none font-semibold border-0 focus:ring-0 px-4"
          />
          <button
            type="button"
            onClick={async () => {
              const result = await searchFunction(query);
              setSuggestions(result);
            }}
          >
            <IoSearchOutline className="absolute right-3 bottom-3 w-5 h-5 dark:text-light" />
          </button>
        </form>
        <div className="px-5 flex flex-col justify-start items-start lg:px-1 lg:mb-4 w-full">
          <span className="dark:text-light py-2">filter by categories</span>
          <div className="w-full lg:grid lg:grid-cols-3 lg:gap-x-36 xs:grid-cols-2">
            {cat.map((item, index) => {
              if (index > 0) {
                return (
                  <div key={index} className="w-full h-4 py-6 cursor-pointer">
                    <input
                      type="checkbox"
                      id={item.value}
                      value={item.value}
                      className="hidden peer"
                      checked={selectedCategories.includes(item.value)}
                      onChange={() => handleCategoryChange(item.value)}
                    />
                    <label
                      htmlFor={item.value}
                      className="flex items-center justify-start dark:bg-dark lg:w-[125px] p-2 px-2 lg:px-1 w-full text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-mainColor hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
                    >
                      <Image
                        src={item.image}
                        alt={item.label}
                        width={100}
                        height={100}
                        className="w-6 h-6"
                      />
                      <span className="text-sm font-semibold ml-2">
                        {item.label}
                      </span>
                    </label>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
