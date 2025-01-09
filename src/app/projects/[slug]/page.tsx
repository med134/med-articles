import {
    getProjects,
    getProjectsMini,
  } from "@/src/app/components/AllDataArrays";
  import Image from "next/image";
  import React from "react";
  import { FaWhatsapp } from "react-icons/fa";
  
  export async function generateMetadata({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const slug = (await params).slug;
    const project = await getProjects(slug);
    const miniProject = await getProjectsMini(slug);
    return {
      title: project?.title || miniProject?.title,
      description: project?.summary || miniProject?.summary,
      keywords: project?.technology || miniProject?.technology,
      robots: {
        index: true,
        follow: true,
      },
      alternates: {
        canonical: `/projects/${slug}`,
        languages: {
          "en-US": `en-US/blogs${slug}`,
        },
        types: {
          "application/rss+xml": "https://www.medcode.dev/rss",
        },
      },
      local: "en_Us",
      type: "templates",
      openGraph: {
        title: project?.title || miniProject?.title,
        description: project?.summary || miniProject?.summary,
        images: [
          {
            url: project?.image || miniProject?.image,
            width: "400",
            height: "300",
          },
        ],
      },
    };
  }
  const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const project = await getProjects(slug);
    const miniProject = await getProjectsMini(slug);
    return (
      <div className="w-full rounded-lg bg-light p-10 flex flex-col justify-center items-center dark:bg-dark sm:p-6">
        <div className="bg  bg-white text-center dark:bg-dark shadow dark:shadow-light mt-28 rounded-lg p-10 max-w-4xl sm:p-3 sm:mt-16">
          <div className="flex justify-center items-center w-full">
            {/* Image Placeholder */}
            {project?.image ? (
              <Image
                src={project?.image}
                alt={project?.title}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
                width={1280}
                height={700}
                loading="lazy"
              />
            ) : (
              <Image
                src={miniProject?.image ?? ""}
                alt={miniProject?.title ?? ""}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
                width={1280}
                height={700}
                loading="lazy"
              />
            )}
          </div>
          <div className="grid grid-cols-5 gap-6 md:flex md:flex-col">
            <div className="col-span-3 p-4 flex md:flex md:flex-col">
              <div className="flex flex-col justify-start items-center">
                {" "}
                <h1 className="text-2xl font-bold text-gray-900 mb-3 sm:mb-0 sm:text-xl">
                  {project?.title || miniProject?.title}
                </h1>
                <p className="text-gray-700 dark:text-light flex justify-start">
                  {project?.summary || miniProject?.summary}
                </p>
              </div>
              <div className="h-56 w-[1px] bg-gray-400 col-span-1 md:hidden"></div>
              <div className="h-[1px] w-full bg-gray-400 col-span-1 mt-4 hidden md:flex"></div>
            </div>
  
            <div className="col-span-2 sm:p-4">
              <div className="mt-3 text-mainColor sm:mt-0 dark:text-light">
                Compatible Browsers :{" "}
                <span className="text-gray-700 dark:text-light">
                  Firefox, Safari, Opera, Chrome, Edge
                </span>
              </div>
              <div className="mt-3 text-mainColor dark:text-light">
                technology :{" "}
                <span className="text-gray-700 dark:text-light">
                  {project?.technology || miniProject?.technology}
                </span>
              </div>
              <div className="text-gray-700 text-left mt-4 text-xl font-semibold dark:text-light">
                Contact me for code source
              </div>
              <div className="w-full flex justify-center items-start mt-2 sm:mb-2">
                <a
                  href={"whatsapp://send?text=Hello!&phone=+212600462196"}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  aria-label={"whatsapp contact"}
                  className={
                    "flex items-center rounded-md dark:text-light px-16 py-1 border-2 border-green-600 text-light bg-green-600 text-xl hover:text-white hover:bg-green-600"
                  }
                >
                  <FaWhatsapp className="h-6 w-6" />
                  <span className="ml-4 dark:text-light">whatsapp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default page;
  