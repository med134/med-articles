import React from "react";
import Form from "next/form";
import SearchButton from "./SearchButton";

const SearchTwo = () => {
  return (
    <Form
      action={`/search`}
      className={`relative inline-flex w-full h-14 mt-4 xl:right-0 lg:relative lg:left-0 rounded-lg`}
    >
      <input
        type="text"
        name="query"
        required
        aria-labelledby="search-input"
        className={`h-8 w-full rounded-lg border border-gray-800 dark:placeholder-light xs:placeholder-dark  sm:placeholder-light dark:border-light border-b-mainColor sm:border sm:border-b-mainColor bg-transparent text-dark placeholder-dark dark:border-b-light border-transparent text-sm lg:border lg:border-transparent lg:bg-transparent lg:border-b-slate-50  dark:text-light py-4 pl-2 lg:text-medium  outline-none focus:rounded-md focus:border-2 focus:border-mainColor`}
        placeholder="one keyword..."
      />
      <SearchButton
        className={"h-10 bg-transparent border-none hover:bg-transparent"}
      />
    </Form>
  );
};

export default SearchTwo;
