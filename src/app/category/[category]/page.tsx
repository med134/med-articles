import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../../components/AllDataArrays";
import { getArticleByCategories } from "@/src/utils/strapiSever";
import { Blog } from "../../components/Interfaces";
import ListOfCategoryBlog from "../../components/ListOfCategoryBlog";
import SkeltonCard from "../../components/SkeltonCard";

interface Post {
  image: { url: string };
  title: string;
  category: string;
  slug: string;
  userId: string;
  userImage?: string;
  username: string;
  description: string;
  createdAt: Date;
}
type Params = Promise<{ category: string }>;
export async function generateMetadata({ params }: { params: Params }) {
  const { category } = await params;
  const post: Post = await getArticleByCategories(category);
  const heading = `All Articles About ${category}`;
  return {
    title: heading,
    description: `Explore a treasure trove of insightful programming articles and engaging blogs about ${category} Discover expert-written content covering languages, frameworks`,
    keywords: [
      "React",
      "solution",
      "coding",
      "articles",
      "programming",
      "blogs",
      "learn",
      "Next.js",
      "JavaScript",
      "easy",
    ],
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/category/${category}`,
      languages: {
        "en-US": `en-US/category/${category}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    openGraph: {
      title:
        category === "all"
          ? `All Blogs & Articles`
          : `All Blogs About ${category}`,
      description: `Explore a treasure trove of insightful programming articles and engaging blogs about ${category} Discover expert-written content covering languages, frameworks`,
      url: `https://www.medcode.dev/category/${category}`,
      images: [
        {
          url:
            post?.image?.url ||
            "https://res.cloudinary.com/djcnq7nmj/image/upload/v1739219512/small_pagination_server_a8cawz_6ad576626b.png",
          width: "400",
          height: "300",
        },
      ],
    },
  };
}

const Card = async ({ params }: { params: Params }) => {
  const { category } = await params;
  const posts = await getArticleByCategories(category);

  return (
    <div className="bg-light dark:bg-dark w-full py-16 p-6 sm:p-2 sm:py-16">
      <h1 className="px-14 text-mainColor dark:text-light sm:text-xl text-3xl font-outFit font-bold uppercase mt-16 lg:mt-2 md:px-6 xs:pt-6">
        #{category}
      </h1>
      <div className="flex justify-around items-center px-16 pt-14 lg:px-4 md:flex-wrap sm:px-4">
        {categories?.map((item) => (
          <Link
            className={`text-sm md:mb-3 w-24 flex flex-col justify-center items-center h-16 xl:h-10 sm:ml-2 dark:text-light sm:px-20 sm:rounded-md xs:w-24 sm:h-6 xs:bg-mainColor xs:text-light `}
            key={item.value}
            href={`/category/${item.value}`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              loading="lazy"
              width={300}
              height={300}
              className={"w-12 h-12 xl:w-10 xl:h-10 rounded-full xs:hidden"}
            />

            <span className="font-semibold mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
      <Suspense fallback={<SkeltonCard />}>
        <div className="grid justify-center grid-cols-3 gap-6 mt-8 py-8 md:block bg-light px-16 sm:px-3 dark:bg-dark">
          {posts?.map((item: Blog) => (
            <ListOfCategoryBlog key={item.id} post={item} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};
export default Card;
