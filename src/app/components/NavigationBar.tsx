import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <div className="text-center pt-[120px] md:pt-[80px] sm:pt-8">
      <h1 className="mx-auto max-w-4xl space-x-2 py-4 dark:text-light font-title text-5xl font-bold tracking-normal xs:py-0 xs:w-full text-gray-800 sm:text-2xl">
        Join to us and add your coding skills
        <span className="relative whitespace-nowrap text-purple-700">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-purple-400"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative ml-3">MedCode</span>
        </span>
      </h1>
      <span className="text-2xl font-bold tracking-tight text-gray-800 sm:text-5xl md:text-2xl font-title xs:text-xl">
        <span className="block space-x-3 dark:text-light">
          Free Templates & Components
        </span>
        <span className="block pt-2 sm:pt-0 space-x-3 dark:text-light">
          New Articles & blogs
        </span>
      </span>
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-xs xs:mt-3 dark:text-light">
        Discover a wealth of resources for your programming and technology
        journey at MedCode Community. Explore our collection of free templates
        and components designed to streamline your development process, saving
        you valuable time and effort.
      </p>
      <div className="group flex items-center justify-center px-16 gap-5 mt-6 md:flex-row sm:flex-wrap sm:mt-3">
        <Link
          href="/dashboard/add-templates"
          className="inline-block w-full px-6 py-4 sm:py-3 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px onfocus:font-extrabold xs:text-sm"
        >
          Added Templates & components
        </Link>
        <Link
          className="inline-block w-full  px-6 py-4 sm:py-3 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-slate-300 dark:shadow-slate-700 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px onfocus:font-extrabold"
          href="/dashboard/add-articles"
        >
          Added Articles & blogs
        </Link>
      </div>
    </div>
  );
};

export default NavigationBar;
