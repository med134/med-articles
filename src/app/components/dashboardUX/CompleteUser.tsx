"use client";
import React, { useState } from "react";
import { completeAccount } from "@/src/utils/actions";
import { CompleteAccount } from "../SearchButton";
interface Session {
  session: {
    name: string;
    email: string;
    image: string;
  };
}
const CompleteUser = ({ session }: Session) => {
  const [confirmationPass, setConfirmationPass] = useState("");
  const [password, setPassword] = useState("");
  const [isMatch, setIsMatch] = useState(true);

  interface HandleConfirmPasswordEvent {
    target: {
      value: string;
    };
  }

  const handleConfirmPassword = (e: HandleConfirmPasswordEvent) => {
    const value = e.target.value;
    setConfirmationPass(value);
    setIsMatch(value !== password);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-[0_2px_13px_-6px_rgba(0,0,0,0.4)] sm:p-2 p-4 rounded-md">
      <div className="my-8 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <h4 className="mx-4 text-center sm:text-xl font-mono text-mainColor font-semibold text-2xl">
          Complete Create your account
        </h4>
      </div>
      <form action={completeAccount} className="">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 sm:flex sm:flex-col sm:gap-0 sm:px-2">
          <input hidden readOnly value={session?.email || ""} name="email" />
          <div>
            <label className="text-gray-800 text-sm mb-2 block sm:px-2 ">username</label>
            <input
              name="name"
              type="text"
              className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-mainColor transition-all"
              placeholder="Enter username"
              required
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block sm:px-2 sm:pt:1">
              Home Address (optional)
            </label>
            <input
              name="homeAddress"
              type="address"
              className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-mainColor transition-all"
              placeholder="Enter Home Address"
            />
          </div>

          <div>
            <label className="text-gray-800 text-sm mb-2 block sm:px-2 sm:pt:1">Password</label>
            <input
              type="password"
              className="bg-gray-100 focus:bg-transparent w-full text-sm text-gray-800 px-4 py-3 rounded-md outline-mainColor transition-all"
              placeholder="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label className="text-gray-800 text-sm mb-2 block sm:px-2 sm:pt:1">
              Confirm Password
            </label>
            <input
              className={`w-full rounded-md bg-gray-100 text-sm placeholder:capitalize px-4 py-3 outline-mainColor ${
                isMatch && "outline-red-600"
              }`}
              type="password"
              required
              placeholder="confirm password"
              value={confirmationPass}
              onChange={(e) => handleConfirmPassword(e)}
            />
          </div>
          <div className="">
            <label className="text-gray-800 text-sm mb-2 block sm:px-2 sm:pt:1">
              Enter somethings about you (optional)
            </label>
            <textarea
              name="about"
              rows={5}
              maxLength={256}
              placeholder="write somethings about you experience or skills to describe you self [Max 256 chars]"
              className="w-full rounded-lg p-4 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm outline-mainColor"
            />
          </div>
        </div>

        <div
          className={`px-5 mt-4 text-center w-full py-2 rounded-md text-light  ${
            isMatch
              ? "bg-gray-500 text-dark cursor-not-allowed"
              : "bg-mainColor hover:bg-cyan-600"
          }`}
        >
          <CompleteAccount />
        </div>
      </form>
    </div>
  );
};

export default CompleteUser;
