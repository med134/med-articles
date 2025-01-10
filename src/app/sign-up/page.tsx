"use client";
import React, { useActionState } from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import {
  handelLoginGoogle,
  handelLoginGithub,
  addUser,
} from "@/src/utils/actions";
import { CreateButton } from "../components/SearchButton";
import { parseWithZod } from "@conform-to/zod";
import { createAccountSchema } from "@/src/utils/ZodSchema";
import { useForm } from "@conform-to/react";

const Page = () => {
  const [lastResult, action] = useActionState(addUser, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: createAccountSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  return (
    <>
      <div className="flex w-full bg-white items-center justify-center dark:bg-dark py-32 p-16 lg:flex lg:flex-col-reverse md:p-10">
        <div className="m-2 w-full rounded-2xl bg-gray-400 bg-cover bg-center text-white md:hidden">
          <Image
            height={500}
            width={500}
            priority
            className="w-full h-full object-fill rounded-2xl"
            alt="image_login"
            src={
              "https://i.ibb.co/9VFgfg0/organic-flat-blog-post-illustration.jpg"
            }
          />
        </div>
        <div className="w-full sm:w-full md:mt-16">
          <div className="p-8 xs:p-4">
            <h1 className="text-3xl font-black text-slate-700 dark:text-light sm:text-2xl">
              Create Your Account
            </h1>
            <p className="mt-2 mb-5 text-base leading-tight text-gray-600 dark:text-light">
              Create an account in{" "}
              <span className="font-bold text-blue-500 text-xl">
                MedCode Community !
              </span>{" "}
              to publish blogs.
            </p>
            {/* form action register */}
            <form
              id={form.id}
              onSubmit={form.onSubmit}
              action={action}
              noValidate
              className="mt-4"
            >
              <div className="flex flex-col justify-center items-center">
                <input
                  className="w-full dark:bg-dark px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  placeholder="full name"
                  name={fields.name.name}
                  defaultValue={fields.name.initialValue as string}
                  key={fields.name.key}
                  maxLength={40}
                  required
                />
                <p className="text-red-600 text-sm">
                  {fields.name.errors}
                </p>
                <input
                  className="w-full px-8 dark:bg-dark py-3 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  name={fields.email.name}
                  defaultValue={fields.email.initialValue as string}
                  key={fields.email.key}
                  required
                />
                <p className="text-red-600 text-sm">{fields.email.errors}</p>
                <input
                  className="w-full px-8 dark:bg-dark ml-2 sm:ml-0 py-3 mt-2 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="password"
                  placeholder="Password"
                  name={fields.password.name}
                  key={fields.password.key}
                />
                <p className="text-red-600 text-sm">{fields.password.errors}</p>
              </div>
              <CreateButton />
            </form>
            <div className="bg-gray-400 h-[1px] w-full mt-5 mb-5"></div>
            <h4 className="flex justify-center underline text-gray-500 dark:text-light">
              Login with Google or Github
            </h4>
            <div className="flex-col">
              <form action={handelLoginGoogle}>
                <button className="w-full mt-4 text-center px-5 py-2 border flex justify-center items-center gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                  <FcGoogle className="h-6 w-6 " />
                  <span className="dark:text-light text-sm ">
                    Login with Google
                  </span>
                </button>
              </form>
              <form action={handelLoginGithub}>
                <button className="text-white w-full mt-4 bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2">
                  <svg
                    className="w-4 h-4 mr-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Sign in with Github
                </button>
              </form>
            </div>
            <div className="mt-4 text-center">
              <Link
                href="/login"
                className="font-bold text-blue-600 no-underline hover:text-blue-400"
              >
                <span className="text-sm text-gray-600 dark:text-light">
                  Do you have an account ?
                  <span className="text-blue-500 hover:underline"> Login</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
