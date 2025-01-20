import React from "react";
import { AnimatedNumbers } from "../components/AnimatedNumbers";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import profilePic from "@/public/images/med.jpg";
import { ContactMenu } from "../components/AllDataArrays";
import Loading from "@/src/app/components/Loading";
const Skills = dynamic(() => import("../components/jsx componenets/Skills"), {
  loading: () => <Loading />,
});
const Experience = dynamic(
  () => import("../components/jsx componenets/Experience"),
  {
    loading: () => <Loading />,
  }
);
const Education = dynamic(() => import("../components/Education"), {
  loading: () => <Loading />,
});

export const metadata = {
  title: "About us & Resume & Experience | medCode ",
  description: `Welcome to My Web Developer Portfolio UX Designer Here, you'll find a showcase of my career and educational as a web developer also some of my skills`,
  keywords: ["resume", "Experience", "learning", "coding", "projects"],
  alternates: {
    canonical: `/about`,
    languages: {
      en: `/en/about`,
    },
  },
  openGraph: {
    title: "About us| MedCode",
    description: `Welcome to My Web Developer Portfolio UX Designer Here, you'll find a showcase of my career and educational as a web developer also some of my skills`,
    images: [
      {
        url: "/public/images/med.jpg",
        width: "400",
        height: "300",
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center bg-light dark:bg-dark justify-center dark:text-light pt-24 lg:pt-10 md:pt-6 sm:pt-10">
        <div className="xs:p-10 p-24">
          <h1 className="mb-16 text-7xl font-extrabold text-center font-sans !leading-tight lg:!text-7xl sm:text-6xl xs:text-xl sm:mb-8 md:text-2xl">
            Passion Fuels Purpose!
          </h1>
          <div className="grid w-full grid-cols-8 gap-16 md:flex md:flex-col sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <span className="mb-4 text-lg font-bold underline uppercase text-dark/75 dark:text-light/75">
                Biography
              </span>
              <p className="font-lexend text-xl">
                Hi, I&apos;m med, a web developer and UI/UX designer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 4 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients&apos; visions to life.
              </p>
              {/* personal info */}
              <span className="mb-2 py-4 text-lg font-bold underline uppercase text-dark/75 dark:text-light/75">
                Contact Me
              </span>
              <div className="flex justify-start items-center flex-wrap">
                {ContactMenu.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <div key={link.name} className="py-2 ml-5">
                      <Link
                        href={link.link}
                        target="blank"
                        className={`flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800
                    `}
                      >
                        <LinkIcon className="mr-3 h-8 w-8 dark:fill-white" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
              bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="med_dakir"
                className="w-full h-auto rounded-2xl"
                loading="lazy"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3 xs:mt-8">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                xs:text-sm"
                >
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </div>
      </main>
    </>
  );
};

export default page;
