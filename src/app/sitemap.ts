import type { MetadataRoute } from "next";

import routes from "@/src/utils/data/routes.json";
import { miniProject } from "./components/AllDataArrays";
import { Blog, UserInfo } from "./components/Interfaces";
import { getAllUsers, getData } from "../utils/strapiSever";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogs = await getData();
  const users = await getAllUsers();
  const baseUrl = "https://medcode.dev";
  const staticUrls = routes.map((route) => {
    return {
      url: `${baseUrl}${route.url}`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
      changeFrequency: "monthly",
    };
  });

  const AllBlogs = blogs.map((item: Blog) => {
    return {
      url: `${baseUrl}/blogs/${item.slug}`,
      lastModified: new Date().toISOString(),
      priority: 1,
      changeFrequency: "daily",
    };
  });

  const allProfile = users.map((cat: UserInfo) => {
    return {
      url: `${baseUrl}/dashboard/users/${cat.id}`,
      lastModified: new Date().toISOString(),
    };
  });
  const allProjects = miniProject.map((pro) => {
    return {
      url: `${baseUrl}/projects/${pro.slug}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [...staticUrls, ...AllBlogs, ...allProfile, ...allProjects];
}
