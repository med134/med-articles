"use client";
import Link from "next/link";
import Image from "next/image";
import { MdPreview } from "react-icons/md";
import { motion } from "framer-motion";
const FramerImage = motion(Image);

export const Project = ({
  title,
  type,
  img,
  preview,
  slug,
  index,
}: {
  title: string;
  img: string;
  type: string;
  preview: string;
  slug: string;
  index: number;
}) => {
  return (
    <div className="m-6">
      <motion.div
        initial={{
          opacity: 0,
          x: index % 2 !== 0 ? 300 : -300,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <article
          className={`w-full ml-8 md:m-1 mb-6 md:ml-0 flex flex-col items-center justify-center rounded-2xl
      border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4
      `}
        >
          <div
            className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
      rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]
      "
          />
          <div className="w-full cursor-pointer overflow-hidden rounded-lg">
            <FramerImage
              src={img}
              alt={title}
              width={500}
              height={300}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>

          <div className="w-full flex flex-col items-start justify-between mt-4">
            <span className="text-mainColor font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
              {type}
            </span>
            <Link
              href={`/projects/${slug}`}
              className="hover:underline underline-offset-2"
            >
              <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
                {title}
              </h2>
            </Link>

            <div className="w-full flex items-center justify-between">
              <Link
                href={`/projects/${slug}`}
                target="_blank"
                className="text-lg font-semibold underline md:text-base"
              >
                Visit
              </Link>
              <Link
                href={preview}
                aria-label="see project on github"
                target="_blank"
                className="w-7 md:w-8 cursor-pointer"
              >
                <MdPreview className="w-7 h-7 fill-dark hover:fill-mainColor" />
              </Link>
            </div>
          </div>
        </article>
      </motion.div>
    </div>
  );
};

export const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  slug,
  preview,
}: {
  type: string;
  title: string;
  summary: string;
  img: string;
  slug: string;
  preview: string;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        // if odd index card,slide from right instead of left
        x: -300,
      }}
      whileInView={{
        opacity: 1,
        x: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
    >
      <article
        className="w-4xl flex ml-8 items-center justify-between relative rounded-br-2xl
          rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 dark:bg-dark dark:border-light
          lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 sm:ml-2"
      >
        <div
          className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
      rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
      "
        />
        <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            width={500}
            height={300}
            loading="lazy"
            sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
          />
        </div>

        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-mainColor font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={`/projects/${slug}`}
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light lg:text-3xl xs:text-2xl">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link
              href={`projects/${slug}`}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
              dark:bg-light dark:text-dark hover:bg-light hover:text-dark border border-dark hover:border-dark
              sm:px-4 sm:text-base xs:text-sm xs:ml-0
              "
            >
              Visit Project
            </Link>
            <Link
              href={preview}
              target="_blank"
              className="ml-4 rounded-lg flex items-center group hover:bg-dark hover:text-light bg-light border text-dark border-dark p-2 px-6 text-lg font-semibold
              dark:bg-light dark:text-dark
              sm:px-4 sm:text-base xs:text-sm xs:ml-2
              "
            >
              Live Preview
            </Link>
          </div>
        </div>
      </article>
    </motion.div>
  );
};
