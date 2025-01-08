import Link from 'next/link'
import React from 'react'

const BackgroundDev = () => {
  return (
    <div
          className="flex flex-col justify-center rounded-md mt-4 h-[590px] lg:h-[400px] sm:h-auto col-span-2 align-middle relative"
          style={{
            backgroundImage:
              'url("https://blog.logrocket.com/wp-content/uploads/2023/06/Preline-UI.png")',
            backgroundPosition: "center center",
            backgroundSize: "cover",
            position: "relative",
            width: "auto",
            height: "auto",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50 rounded-md"></div>
          <div className="flex flex-col items-center p-8 py-12 text-center relative z-10">
            <h3 className="py-4 text-5xl font-bold text-white opacity-100 md:text-3xl sm:2xl">
              Software Mastery:Professional Free Tailwind Components & Templates
            </h3>
            <p className="text-white opacity-100 md:text-sm">
              With MedCode blogs Templates Tailwind you can optimized the
              customization process to save your team time when building
              websites.
            </p>
            <Link
              href="/templates"
              className="mt-4 font-bold text-light hover:underline"
              aria-current="page"
            >
              See More...
            </Link>
          </div>
        </div>
  )
}

export default BackgroundDev
