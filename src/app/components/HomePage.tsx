import React, { Suspense } from "react";
import { AiTwotoneSound } from "react-icons/ai";
import "@/src/app/globals.css";
import CategoryCard from "./CategoryCard";
import dynamic from "next/dynamic";
import CardHomePage from "./CardHomePage";
import Link from "next/link";
import SideBarLoading from "./SideBarLoading";
import { getPosts } from "@/src/utils/actions";
const Cat = dynamic(() => import("@/src/app/components/MainSide"), {
  loading: () => <SideBarLoading />,
});
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
  createdAt: Date;
}

const HomePage = async () => {
  const posts = await getPosts();

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
          {posts?.map((item: Article, index: number) => {
            if (index < 7 && index > 1) {
              return <CardHomePage key={index} item={item} />;
            }
            return null;
          })}
          <Link
            rel="preload"
            href="/blogs"
            className="flex justify-center items-center xs:pb-6"
          >
            <span className="text-center text-xl sm:text-sm text-gray-700 dark:text-light hover:bg-[#075985] rounded-md hover:text-light border border-gray-600 px-20 py-1 w-full dark:border-light">
              show moore articles...
            </span>
          </Link>
        </div>
      </div>
      <div className="left-sideT col-span-1 xl:w-72 lg:px-10 xs:w-full">
        <div className="mb-3">
          <h3 className="py-4 text-xl sm:mb-2 font-semibold dark:text-light">
            Follow Us
          </h3>
          <CategoryCard />
          <div className="h-[1px] mb-4 bg-slate-400 w-auto"></div>
          <Suspense fallback={<SideBarLoading />}>
            <Cat />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
