import React from "react";
import FormMessage from "../components/FormMessage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us | medCode ",
  description: `come to My Web Developer Portfolio UX Designer Here, you'll find a showcase of my career and educational as a web developer also some of my skills`,
  keywords: ["resume", "Experience", "learning", "coding", "projects"],
  alternates: {
    canonical: `/contact_us`,
    languages: {
      en: `/en/contact_us`,
    },
  },
  openGraph: {
    title: "Contact us|medCode",
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
function Page() {
  return (
    <section className="py-36 p-10 bg-light dark:bg-dark xs:p-4 w-[100%]">
      <div className="md:max-w-xl lg:max-w-3xl">
        <h1 className="mb-4 px-10 py-10 text-5xl xs:text-3xl xs:mt-16 xs:px-2 font-bold dark:text-light">
          Contact us
        </h1>
      </div>
      <div className="flex justify-between items-start p-6 sm:p-2 lg:flex-col">
        <FormMessage />
        <div className="w-full grid grid-cols-2 gap-4 xs:flex xs:flex-wrap xs:justify-start">
          <div className="mb-12 w-full">
            <div className="flex items-start">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-light">
                  Technical support
                </p>
                <p className="text-neutral-500 dark:text-light ">
                  med@vivacode.dev
                </p>
                <p className="text-neutral-500 dark:text-light ">
                  +212 600-462-196
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
            <div className="align-start flex">
              <div className="shrink-0">
                <div className="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 002.248-2.354M12 12.75a2.25 2.25 0 01-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 00-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 01.4-2.253M12 8.25a2.25 2.25 0 00-2.248 2.146M12 8.25a2.25 2.25 0 012.248 2.146M8.683 5a6.032 6.032 0 01-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0115.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 00-.575-1.752M4.921 6a24.048 24.048 0 00-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 01-5.223 1.082"
                    />
                  </svg>
                </div>
              </div>
              <div className="ml-6 grow">
                <p className="mb-2 font-bold dark:text-light">Bug report</p>
                <p className="text-neutral-500 dark:text-light">
                  jhon10@gmail.com
                </p>
                <p className="text-neutral-500 dark:text-light">
                  +1 234-567-89
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
