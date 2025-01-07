"use server";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { connect } from "./ConnectDB";
import User from "../modalMongodb/User";
import Category from "../modalMongodb/Category";
import Article from "../modalMongodb/Article";

export const handelLoginGithub = async () => {
  await signIn("github");
};
export const handelLogOut = async () => {
  try {
    await signOut();
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard");
  redirect("/login");
};
export const getUserId = async () => {
  const session = await auth();
  if (session) {
    const email = session?.user?.email;
    if (email) {
      const user = await getUserByEmail(email);
      return JSON.parse(JSON.stringify(user));
    }
  } else {
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  if (email) {
    try {
      connect();
      const result = await User.findOne({ email });
      const user = JSON.parse(JSON.stringify(result));
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch users!");
    }
  }
};
export const getAllCategories = async () => {
  try {
    connect();
    const categories = await Category.find().sort({ slug: 1 });
    return categories;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch categories!");
  }
};
export const getFirstPost = async () => {
  try {
    connect();
    const posts = await Article.find().sort({ createdAt: -1 });
    const publicPosts = posts?.filter(
      (item, index) => item.status === "publish" && index < 2
    );
    return publicPosts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const FormatDate = async (dateString: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = new Date(dateString).toLocaleDateString(
    "en-US",
    options
  );
  return formattedDate;
};
export const getPostsBySlug = async (slug: string) => {
  try {
    connect();
    const posts = await Article.findOne({ slug });
    return JSON.parse(JSON.stringify(posts));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getArticleByCategories = async (category: string) => {
  try {
    connect();
    if (category === "all") {
      const articles = await Article.find().sort({ createdAt: -1 });
      return articles;
    } else {
      const query = category
        ? { category: { $regex: category, $options: "i" } }
        : {};
      const articles = await Article.find(query).sort({ createdAt: -1 });
      const publicPosts = articles?.filter((item) => item.status === "publish");
      return publicPosts;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch articles!");
  }
};
