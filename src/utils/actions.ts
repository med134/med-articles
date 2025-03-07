"use server";
import { auth, signIn, signOut } from "@/auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { connect } from "./ConnectDB";
import User from "../modalMongodb/User";
import Category from "../modalMongodb/Category";
import Article from "../modalMongodb/Article";
import Posts from "../modalMongodb/Post";
import Likes from "../modalMongodb/Likes";
import Comments from "../modalMongodb/Comments";
import Email from "../modalMongodb/Email";
import { parseWithZod } from "@conform-to/zod";
import { blogSchema, createAccountSchema } from "./ZodSchema";
import { AuthError } from "next-auth";
import { revalidateTag } from "next/cache";

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
export const credentialLogin = async (
  prevState: unknown,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    await signIn("credentials", { email, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "email or password is invalid";
        default:
          return "Something went wrong.";
      }
    }
  }
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
export const getUserById = async (_id: string) => {
  try {
    connect();
    const user = await User.findOne({ _id });
    return JSON.parse(JSON.stringify(user));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
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
    return JSON.parse(JSON.stringify(categories));
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
      const publicPosts = articles?.filter((item) => item.status === "publish");
      return JSON.parse(JSON.stringify(publicPosts));
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
export const getFirstBlog = async () => {
  try {
    connect();
    const firstBlog = await Article.find().sort({ createdAt: -1 });
    const post = firstBlog.filter(
      (item, index) => item.status === "publish" && index < 1
    );
    return post;
  } catch (error) {
    console.log(error);
  }
};
export const getPosts = async () => {
  try {
    connect();
    const posts = await Article.find().sort({ createdAt: -1 });
    const publicPosts = posts?.filter((item) => item.status === "publish");
    return JSON.parse(JSON.stringify(publicPosts));
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
    return JSON.parse(JSON.stringify(filteredPosts));
  } catch (err) {
    console.error("Error during search operation:", err);
  }
};
export const getTemplates = async () => {
  try {
    connect();
    const posts = await Posts.find().sort({ createdAt: -1 });
    return JSON.parse(JSON.stringify(posts));
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
    if (likesPost) {
      return likesPost.numberOfLikes;
    } else {
      return [];
    }
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
    revalidateTag("update-data");
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/blogs");
};
export const sendMessage = async (prevState: unknown, formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  try {
    connect();
    const newMessage = new Email({
      name,
      email,
      message,
    });
    await newMessage.save();
    return "Your message is send successfully";
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/contact-us");
};



export const handelDeleteBlog = async (id: string) => {
  console.log(id);
  try {
    connect();
    await Article.findByIdAndDelete(id);
    console.log("article has ben delete successfully");
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/blogs");
};

export const getEmailSession = async () => {
  const session = await auth();
  return session?.user?.email;
};
export const addArticle = async (prevState: unknown, formData: FormData) => {
  const {
    title,
    tags,
    description,
    image,
    status,
    category,
    slug,
    job,
    username,
    userId,
    email,
    content,
    userImage,
  } = Object.fromEntries(formData);

  const submission = parseWithZod(formData, {
    schema: blogSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  try {
    connect();
    const newArticle = new Article({
      title,
      tags,
      description,
      image,
      category,
      status,
      slug,
      job,
      content,
      username,
      userId,
      userImage,
      email,
    });
    await newArticle.save();
    return "article is created successfully";
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/add-articles");
};

export const checkAdmin = async () => {
  const session = await auth();
  const emailAdmin = "mohamed7dakir@gmail.com";
  if (session?.user?.email === emailAdmin) {
    return true;
  }
  return false;
};

export const addUser = async (prevState: unknown, formData: FormData) => {
  const submission = parseWithZod(formData, {
    schema: createAccountSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  try {
    connect();
    const newUser = new User({
      name: submission.value.name,
      email: submission.value.email,
      password: submission.value.password,
    });
    await newUser.save();
    console.log("user is save");
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/create-account");
  redirect("/login");
};
export const deleteUser = async (prevState: unknown, formData: FormData) => {
  const _id = formData.get("id");
  try {
    connect();
    await User.findByIdAndDelete({ _id });
    return { error: "user delete successfully" };
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/users");
};
export const getAllUsers = async () => {
  try {
    connect();
    const users = await User.find().sort({ createdAt: 1 });
    return JSON.parse(JSON.stringify(users));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
export const getDraftBlog = async () => {
  try {
    connect();
    const posts = await Article.find();
    const draftBlog = posts.filter((draft) => draft.status === "draft");
    return JSON.parse(JSON.stringify(draftBlog));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch draft posts!");
  }
};

export const deleteDraftBlog = async (formData: FormData) => {
  const id = formData.get("id");
  try {
    connect();
    await Article.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch draft posts!");
  }
  revalidatePath("dashboard/pending");
};
export const deleteMessage = async (formData: FormData) => {
  const _id = formData.get("id");
  try {
    connect();
    await Email.findByIdAndDelete({ _id });
    console.log("deleted message from db");
  } catch (err) {
    console.log(err);
  }
  revalidatePath("/dashboard/messages");
};
export const getMessages = async () => {
  try {
    connect();
    const messages = await Email.find();
    return messages;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch messages!");
  }
};
export const editArticles = async (
  prevSettings: unknown,
  formData: FormData
) => {
  const _id = formData.get("id");
  const title = formData.get("title");
  const tags = formData.get("tags");
  const job = formData.get("job");
  const description = formData.get("description");
  const image = formData.get("image");
  const status = formData.get("status");
  const content = formData.get("content");
  const category = formData.get("category");
  const userId = formData.get("userId");
  const username = formData.get("username");
  const email = formData.get("email");
  const slug = formData.get("slug");
  const userImage = formData.get("userImage");
  try {
    connect();
    await Article.findByIdAndUpdate(
      _id,
      {
        title,
        tags,
        image,
        description,
        slug,
        category,
        job,
        status,
        content,
        username,
        userId,
        email,
        userImage,
      },

      { new: true }
    );
    return "article is updated successfully";
  } catch (err) {
    console.log(err);
  }
  redirect(`/dashboard/blogs`);
};
export const getNumberOfArticle = async (id: string) => {
  try {
    connect();
    const articles = await Article.find({ userId: id });
    return articles.length;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch articles!");
  }
};


export const completeAccount = async (formData: FormData) => {
  const { id, name, email, password, homeAddress, about } =
    Object.fromEntries(formData);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password as string, salt);
  try {
    connect();
    const newUser = new User({
      id,
      name,
      email,
      password: hashedPassword,
      homeAddress,
      about,
    });
    await newUser.save();
    console.log("use is save");
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users/complete-profile");
  redirect("/dashboard/add-articles");
};
