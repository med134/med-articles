import {
  FaGithubAlt,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { PiUsersThree } from "react-icons/pi";
import { RiArticleLine } from "react-icons/ri";
import { MdPendingActions } from "react-icons/md";
import { LuLayoutTemplate } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { CgFileAdd } from "react-icons/cg";
import { FaYoutube, FaDev } from "react-icons/fa";

export const ProjectFull = [
  {
    id: 0,
    slug: "fantastic-car-rental-website",
    title: "Fantastic Full-stack Car Rental Website",
    livePreview: "https://location-vl-18rt.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1734887265/2024-12-22_17_36_16___Gemoo_Snap_xcoppr.png",
    type: "Website App",
    isFree: false,
    technology: "NEXT.JS 15.1 , TAILWIND CSS",
    summary:
      "Fantastic Value Car Rental — No matter where you are or need to go, Presonto has the right car rental for you. Get out...",
  },
  {
    id: 1,
    slug: "free-tailwindcss-nextjs-templates",
    title: "Free Tailwind CSS + Next.js Starter Template",
    livePreview: "https://startup-jade.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591108/startapImage_eeoima.png",
    type: "Website App",
    isFree: false,
    technology: "NEXT.JS , TAILWIND CSS",
    summary:
      "Tailwind CSS + Next.js Starter Template is designed and crafted for startup and SaaS business websites. This open-source starter template is free to use for personal and commercial project",
    /* gitHub: "https://github.com/med134/startup", */
  },
  {
    id: 2,
    title: "Modern Real Estate App Next.js 14",
    livePreview: "https://estate-app-web.vercel.app/",
    slug: "modern-real-estate-app",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591105/project5_siw7tl.png",
    type: "Web App",
    isFree: false,
    technology: "NEXT.JS , TAILWIND CSS",
    summary:
      "Discover a Modern Real Estate App programming with React js and tailwind css with modern Design frontend",

    /* gitHub: "https://github.com/codebucks27/wibe-studio", */
  },
  {
    id: 3,
    title: "Next.js Blogging Website with Sanity",
    slug: "nextjs-blogging-website-sanity",
    isFree: false,
    technology: "NEXT.JS, TAILWIND CSS, SANITY",
    livePreview: "https://stote-ecommerce-nextjs-gezn.vercel.app/",
    summary:
      "a modern blogging platform powered by Next.js. Our website offers a seamless reading experience, combining performance and flexibility",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591108/project3_rgvbve.png",
    type: "Website App",
    gitHub: "https://github.com/med134/blog-with-nextjs-sanity",
  },
];

export const miniProject = [
  {
    id: 1,
    title: "Next.js Blogging Website with Sanity",
    slug: "nextjs-blogging-website-sanity",
    preview: "https://stote-ecommerce-nextjs-gezn.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591108/project3_rgvbve.png",
    type: "Blogging web app",
    isFree: true,
    technology: "Next.js 14 , TAILWIND CSS",
    summary:
      "a modern blogging platform powered by Next.js. Our website offers a seamless reading experience, combining performance and flexibility",

    /* gitHub: "https://github.com/med134/stote-ecommerce-nextjs", */
  },
  {
    id: 2,
    title: "Example portfolio of designer",
    slug: "example-portfolio-of-designer",
    isFree: false,
    technology: "NEXT.JS, TAILWIND CSS",
    preview: "https://my-portfolio-topaz-gamma.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591102/project4_tvl4yh.png",
    type: "Website",
    gitHub: "",
  },
  {
    id: 3,
    title: "Screenshot App responsive Design UX",
    slug: "screenshot-app-responsive",
    isFree: false,
    technology: "NEXT.JS, TAILWIND CSS",
    preview: "https://screen-woad.vercel.app/",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1726591109/screenshotapp_krjdtr.png",
    type: "Sass Project",
    summary:
      "Allows you to easily take screenshots on your tablet, phone, or other Android devices",
    /* gitHub: "https://github.com/med134/screeshotApp", */
  },
  {
    id: 4,
    title: "Next.js Admin and E-Commerce Dashboard",
    preview: "https://dashboard-next-ui-wine.vercel.app/dashboard",
    slug: "next.js-admin-dashboard",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1729004059/next.js_dashboard_b22sew.png",
    type: "Dashboard App",
    isFree: false,
    technology: "NEXT.JS , TAILWIND CSS HTML, CSS",
    summary:
      "Base is an admin dashboard template designed for the admin panel of e-commerce websites",
    /* gitHub: "https://github.com/codebucks27/wibe-studio", */
  },
];
export const ContactMenu = [
  {
    name: "Whatsapp",
    link: "whatsapp://send?text=Hello!&phone=+212600462196",
    icon: FaWhatsapp,
  },
  {
    name: "DEV.to",
    link: "https://dev.to/med_code",
    icon: FaDev,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/med_dakir/",
    icon: FaInstagram,
    ariaLabel: "Visit our Instagram profile",
    className:
      "w-auto p-2 flex bg-gradient-to-r hover:translate-y-1 from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-sm focus:outline-none focus:ring focus:border-pink-600",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/mohammed-dakir/",
    icon: FaLinkedin,
    ariaLabel: "Visit our LinkedIn profile",
    className:
      "w-auto flex bg-[#0a66c2] p-2 rounded-sm hover:translate-y-1 focus:outline-none focus:ring focus:border-pink-600",
  },
  {
    name: "Youtube",
    link: "https://www.youtube.com/channel/UC1dm-Rczjp52egzJTL__s8A",
    icon: FaYoutube,
    ariaLabel: "Visit our youtube channel",
    className:
      "w-auto flex justify-start p-2 hover:translate-y-1 ease-out all bg-red-600 rounded-sm items-center sm:mx-1 focus:outline-none focus:ring focus:border-red-600",
  },
  {
    name: "X",
    link: "https://x.com/mohammedda1288?s=21",
    icon: FaSquareXTwitter,
    ariaLabel: "Visit our X profile",
    className:
      "w-auto flex p-2 rounded-sm text-center dark:border dark:border-light hover:translate-y-1 bg-dark focus:outline-none focus:ring focus:border-pink-600",
  },
  {
    name: "Github",
    link: "https://github.com/med134",
    ariaLabel: "Visit our github profile",
    icon: FaGithubAlt,
    className:
      "w-auto flex p-2 rounded-sm text-center dark:border dark:border-light hover:translate-y-1 bg-dark text-pink-600 hover:text-pink-800 focus:outline-none focus:ring focus:border-pink-600",
  },
];

export const FilterTemplate = [
  {
    name: "Landing",
    className:
      "bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Ecommerce",
    className:
      "bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Card",
    className:
      "bg-indigo-200 hover:bg-indigo-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Marketing",
    className:
      "bg-purple-200 hover:bg-purple-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Dashboard",
    className:
      "bg-pink-200 hover:bg-pink-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Business",
    className:
      "bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
  {
    name: "Elearning",
    className:
      "bg-yellow-200 hover:bg-yellow-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border",
  },
];

export const myWorkLinks = [
  {
    title: "GITHUB LINK",
    url: "",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/github_c2lbts.png",
  },
  {
    title: "WEBSITE LINK",
    url: "",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/web-link_qu5zhs.png",
  },
  {
    title: "LINKEDIN LINK",
    url: "",
    image:
      "https://res.cloudinary.com/djcnq7nmj/image/upload/v1728326402/linkedin_wc9g2d.png",
  },
];

export const menuItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: RxDashboard,
    isAdmin: false,
  },
  {
    name: "Blogs",
    link: "/dashboard/blogs",
    icon: RiArticleLine,
    isAdmin: false,
  },
  {
    name: "Create Blog",
    link: "/dashboard/add-articles",
    icon: CgFileAdd,
    isAdmin: false,
  },
   {
    name: "Create Template",
    link: `/dashboard/add-templates`,
    icon: LuLayoutTemplate,
    isAdmin: true,
  }, 
  {
    name: "Users",
    link: "/dashboard/users",
    icon: PiUsersThree,
    isAdmin: false,
  },
  {
    name: "Draft blog",
    link: "/dashboard/pending",
    icon: MdPendingActions,
    isAdmin: true,
  },
  {
    name: "Messages",
    link: "/dashboard/messages",
    icon: MdOutlineMail,
    isAdmin: true,
  },
];

export const getProjects = async (slug) => {
  return ProjectFull.find((project) => project.slug === slug);
};

export const getProjectsMini = async (slug) => {
  return miniProject.find((project) => project.slug === slug);
};
