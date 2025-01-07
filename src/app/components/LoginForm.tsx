"use client";
import React, { useActionState } from "react";
import { loginAuth } from "@/src/utils/action";

const LoginForm = () => {
  const [error, action, isPending] = useActionState(loginAuth, undefined);
  return (
    <>
      <form className="mt-4" action={action}>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <div className="flex justify-center items-center sm:flex sm:flex-col">
          <input
            className="w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 sm:mb-2 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            name="email"
            type="email"
            placeholder="email"
            required
          />
          <input
            className="w-full px-8 py-3 ml-3 rounded-lg font-medium bg-gray-100 border border-gray-200 sm:mb-2 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="text-light mt-5 tracking-wide font-semibold bg-[#2b7aa6] text-white-500 w-full py-2 rounded-lg hover:bg-[#2b9aa2] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
          {isPending ? "login..." : "login"}
        </button>
      </form>
    </>
  );
};
export default LoginForm;
