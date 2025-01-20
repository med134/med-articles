import React, { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { getTemplates } from "@/src/utils/actions";
import SkeltonCard from "@/src/app/components/SkeltonCard";
import TemplateSearch from "../components/TemplateSerach";
import TemplatesPreview from "../components/TemplatesPreview";

export const metadata: Metadata = {
  title: `Free Templates & Components Resources Examples`,
  description: `Browse through MedCode collection of Free Templates & Components  with advanced frameworks such as React.js, Next.js, Vue.js with full free code source and developments kits`,
  keywords: [
    "Web Development",
    "tailwind css free components",
    "tailwind css free components",
    "frontend templates",
    "how to learn programming",
    "free components sketchup ",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `/templates`,
    languages: {
      "en-Us": `/en-us/templates`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
  openGraph: {
    title: "medCode free templates & components",
    description: `Browse through MedCode collection of Free Templates & Components  with advanced frameworks such as React.js, Next.js, Vue.js with full free code source and developments kits`,
    images: [
      {
        url: "https://i.ibb.co/rHvLvvr/Untitled.png",
        width: "400",
        height: "300",
      },
    ],
  },
};
const page = async () => {
  const posts = await getTemplates();
  return (
    <>
      <div className="bg-white dark:bg-dark dark:text-light pt-[80px] xl:pt-[60px] lg:pt-[40px]">
        <div className="grid grid-cols-2 p-16 mx-auto overflow-x-hidden xs:text-left xs:p-4 lg:block lg:text-center xl:mt-5 sm:p-8">
          <div className="lg:w-full pr-2 py-14 md:py-0 xs:p-2 lg:block lg:justify-center lg:items-center xs:justify-start xs:items-start">
            <h1 className="text-4xl font-bold text-mainColor xl:text-2xl lg:text-4xl xs:text-2xl xs:text-left dark:text-cyan-600">
              <span className="block w-full lg:text-5xl xl:text-4xl xs:text-3xl">
                Free Templates & components{" "}
              </span>
              <p className="xl:text-4xl lg:text-3xl lg:mt-1 xs:text-3xl">
                with free code Sources
              </p>
            </h1>
            <p className="py-2 text-lg text-gray-500 md:py-6 xs:py-2 2xl:pr-5 xs:text-sm xs:pr-2 dark:text-light xs:text-left">
              Open source UI & UX components and templates to bootstrap your new
              apps, projects or landing sites, Crafting Unique Web Experiences:
              Explore My Portfolio and Free Templates & Components
            </p>
            <div className="mt-2">
              <TemplateSearch posts={posts} />
            </div>
          </div>
          <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0 lg:hidden">
            <Image
              id="heroImg1"
              priority
              className="transition-all ml-10 duration-300 ease-in-out hover:scale-105 lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0"
              src="https://i.ibb.co/GPXxP06/hero-img.png"
              alt="Free Templates & components"
              width={500}
              height={488}
            />
          </div>
        </div>
        <div className="px-16 dark:text-light xs:px-8 xs:p-2 md:px-8">
          <h2 className="text-3xl font-semibold mt-0 sm:text-2xl">
            Latest Templates & Components
          </h2>
          <h3 className="sm:text-sm mt-2">
            The newest featured & responsive Templates & Components and full
            project with different frameworks.
          </h3>
        </div>
        <Suspense fallback={<SkeltonCard />}>
          <TemplatesPreview data={posts} />
        </Suspense>
      </div>
    </>
  );
};
export default page;
