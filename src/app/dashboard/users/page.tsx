import { checkAdmin, getAllUsers } from "@/src/utils/actions";
import React from "react";
import ListUsers from "../../components/dashboardUX/ListUsers";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "medCode|Users",
  description: `Discover the latest web app projects created by MedCode, free and premium code source projects for beginners, React.js Next.js,javascript,HTML CSS`,
  keywords: [
    "Web Development",
    "projects beginners",
    "projects ideas",   
    "projects github",
    "free projects",
    "projects for resume",
    " Programming Languages",
    "Software Engineering",
    "Front-end",
    "UI/UX Design",
    "Frameworks",
    "Best Practices",
    "Web Design",
    "Mobile Development",
    "Learning Resources",
    "IDEs (Integrated Development Environments)",
    "Problem Solving",
    "Code Snippets",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `/dashboard/users`,
    languages: {
      "en-Us": `/en-us/dashboard/users`,
    },
    types: {
      "application/rss+xml": "https://www.medcode.dev/rss",
    },
  },
  openGraph: {
    title: "medCode|Users",
    description: `Discover the latest web app projects created by MedCode, free and premium code source projects for beginners, React.js Next.js,javascript,HTML CSS`,
    images: [
      {
        url: "/app/images/projects/project7.jpg",
        width: "400",
        height: "300",
      },
    ],
  },
};
const page = async () => {
  const users = await getAllUsers();
  const isAdmin = await checkAdmin();
  return (
    <div>
      <ListUsers users={users} isAdmin={isAdmin} />
    </div>
  );
};

export default page;
