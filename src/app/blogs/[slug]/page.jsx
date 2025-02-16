import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Chivo } from "next/font/google";
import "@/src/app/globals.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { CodeBlock } from "../../components/CopyButton";
import { getPostBySlug } from "@/src/utils/strapiSever";
import SidBar from "../../components/SidBar";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

const BlogPage = async ({ params }) => {
  const slug = (await params).slug;
  const item = await getPostBySlug(slug);
  const { image } = item?.data;

  
  return (
    <section
      className={`${chivo.variable} p-16 py-40 w-full grid grid-cols-7 gap-10 xl:gap-8 lg:flex lg:flex-col sm:p-3 sm:py-28 dark:bg-dark`}
    >
      <div className="myRightSide col-span-5 flex flex-col justify-around dark:bg-dark">
        <div
          key={item.data.id}
          className="w-full px-4 mb-1 sm:text-sm sm:mb-2 dark:text-light dark:bg-dark"
        >
          <h1
            className={`hello text-5xl font-bold py-6 pt-6 sm:text-2xl text-mainColor dark:text-light xs:py-1`}
          >
            {item.data.title}
          </h1>
          <span className="text-xl text-gray-600 py-3 sm:text-sm xs:text-sm xs:py-1 dark:text-light">
            {item.data.description}
          </span>
          <div className="mt-6">
            <div className="flex justify-start py-1">
              <div className="flex justify-start items-center dark:bg-dark">
                <Link
                  href={`/dashboard/users/${item?.data.userId}`}
                  className="text-blue-600 text-sm uppercase dark:text-light xs:text-xs"
                >
                  {item?.data.username}
                </Link>
                <span className="ml-2 text-sm text-gray-800 font-semibold dark:text-light xs:text-xs">
                  | data
                </span>
              </div>
              <Link
                href={`/category/${item?.data.category}`}
                className="uppercase text-xs text-gray-800 font-semibold rounded-sm px-2 py-1 ml-2 bg-yellow-400 hover:bg-yellow-300"
              >
                {item.data.category}
              </Link>
            </div>
            <Image
              src={image.url}
              alt="blog"
              className="w-[1280px] h-auto sm:h-auto object-cover rounded mt-2"
              width={1280}
              height={700}
              priority={true}
              quality={100}
            />
          </div>

          <h2 className="flex underline font-bold justify-start items-start py-6 xs:py-2 ml-2 mt-1 font-bolder">
            {item.data.tags}
          </h2>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const language =
                  className?.replace("language-", "") || "javascript";
                const codeContent = String(children).trim();

                // Render inline code normally
                if (inline) {
                  return (
                    <code className="bg-gray-200 p-1 rounded" {...props}>
                      {children}
                    </code>
                  );
                }

                // Render code block with copy button
                return <CodeBlock code={codeContent} language={language} />;
              },
            }}
          >
            {item.data.content}
          </ReactMarkdown>
        </div>
      </div>
      <div className="myLeftSide xl:w-72 col-span-2 sm:w-full xs:w-full sm:p-2 lg:h-[650px] sm:mb-8">
        <SidBar postSlug={item.data.slug} />
      </div>
    </section>
  );
};
export default BlogPage;
