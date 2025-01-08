import React from "react";
import {
  getAllCategories,
  getPosts,
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
  const publicPosts = await getPosts();
  const category = await getAllCategories();
  const cat = JSON.parse(JSON.stringify(category));
  const articles = JSON.parse(JSON.stringify(publicPosts));
  const firstSearch =JSON.parse(JSON.stringify(searchingBlogs));
  return (
    <div className="bg-light dark:bg-dark pt-36 text-center w-[100%]">
      <SearchPage
        posts={articles}
        firstSearch={firstSearch}
        queryOne={query}
        cat={cat}
      />
    </div>
  );
};

export default page;
