import type { MetadataRoute } from "next";
import {
  getAllUsers,
  getPosts,
  getAllCategories,
  getTemplates,
} from "../utils/actions";
import routes from "@/src/utils/data/routes.json";
import { miniProject } from "./components/AllDataArrays";
import { Blog, Template, Category, UserInfo } from "./components/Interfaces";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getTemplates();
  const blogs = await getPosts();
  const categories = await getAllCategories();
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
  const AllPosts = posts.map((item: Template) => {
    return {
      url: `${baseUrl}/templates/${item.slug}`,
      lastModified: new Date().toISOString(),
      priority: 0.5,
      changeFrequency: "weakly",
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
  const allCategories = categories.map((cat: Category) => {
    return {
      url: `${baseUrl}/category/${cat.value}`,
      lastModified: new Date().toISOString(),
    };
  });
  const allProfile = users.map((cat: UserInfo) => {
    return {
      url: `${baseUrl}/dashboard/users/${cat._id}`,
      lastModified: new Date().toISOString(),
    };
  });
  const allProjects = miniProject.map((pro) => {
    return {
      url: `${baseUrl}/projects/${pro.slug}`,
      lastModified: new Date().toISOString(),
    };
  });

  return [
    ...staticUrls,
    ...AllPosts,
    ...AllBlogs,
    ...allCategories,
    ...allProfile,
    ...allProjects,
  ];
}
