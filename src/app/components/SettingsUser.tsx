"use client";
import React, { useState } from "react";
import Image from "next/image";
import Form from "next/form";
import { editUserProfile } from "@/src/utils/action";
import {
  BsDribbble,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { useActionState } from "react";
import imageCompression from "browser-image-compression";
import SearchLoading from "./SearchLoading";
import { MdOutlineWorkOutline, MdOutlineLocalLibrary } from "react-icons/md";
import { UserInfo } from "./Interfaces";
import IsUpdate from "./IsUpdate";
interface UserProps {
  user: UserInfo;
}
const SettingsUser = ({ user }: UserProps) => {
  const [success, action, isPending] = useActionState(editUserProfile, null);
  const [dataUrl, setDataUrl] = useState(user?.imageUrl);
  const [formData, setFormData] = useState({
    name: user.name || "",
    job: user.job || "",
    homeAddress: user.homeAddress || "",
    about: user.about || "",
    youtubeUrl: user.youtubeUrl || "",
    githubUrl: user.githubUrl || "",
    instagramUrl: user.instagramUrl || "",
    linkedInUrl: user.linkedInUrl || "",
    dribbleUrl: user.dribbleUrl || "",
    twitterUrl: user.twitterUrl || "",
  });

  //onchange function
  const handelChange = (key: string, value: string) => {
    setFormData((prv) => {
      return { ...prv, [key]: value };
    });
  };
  const readURL = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      // Compression options
      const options = {
        maxSizeMB: 1, // Maximum file size in MB
        maxWidthOrHeight: 800, // Maximum width or height
        useWebWorker: true, // For better performance
      };
      try {
        // Compress the image file
        const compressedFile = await imageCompression(file, options);
        const reader = new FileReader();
        reader.onload = () => {
          const src = reader.result;
          if (src) {
            setDataUrl(src as string); // Set compressed image to state
          }
        };
        reader.readAsDataURL(compressedFile);
      } catch (error) {
        console.log("Error while compressing the image", error);
      }
    }
  };
  return (
    <div className="w-full rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
      {success && (
        <div className="fixed top-20 z-40">
          {" "}
          <IsUpdate success={success} />
        </div>
      )}
      <Form action={action} className="p-4 md:p-2 text-center lg:text-left">
        {/* Image for mobile view */}
        <div className="max-w-md mx-auto px-10 p-2 rounded-md flex flex-col justify-center items-center">
          <Image
            className="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 object-cover"
            src={dataUrl}
            width={300}
            height={300}
            alt="user image"
          />
          <label className="text-base text-gray-500 font-semibold mb-2 block">
            Upload Image
          </label>
          <input
            type="file"
            onChange={readURL}
            accept="image/*"
            readOnly
            className="w-min text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
          />
        </div>

        <div className="mx-auto w-4/5 pt-3 border-b-2 border-mainColor opacity-25" />
        {/* Job and Country */}
        <div className="w-full py-6 flex flex-col items-center mx-auto gap-2 max-w-lg p-4">
          <input name="id" value={user._id} hidden readOnly />
          <input name="email" value={user.email} hidden readOnly />
          <input type="text" name="imageUrl" value={dataUrl} hidden readOnly />
          <div className="relative w-full">
            <FaRegUser className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              className="w-full border-2 rounded-lg font-mono bg-gray-100 placeholder:capitalize px-12 py-1.5 outline-mainColor"
              type="text"
              placeholder="new name"
              name="name"
              value={formData.name}
              onChange={(e) => handelChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="relative w-full">
            <MdOutlineWorkOutline className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              className="w-full border-2 rounded-lg font-mono bg-gray-100 placeholder:capitalize px-12 py-1.5 outline-mainColor"
              type="text"
              placeholder="Your Job"
              name="job"
              value={formData.job}
              onChange={(e) => handelChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="relative w-full">
            <MdOutlineLocalLibrary className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              className="w-full border-2 rounded-lg font-mono bg-gray-100 placeholder:capitalize px-12 py-1.5 outline-mainColor"
              type="text"
              placeholder="Country"
              name="homeAddress"
              value={formData.homeAddress}
              onChange={(e) => handelChange(e.target.name, e.target.value)}
            />
          </div>
        </div>
        {/* About Me Textarea */}
        <div className="flex flex-col mx-auto gap-2 max-w-lg p-4">
          <label
            htmlFor="input"
            className="font-semibold text-lg sm:text-sm mb-4"
          >
            Enter somethings about you
          </label>
          <textarea
            name="about"
            id="about"
            rows={5}
            maxLength={256}
            value={formData.about}
            onChange={(e) => handelChange(e.target.name, e.target.value)}
            placeholder="write somethings about you experience or skills to describe you self [Max 256 chars]"
            className="rounded-lg p-4 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm outline-mainColor"
          />
        </div>
        <div className="mx-auto w-4/5 flex flex-col justify-center items-center pt-3 mb-2 border-b-2 border-mainColor opacity-25" />
        <div className="socialMedia">
          <label className="font-semibold text-lg sm:text-sm mb-4 md:px-4">
            Social Media Links
          </label>
          <div className="flex justify-evenly flex-wrap mx-auto gap-4 max-w-lg p-4">
            <div className="relative w-full">
              <BiX className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="twitterUrl"
                placeholder="X URL..."
                value={formData?.twitterUrl}
                onChange={(e) => handelChange(e.target.name, e.target.value)}
                className="w-full px-12 rounded-lg p-2 outline-mainColor bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsLinkedin className="absolute left-3 fill-slate-600 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="linkedInUrl"
                value={formData?.linkedInUrl}
                onChange={(e) => handelChange(e.target.name, e.target.value)}
                placeholder="linkedIn URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsGithub className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="githubUrl"
                value={formData?.githubUrl}
                onChange={(e) => handelChange(e.target.name, e.target.value)}
                placeholder="github URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsYoutube className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="youtubeUrl"
                value={formData?.youtubeUrl}
                onChange={(e) => handelChange(e.target.name, e.target.value)}
                placeholder="youtube channel URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsDribbble className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                name="dribbleUrl"
                value={formData?.dribbleUrl}
                onChange={(e) => handelChange(e.target.name, e.target.value)}
                placeholder="dribble URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
            <div className="relative w-full">
              <BsInstagram className="absolute left-3 rounded-full w-5 h-5 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="url"
                value={formData?.instagramUrl}
                onChange={(e) => handelChange(e.target.name, e.target.value)}
                name="instagramUrl"
                placeholder="instagram URL..."
                className="w-full px-12 rounded-lg p-2 bg-gray-100 border-2 border-solid border-black/10 font-mono font-medium text-sm"
              />
            </div>
          </div>
        </div>
        {isPending && <SearchLoading />}
        <button
          type="submit"
          className="rounded-lg flex p-3 w-full px-16 bg-cyan-700/20 border-2 border-solid border-green-500/20 transition-colors hover:bg-cyan-500/40 font-medium text-base leading-none items-center justify-center gap-2"
        >
          <FaRegEdit className="w-5 h-5" />
          <span className="font-bold">edit user</span>
        </button>
      </Form>
    </div>
  );
};

export default SettingsUser;
