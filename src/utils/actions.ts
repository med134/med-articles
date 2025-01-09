"use server";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { connect } from "./ConnectDB";
import User from "../modalMongodb/User";
import Category from "../modalMongodb/Category";
import Article from "../modalMongodb/Article";
import Posts from "../modalMongodb/Post";
import Likes from "../modalMongodb/Likes";
import Comments from "../modalMongodb/Comments";

export const handelLoginGithub = async () => {
  await signIn("github");
};
export const handelLoginGoogle = async () => {
  await signIn("google");
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
      return JSON.parse(JSON.stringify(publicPosts));
    }
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch articles!");
  }
};

export const getPosts = async () => {
  try {
    connect();
    const posts = await Article.find().sort({ createdAt: -1 });
    const publicPosts = posts?.filter((item) => item.status === "publish");
    return publicPosts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
export const searchFunction = async (query: string) => {
  try {
    await connect();
    const filteredPosts = await Article.find({
      $or: [
        { title: { $regex: query, $options: "i" } }, // Search in title
        { description: { $regex: query, $options: "i" } }, // Search in description
      ],
    });
    if (!filteredPosts.length) {
      console.log("No posts found with the given query");
      return [];
    }
    return filteredPosts;
  } catch (err) {
    console.error("Error during search operation:", err);
  }
};
export const getTemplates = async () => {
  try {
    connect();
    const posts = await Posts.find().sort({ createdAt: -1 });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const searchTemplates = async (query: string) => {
  try {
    await connect();
    const filteredPosts = await Posts.find({
      $or: [
        { title: { $regex: query, $options: "i" } }, // Search in title
        { description: { $regex: query, $options: "i" } }, // Search in description
      ],
    });
    if (!filteredPosts.length) {
      console.log("No posts found with the given query");
      return [];
    }
    return filteredPosts;
  } catch (err) {
    console.error("Error during search operation:", err);
  }
};
export const getTemplatesBySlug = async (slug: string) => {
  try {
    connect();
    const posts = await Posts.findOne({ slug });
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getLikes = async (_id: string) => {
  try {
    connect();
    const likesPost = await Likes.findOne({ blogId: _id });
    return likesPost.numberOfLikes;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch likes!");
  }
};
// update likes
export const incrementLike = async (_id: string) => {
  try {
    connect();
    const likesPost = await Likes.findOne({ blogId: _id });
    if (likesPost) {
      await Likes.updateOne(
        { blogId: _id }, // Filter query
        { $inc: { numberOfLikes: 1 } },
        { new: true } // Update operation
      );
      const updatedDoc = await Likes.findOne(
        { blogId: _id }, // Filter query to find the blog by _id
        { numberOfLikes: 1, _id: 0 } // Projection: only return numberOfLikes
      );
      return updatedDoc.numberOfLikes; // Return the updated numberOfLikes value
    } else {
      connect();
      const newLikes = new Likes({ blogId: _id, numberOfLikes: 1 });
      await newLikes.save();
      return newLikes.numberOfLikes;
    }
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/blogs");
};

export const getComments = async (blogId: string) => {
  try {
    connect();
    const query = blogId ? { blogId: { $regex: blogId, $options: "i" } } : {};
    const comment = await Comments.find(query).sort({ createdAt: -1 });
    return comment;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch comments!");
  }
};
export const createComment = async (formData: FormData) => {
  const blogId = formData.get("blogId");
  const username = formData.get("username");
  const imageUser = formData.get("imageUser");
  const comment = formData.get("comment");
  try {
    connect();
    const newComment = new Comments({
      blogId,
      username,
      imageUser,
      comment,
    });
    await newComment.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/blogs");
};
