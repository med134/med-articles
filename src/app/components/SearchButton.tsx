"use client";
import { useFormStatus } from "react-dom";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function SearchButton({ className }: { className: string }) {
  const status = useFormStatus();
  return (
    <button
      className={`${className} absolute dark:text-light inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-gray-200 focus:outline-none focus:ring-mainColor focus:border-mainColor`}
      type="submit"
    >
      {status.pending ? "Searching..." : "Search"}
      <svg
        className="h-5 w-5 ml-4"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z"
        />
      </svg>
    </button>
  );
}

export function PostButton() {
  const status = useFormStatus();
  return (
    <button
      className="flex justify-around group dark:bg-dark dark:border dark:border-light dark:text-light px-6 xs:px-2 py-2 items-center hover:bg-cyan-500 bg-mainColor rounded-md text-light"
      type="submit"
    >
      {status.pending ? "Posting..." : "Post"}
    </button>
  );
}
export function DeleteButton() {
  const status = useFormStatus();
  return (
    <button className="flex justify-center items-center" type="submit">
      <span className="sm:hidden">
        {status.pending ? "deleting..." : "Delete"}
      </span>
      <RiDeleteBin5Line className="ml-2" />
    </button>
  );
}
export function EditButton() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="rounded-lg flex p-3 w-full px-16 bg-cyan-700/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-cyan-500/40 font-medium text-base leading-none items-center justify-center gap-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
          clipRule="evenodd"
        />
      </svg>
      <span className="font-bold">
        {status.pending ? "editing process..." : "Edit now!"}
      </span>
    </button>
  );
}

export function CreateButton() {
  const status = useFormStatus();
  return (
    <button
      type="submit"
      className="mt-5 tracking-wide  font-semibold bg-[#2b7aa6] text-white-500 w-full py-2 rounded-lg hover:bg-[#2b9aa2] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
    >
      <span className="text-light">
        {status.pending ? "Creating..." : "Create Account"}
      </span>
    </button>
  );
}
