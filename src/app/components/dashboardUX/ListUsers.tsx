"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useActionState, useState } from "react";
import { UserInfo } from "../Interfaces";
import Pagination from "../Pagination";
import { RiDeleteBin5Line } from "react-icons/ri";
import { deleteUser } from "@/src/utils/actions";
import { FormatDate } from "../AllDataArrays";

interface UserProps {
  users: UserInfo[];
  isAdmin: boolean;
}

const TableUsers = ({ users, isAdmin }: UserProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [success, action, isPending] = useActionState(deleteUser, undefined);
  const handleMovePages = (page: number) => {
    setCurrentPage(page);
  };
  const perPage = 5;
  const indexOfLastBlog = currentPage * perPage;
  const indexOfFirstBlog = indexOfLastBlog - perPage;
  const currentBlog = users.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(users.length / perPage);
  return (
    <div className="w-full overflow-x-auto">
      <h3 className="py-3 font-semibold text-2xl md:text-xl">Admin & Users</h3>
      {success && (
        <p className="text-xl font-semibold bg-green-500 text-center text-light">
          {success.error}
        </p>
      )}
      <table className="w-full">
        <thead>
          <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
            <th className="px-4 py-3 sm:text-sm">Full Name</th>
            <th className="px-4 py-3 sm:text-sm">Location</th>
            <th className="px-4 py-3 sm:text-sm">Role</th>
            <th className="px-4 py-3 sm:text-sm">Join Date</th>
            {isAdmin && <th className="px-4 py-3 sm:text-sm">Action</th>}
          </tr>
        </thead>
        <tbody className="bg-white">  
          {currentBlog?.map((user: UserInfo, index: number) => (
            <tr
              key={user._id}
              className={`text-gray-700 ${index === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="px-4 py-3 border">
                <Link
                  href={`/dashboard/users/${user._id}`}
                  className="flex items-center text-sm"
                >
                  <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                    <Image
                      className="object-cover w-full h-full rounded-full"
                      src={user.imageUrl}
                      alt="user image"
                      loading="lazy"
                      width={200}
                      height={200}
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{user.name}</p>
                    <p className="text-xs text-gray-600">{user?.job}</p>
                  </div>
                </Link>
              </td>
              <td className="px-4 py-3 text-ms font-semibold border">
                {user?.homeAddress || "unknown"}
              </td>
              <td className="px-4 py-3 text-xs border">
                <span
                  className={`${
                    user.isAdmin
                      ? "text-red-600 bg-red-100 px-4 py-1 font-semibold"
                      : "px-4 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                  }`}
                >
                  {" "}
                  {user?.isAdmin ? "ADMIN" : "USER"}{" "}
                </span>
              </td>
              <td className="px-4 py-3 text-sm border">
                {FormatDate(user.createdAt)}
              </td>
              {isAdmin && (
                <td className="px-4 py-3 text-sm border">
                  <form action={action} className="">
                    <input hidden name="id" id="id" value={user._id} readOnly />
                    <button
                      type="submit"
                      className={`flex justify-around group px-2 py-2 items-center bg-red-500 rounded-md text-light`}
                    >
                      {isPending ? "Deleting..." : "Delete"}
                      <RiDeleteBin5Line className="ml-2 hover:font-semibold" />
                    </button>
                  </form>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {users?.length > 0 && (
        <Pagination
          totalPages={totalPages}
          handleMovePages={handleMovePages}
          currentPage={currentPage}
        />
      )}
    </div>
  );
};

export default TableUsers;
