"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FilterTemplates from "./FilterTemplates";
import dynamic from "next/dynamic";
const Pagination = dynamic(() => import("./Pagination"), { ssr: false });

interface Template {
  _id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  link: string;
  job: string;
  status: string;
  code: string;
  username: string;
}

interface TemplatesCategoryProps {
  data: Template[];
}
const TemplatesCategory: React.FC<TemplatesCategoryProps> = ({ data }) => {
  const [newData, setNewData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  const handleTagClick = (tag: string) => {
    const filtered = data.filter((item) => item.category === tag);
    setNewData(filtered);
  };
  const seAttCat = () => {
    setNewData(data);
  };
  const handleMovePages = (page: number) => {
    setCurrentPage(page);
  };
  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = newData.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(newData.length / perPage);
  return (
    <>
      <FilterTemplates handleTagClick={handleTagClick} seAttCat={seAttCat} />
      <article className="grid grid-cols-3 gap-6 p-16 pt-4 xl:gap-4 xl:p-8 lg:grid-cols-2 lg:gap-6 lg:p-10 sm:flex flex-wrap dark:bg-dark">
        {currentBlog?.map((item) => (
          <div
            key={item._id}
            className="max-w-sm rounded overflow-hidden shadow-lg dark:shadow-light"
          >
            <Image
              className="w-full h-44"
              src={item.image}
              alt={item.title}
              width={300}
              height={300}
              loading="lazy"
              quality={50}
            />
            <div className="px-6 py-2">
              <Link
                href={`/templates/${item.slug}`}
                className="font-bold text-xl mb-2 mt-2 text-tailwindColor dark:text-light hover:underline"
              >
                {item.title}
              </Link>
              <p className={`text-gray-700 text-sm mt-2 dark:text-light`}>
                {item.description.slice(0, 70)}...
              </p>
            </div>
            <div className="pt-1 pb-3 flex justify-between px-4 p-6">
              <span className="bg-gray-200 rounded-full text-sm p-1 py-1 px-2 font-semibold text-gray-700 ">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </article>
      {newData.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handleMovePages={handleMovePages}
          currentPage={currentPage}
        />
      )}
    </>
  );
};

export default TemplatesCategory;
