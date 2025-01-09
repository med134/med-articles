import React from "react";
import Link from "next/link";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { VscPreview } from "react-icons/vsc";
import { getTemplatesBySlug, getTemplates } from "@/src/utils/actions";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const post = await getTemplatesBySlug(slug);
  const publishedAt = new Date(post.createdAt).toISOString();
  const modifiedAt = new Date(post?.updatedAt || post?.createdAt).toISOString();
  return {
    title: post.title,
    description: post.description,
    publishedTime: publishedAt,
    modifiedTime: modifiedAt,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `/templates/${slug}`,
      languages: {
        "en-US": `en-US/templates/${slug}`,
      },
      types: {
        "application/rss+xml": "https://www.medcode.dev/rss",
      },
    },
    openGraph: {
      title: post.title,
      description: post.description,
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: `https://www.medcode.dev/templates/${slug}`,
      images: [
        {
          url: post.image,
          width: "400",
          height: "300",
        },
      ],
    },
  };
}
const TemplateId = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;
  const templates = await getTemplates();
  const data = await getTemplatesBySlug(slug);

  return (
    <>
      <div className="p-8 h-full py-28 xs:pt-6 dark:bg-dark xl:block md:p-4 xs:p-4 bg-light">
        <div className="block justify-start information pt-24 px-10 md:px-3">
          <Link
            href="/templates"
            className="group inline-flex justify-around rounded-md bg-mainColor mb-3 p-2 px-4 py-2 xs:mt-4 text-white transition sm:mt-0 sm:w-auto focus:outline-none focus:ring focus:ring-indigo-200"
          >
            <BsArrowLeftCircleFill className="ml-3 group-hover:-translate-x-3 group-hover:transition-all " />
            <span className="text-sm mr-3 px-3"> Back to templates </span>
          </Link>
          <p className="px-2 text-gray-500 dark:text-light">{data.category}</p>
          <h1 className="text-3xl font-serif px-2 font-semibold text-mainColor py-1 xs:text-xl dark:text-cyan-600">
            {data.title}
          </h1>
          <p className="px-2 py-4 text-sm text-gray-700 dark:text-light">
            {" "}
            {data.description}
          </p>
          <div className="inline-flex justify-start items-center gap-4 p-2">
            <Image
              alt="author image"
              width={50}
              loading="lazy"
              height={50}
              quality={30}
              src="https://i.ibb.co/WVDZRxF/bussiness-man.png"
              className="w-16 h-16 sm:w-8 sm:h-8 object-cover rounded-full"
            />
            <div className="flex flex-col w-auto">
              <span className="text-gray-600 sm:text-xs dark:text-gray-200 font-bold uppercase text-sm">
                {data?.username}
              </span>
              <a
                href={`mailto:${data?.email}`}
                className="text-xs text-gray-500 dark:text-blue-500 hover:text-blue-800 hover:underline"
              >
                {data?.email}
              </a>
              <span className="text-xs text-gray-800 dark:text-light">
                {data?.job}
              </span>
            </div>
          </div>
        </div>
        <div className="p-2 mt-6 w-full h-full xs:mt-4">
          <div className="flex justify-between items-center sm:flex-col-reverse sm:items-center">
            <Link
              href={data?.link}
              target="_blank"
              className={`flex w-48 mb-2 cursor-pointer group select-none items-center justify-center rounded-md bg-mainColor text-sm px-6 py-1 text-light`}
            >
              <span className="flex sm:text-xs w-full items-center justify-between hover:translate-x-1 rounded py-1 text-center font-semibold">
                Demo Preview
                <VscPreview className="h-6 w-6 sm:w-4 sm:h-4 hover:translate-x-1 " />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full p-6 mb-16 xs:p-2">
          <span className="text-2xl font-semibold text-mainColor py-4 underline px-2 xs:mb-10 dark:text-light">
            Related components:
          </span>
          <div className="grid grid-cols-3 gap-8 px-8 pt-10 p-8 md:block xs:px-2 xs:p-2">
            {templates?.map((item, index) =>
              item.slug != slug && index < 6 ? (
                <div
                  key={item._id}
                  className="w-auto rounded-md bg-white overflow-hidden shadow-md hover:shadow-lg xs:mb-4 dark:shadow-light"
                >
                  <div className="relative">
                    <Image
                      className="w-full h-44"
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={500}
                      quality={50}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 bg-white">
                    <Link
                      href={`/templates/${item.slug}`}
                      className="text-xl font-semibold hover:underline mb-2 text-mainColor dark:text-light"
                    >
                      <h2>{item.title}</h2>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 dark:text-light">
                      {item.description.slice(0, 70)}...
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-light px-2 py-1 bg-cyan-600 rounded-lg">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateId;
