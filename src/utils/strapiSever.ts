"use server";

import { auth } from "@/auth";
import { Blog, UserInfo } from "../app/components/Interfaces";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
export const getData = async () => {
  const response = await fetch(`${baseUrl}/api/articles?populate=%2A`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });
  const posts = await response.json();
  return posts.data.sort(
    (a: { createdAt: Date }, b: { createdAt: Date }) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
};
export const getPostBySlug = async (slug: string) => {
  const response = await fetch(`${baseUrl}/api/articles/${slug}?populate=%2A`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });
  const posts = await response.json();
  return posts;
};

export const getArticleByCategories = async (category: string) => {
  const response = await fetch(`${baseUrl}/api/articles?populate=%2A`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
    },
  });
  const posts = await response.json();
  if (category === "all") {
    return posts.data;
  }
  const articles = posts.data.filter(
    (item: Blog) => item.category === category
  );
  return articles;
};

export const searchFunction = async (query: string) => {
  const posts = await getData();

  try {
    const filteredPosts = posts.filter(
      (post: { title: string; description: string }) => {
        const regex = new RegExp(`${query}`, "gi");
        return post.title.match(regex) || post.description.match(regex);
      }
    );
    return filteredPosts;
  } catch (err) {
    console.error("Error during search operation:", err);
  }
};
export const getAllUsers = async () => {
  const response = await fetch(`${baseUrl}/api/authors?populate=%2A`);
  const users = await response.json();
  return users.data;
};
export const getUserId = async () => {
  const session = await auth();
  if (session) {
    const email = session?.user?.email;
    if (email) {
      const user = await getUserByEmail(email);
      return user;
    }
  } else {
    return null;
  }
};
export const getUserById = async (id: number) => {
  const response = await fetch(`/api/authors/${id}/?populate=%2A`);
  const user = await response.json();
  return user;
};
export const getUserByEmail = async (email: string) => {
  const response = await fetch(`${baseUrl}/api/authors?populate=%2A`);
  const users = await response.json();
  const user = users.data.find((user: UserInfo) => user.email === email);
  return user;
};
export const getComments = async ({ id }: { id: number }) => {
  const response = await fetch(
    `https://magical-chicken-bcaa7cc743.strapiapp.com/api/messages/${id}`
  );
  const comments = await response.json();
  return comments;
};

export const createUser = async (prevState: unknown, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  const password = formData.get("password") as string;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password as string, salt);

  try {
    await fetch(`${baseUrl}/api/authors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: name,
          email: email,
          password: hashedPassword,
          isAdmin: false,
        },
      }),
    });
  } catch (error) {
    console.error("User creation error:", error);
  }
  revalidatePath("/sign-up");
  redirect("/login");
};
export const deleteUser = async (id: number) => {
  try {
    const response = await fetch(`${baseUrl}/api/authors/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user with id ${id}`);
    }

    console.log(`User with id ${id} deleted successfully`);
  } catch (error) {
    console.error("User deletion error:", error);
  }

  revalidatePath("/dashboard/users");
};

export const getDraftPosts = async () => {
  const posts = await getData();
  try {
    const articles = posts?.filter((item: Blog) => item.isPublish === false);
    return articles;
  } catch (err) {
    console.log(err);
  }
};
export const getAdminArticles = async (email: string) => {
  const posts = await getData();
  try {
    const articles = posts?.filter((item: Blog) => item.email === email);
    return articles;
  } catch (err) {
    console.log(err);
  }
};

export async function updateProfileAction(formData: FormData) {
  const { id, name, address, job, about } = Object.fromEntries(formData);
  try {
    await fetch(`${baseUrl}/api/authors/${id}`, {
      method: "POST",

      body: JSON.stringify({
        data: {
          name: name,
          address: address,
          job: job,
          about: about,
        },
      }),
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/settings");
}

export async function createComment(formData: FormData) {
  const { articleId, username, imageUser, comment } =
    Object.fromEntries(formData);
  try {
    await fetch(`${baseUrl}/api/messages`, {
      method: "POST",

      body: JSON.stringify({
        data: {
          articleId: articleId,
          username: username,
          imageUser: imageUser,
          comment: comment,
        },
      }),
    });
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/blogs");
}
