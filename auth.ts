import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google"
import User from "@/src/modalMongodb/User";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "@/auth.config";
import { connect } from "./src/utils/ConnectDB";

interface Credentials {
  email: string;
  password: string;
}

interface User {
  email: string;
  password: string;
}

const login = async (credentials: Credentials): Promise<User> => {
  try {
    connect()
    const user = await User.findOne({ email: credentials.email });

    if (!user) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    GitHub,
    Google,
    Credentials({
      async authorize(credentials) {
        try {
          const user = await login(credentials as unknown as Credentials);
          return user;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
});
