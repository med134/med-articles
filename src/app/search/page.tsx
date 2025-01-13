import React from "react";
import {
  getAllCategories,
  searchFunction,
} from "@/src/utils/actions";
import SearchPage from "../components/SearchPage";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;
const page = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const query = Array.isArray(searchParams.query)
    ? searchParams.query[0]
    : searchParams.query || "";
  const searchingBlogs = (await searchFunction(query)) || [];
  const category = await getAllCategories();
  return (
    <div className="bg-light dark:bg-dark pt-36 text-center w-[100%]">
      <SearchPage
        firstSearch={searchingBlogs}
        queryOne={query}
        cat={category}
      />
    </div>
  );
};

export default page;
