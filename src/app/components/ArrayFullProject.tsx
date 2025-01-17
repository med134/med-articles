import Link from "next/link";

const SkeletonOne = () => {
  return (
    <div>
      <Link
        href="/projects/example-portfolio-of-designer"
        className="font-bold md:text-4xl text-3xl text-white"
      >
        Example portfolio of designer
      </Link>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <Link
        href="/projects/fantastic-car-rental-website"
        className="font-bold md:text-4xl text-3xl text-white"
      >
        Fantastic Full-stack Car Rental Website
      </Link>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Fantastic Value Car Rental — No matter where you are or need to go,
        Presonto has the right car rental for you. Get out...
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <Link
        href="/projects/free-tailwindcss-nextjs-templates"
        className="font-bold md:text-4xl text-3xl text-white"
      >
        Free Tailwind CSS + Next.js Starter Template
      </Link>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Tailwind CSS + Next.js Starter Template is designed and crafted for
        startup and SaaS business websites. This open-source starter template is
        free to use for personal and commercial project
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Rivers are serene
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591102/project4_tvl4yh.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1734887265/2024-12-22_17_36_16___Gemoo_Snap_xcoppr.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-2",
    thumbnail:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591108/startapImage_eeoima.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591105/project5_siw7tl.png",
  },
];
