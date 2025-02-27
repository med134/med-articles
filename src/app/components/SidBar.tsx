import React from "react";
import Link from "next/link";
import Image from "next/image";
import SideBarCategory from "./SideBarCategory";
import { Blog } from "./Interfaces";
import { getData } from "@/src/utils/strapiSever";

const SidBar = async ({ postSlug }: { postSlug: string }) => {
  const dev = await getData();

  return (
    <div className="mt-3">
      <aside className="w-full rounded-lg border-2 py-2 border-mainColor mb-6 p-2 mt-3 dark:border-light">
        <span className="text-lg font-bold py-3 text-gray-800 dark:text-light">
          Search...
        </span>
        <SideBarCategory />
      </aside>
      <div className="pt-1">
        <span className="text-[18px] text-gray-800 font-semibold mt-7 sm:w-full sm:text-xl dark:text-light">
          Recent Related Posts
        </span>
        {dev?.map(
          (item: Blog, index: number) =>
            index < 4 &&
            item.slug !== postSlug && (
              <div key={item.id} className="flex justify-start items-center">
                <Image
                  className="object-contain w-36 h-36"
                  src={item.image?.url.toString()}
                  alt={item.title}
                  width={200}
                  height={200}
                  quality={50}
                  loading="lazy"
                />

                <div className="p-2 ml-2">
                  <Link
                    href={`/category/${item.category}`}
                    className="uppercase tracking-wide text-sm text-mainColor hover:text-dark dark:text-light font-semibold"
                  >
                    {item.category}
                  </Link>
                  <Link
                    href={`/blogs/${item.slug}`}
                    className="block mt-1 leading-tight xl:text-sm font-medium text-black dark:text-light hover:underline"
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default SidBar;
