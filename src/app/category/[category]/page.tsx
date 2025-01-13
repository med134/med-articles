import React from "react";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import ListAllBlogs from "../../components/ListAllBlogs";
import { getAllCategories, getArticleByCategories } from "@/src/utils/actions";
import { SkeltonCard } from "../../components/SkeltonCard";

type Params = Promise<{ category: string }>;
export async function generateMetadata({ params }: { params: Params }) {
  const { category } = await params;
  const post = await getArticleByCategories(category);
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
          url: post[0]?.image,
          width: "400",
          height: "300",
        },
      ],
    },
  };
}
interface Category {
  _id: string;
  label: string;
  value: string;
  image: string;
}
const Card = async ({ params }: { params: Params }) => {
  const { category } = await params;
  const [categoryHeader, post] = await Promise.all([
    getAllCategories(),
    getArticleByCategories(category),
  ]);
  const posts = JSON.parse(JSON.stringify(post));

  const myTitle =
    category === "all" ? `All Articles` : `All Articles About ${category}`;
  return (
    <div className="bg-light dark:bg-dark w-full py-16 p-6 sm:p-2 sm:py-16">
      <h1 className="px-14 text-mainColor dark:text-light sm:text-xl text-3xl font-outFit font-bold uppercase mt-16 lg:mt-2 md:px-6 xs:pt-6">
        #{myTitle}
      </h1>
      <div className="flex justify-around items-center px-16 pt-14 lg:px-4 md:flex-wrap sm:px-4">
        {categoryHeader?.map((item: Category) => (
          <Link
            className={`text-sm md:mb-3 w-24 flex flex-col justify-center items-center h-16 xl:h-10 sm:ml-2 dark:text-light sm:px-20 sm:rounded-md xs:w-24 sm:h-6 xs:bg-mainColor xs:text-light `}
            key={item._id}
            href={`/category/${item.value}`}
          >
            {item.image && (
              <Image
                src={item.image.trimEnd()}
                alt={item.label}
                loading="lazy"
                width={300}
                height={300}
                className={"w-12 h-12 xl:w-10 xl:h-10 rounded-full xs:hidden"}
              />
            )}
            <span className="font-semibold mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
      <Suspense fallback={<SkeltonCard />}>
        <ListAllBlogs post={posts} />
      </Suspense>
    </div>
  );
};
export default Card;
