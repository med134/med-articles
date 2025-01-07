import React, { Suspense } from "react";
import { AiTwotoneSound } from "react-icons/ai";
import "@/src/app/globals.css";
import CategoryCard from "@/src/app/components/CategoryCard";
import dynamic from "next/dynamic";
import Card from "@/src/app/components/ServerCard";
import Loading from "@/src/app/components/Loading";
const Cat = dynamic(() => import("@/src/app/components/MainSide"), {
  loading: () => <Loading />,
});

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://res.cloudinary.com/djcnq7nmj/image/upload/v1734015580/dot-grid-removebg-preview_ncqgal.png')`,
      }}
      className="grid grid-cols-6 gap-6 xl:gap-2 lg:block dark:bg-dark sm:p-2"
    >
      <div className="right-sideT col-span-4 w-full px-10 xs:px-2 mb-6">
        <div className="text-2xl underline dark:text-light mb-4 pt-2 font-bold flex justify-start items-center text-gray-800 font-slab px-5 xs:px-2">
          <AiTwotoneSound className="dark:text-light" />
          <span className="sm:text-xl">Recent Articles</span>
        </div>
        <div className="div01 section" id="chapter1">
          <Card />
        </div>
      </div>
      <div className="left-sideT col-span-1 xl:w-72 lg:px-10 xs:w-full">
        <div className="mb-3">
          <h3 className="py-4 text-xl sm:mb-2 font-semibold dark:text-light">
            Follow Us
          </h3>
          <CategoryCard />
          <div className="h-[1px] mb-4 bg-slate-400 w-auto"></div>
          <Suspense fallback={<Loading />}>
            <Cat />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
