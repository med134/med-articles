import { getAllCategories, getArticleByCategories } from "@/src/utils/actions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Suspense } from "react";
import ListAllBlogs from "../components/ListAllBlogs";
import { SkeltonCard } from "../components/SkeltonCard";
interface Category {
  _id: string;
  label: string;
  value: string;
  image: string;
}
const page = async () => {
  const categories = await getAllCategories();
  const posts = await getArticleByCategories("all");
  return (
    <div className="bg-light dark:bg-dark w-full py-32 p-6 sm:p-2 sm:py-16">
      <div className="flex justify-around items-center px-16 pt-16 lg:px-4 md:flex-wrap sm:px-4">
        {categories?.map((item: Category) => (
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

export default page;
