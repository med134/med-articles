"use client";
import React from "react";
import { sendMessage } from "@/src/utils/action";
import Form from "next/form";
import { useActionState } from "react";

const FormMessage = () => {
  const [message, action, isPending] = useActionState(sendMessage, undefined);
  return (
    <Form action={action} className="mb-12 w-full px-6 xs:px-0">
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700 dark:text-light">
          Name
        </label>
        <input
          type="name"
          required
          name="name"
          className="px-2 py-2 border w-full outline-none rounded-md"
          placeholder="Name"
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700 dark:text-light">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="px-2 py-2 border w-full outline-none rounded-md"
          placeholder="Enter your email address"
        />
      </div>
      <div className="mb-3 w-full">
        <label className="block font-medium mb-[2px] text-teal-700 dark:text-light">
          Message
        </label>
        <textarea
          rows={5}
          name="message"
          maxLength={300}
          minLength={10}
          placeholder="write your message"
          required
          className="px-2 py-2 border rounded-[5px] w-full outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
      >
        {isPending ? "sending" : "send"}
      </button>
      {message && (
        <div className="bg-green-200 px-6 py-4 my-4 rounded-md text-lg flex items-center mx-auto max-w-lg">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <span className="text-green-800">{message}</span>
        </div>
      )}
    </Form>
  );
};

export default FormMessage;
