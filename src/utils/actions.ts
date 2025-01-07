"use server"
import { signIn } from "@/auth";

export const handelLoginGithub = async () => {
    await signIn("github");
  };