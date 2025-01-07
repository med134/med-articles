import React from "react";
import Link from "next/link";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiTwotoneSound } from "react-icons/ai";
import { FormatDate, getTemplates } from "@/src/utils/action";
import dynamic from "next/dynamic";
import Loading from "@/src/app/components/Loading";
const BackgroundDev = dynamic(() => import("./BackgroundDev"), {
  loading: () => <Loading />,
});

const Easy = async () => {
  const templates = await getTemplates();

  return (
    <section
      style={{
        backgroundImage: `url('https://res.cloudinary.com/djcnq7nmj/image/upload/v1734015580/dot-grid-removebg-preview_ncqgal.png')`,
      }}
      id="templates"
      className="bg-light dark:bg-dark py-8"
    >
      <span className="text-2xl underline dark:text-light xs:pt-6 font-bold flex justify-start items-center text-gray-800 font-slab px-12 xs:px-4 xs:text-xl pt-16 py-2">
        <AiTwotoneSound className="dark:text-light" />
        <p className="ml-2 sm:text-xl ">Recent Templates & components</p>
      </span>
      <div className="grid grid-cols-4 gap-4 p-10 sm:p-3 min-h-min lg:flex lg:flex-col">
        <BackgroundDev />
        <div className="flex flex-col p-6 divide-y dark:divide-gray-700 col-span-2 xs:p-3">
          {templates?.map(
            (item, index) =>
              index < 3 && (
                <div key={item._id} className="pb-4 space-y-2">
                  <span className="flex justify-start items-center py-2 dark:text-light">
                    <FaRegCalendarAlt className="w-5 h-5 text-gray-800 dark:text-light" />
                    <span className="ml-2 font-semibold dark:text-light xs:text-sm">
                      {FormatDate(item?.createdAt)}
                    </span>
                  </span>
                  <Link href={`/templates/${item.slug}`}>
                    <h4 className="text-3xl font-bold text-dark dark:text-light hover:underline hover:text-[#075985] xs:text-xl">
                      {item.title}
                    </h4>
                  </Link>
                  <p className="dark:text-light text-gray-700 xs:text-sm">
                    {item.description}
                  </p>
                  <Link
                    rel="noopener noreferrer"
                    href={`/templates/${item.slug}`}
                    className="inline-flex items-center dark:text-light py-2 space-x-2 text-sm hover:text-[#075985]"
                  >
                    <span>View Template...</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};
export default Easy;
