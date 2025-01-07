import { z } from "zod";
import bcrypt from "bcryptjs";

const saltRounds = 10;
const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

export const userSchema = z.object({
  username: z
    .string()
    .min(3, "min character of name is 3")
    .max(14, "max character of name is 14"),
  email: z.string().email(),
  password: z.string().min(8, "min character of password is 8"),
});

export const signInSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(20, "Email is required")
    .email("Invalid email"),
  password: z
    .string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const createAccountSchema = z.object({
  name: z
    .string({ message: "name is required" })
    .min(6, "name must be more then 6 characters")
    .max(50, "name must be leas then 50 characters"),
  email: z
    .string({ message: "Email is required" })
    .min(16, "Email is required ")
    .email("Invalid email"),
  password: z
    .string({ message: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters")
    .transform(hashPassword),
});
