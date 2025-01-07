"use client";
import React, { useState, useRef, useMemo, useActionState } from "react";
import SkeletonLoadingForm from "./SkeletonLoadingForm ";
import dynamic from "next/dynamic";
import imageCompression from "browser-image-compression";
import "jodit/examples/assets/app.css";
import { UserInfo } from "./Interfaces";
import { addArticle } from "@/src/utils/action";
import IsUpdate from "./IsUpdate";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });
interface UserProps {
  user: UserInfo;
  name: string;
  _id: string;
  userImage: string;
  email: string;
  imageUrl: string;
}
const AddNewArticle = ({ user }: { user: UserProps }) => {
  const [myContent, setMyContent] = useState("");
  const [dataUrl, setDataUrl] = useState("");
  const [success, action, isPending] = useActionState(addArticle, undefined);
  /* joditEditor */
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
      height: "500px",
      width: "100%",
    }),
    []
  );

  console.log(myContent);

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
        // Convert the compressed file to base64 URL
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
  const changeContent = (newContent: string) => {
    setMyContent(newContent);
  };
  return (
    <>
      {user && (
        <div className="inline-block max-h-full p-8 py-8 sm:p-2 sm:py-2 w-full">
          <h1 className="text-gray-700 text-2xl lg:text-2xl font-bold">
            Start to Create Your Article
          </h1>
          {isPending ? (
            <SkeletonLoadingForm />
          ) : (
            <div className="sm:items-center py-3">
              {success && <IsUpdate success={success} />}
              <form action={action} className="p-4 text-left text-gray-700">
                <div className="grid grid-cols-2 gap-4 md:block">
                  <input
                    required
                    name="title"
                    placeholder="Title"
                    className="h-12 w-full sm:mb-2 rounded-md border m-1 bg-white px-2 text-sm outline-none focus:ring sm:px-2"
                  />
                  <input
                    required
                    type="text"
                    name="tags"
                    placeholder="tags"
                    className="h-12 w-full rounded-md border m-1 bg-white px-5 outline-none focus:ring"
                  />
                  <div className="max-w-md mx-auto border border-gray-200 px-10 p-2 rounded-md">
                    <label className="text-base text-gray-500 font-semibold mb-2 block">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      onChange={readURL}
                      id="image"
                      accept="image/*"
                      className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
                    />
                    <p className="text-xs text-gray-400 mt-2">
                      PNG, JPG SVG, WEBP, and GIF are Allowed.
                    </p>
                    <input type="hidden" name="image" value={dataUrl} />
                    <input type="hidden" name="username" value={user?.name} />
                    <input type="hidden" name="email" value={user.email} />
                    <input type="hidden" name="userId" value={user._id} />
                    <input
                      type="hidden"
                      name="userImage"
                      value={user.imageUrl}
                    />
                  </div>

                  <textarea
                    required
                    name="description"
                    placeholder="description"
                    className="h-24 w-full p-3 rows-3 rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
                  />
                  <input
                    required
                    type="text"
                    placeholder="example-title-slug"
                    name="slug"
                    className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
                  />
                  <div className="">
                    <select
                      id="selectChoice"
                      defaultValue="select category"
                      name="category"
                      className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
                    >
                      <option value="">Select category</option>
                      <option value="react">React.js</option>
                      <option value="next.js">Next.js</option>
                      <option value="career">Career</option>
                      <option value="solution">Solution</option>
                      <option value="productivity">Productivity</option>
                      <option value="tools">Tools</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <select
                      defaultValue="select your job"
                      name="job"
                      className="h-12 w-full max-w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
                    >
                      <option value="">Select Your jobs</option>
                      <option value="Software engineer">
                        Software engineer
                      </option>
                      <option value="Software Developer">
                        Software Developer
                      </option>
                      <option value="Designer">Designer</option>
                      <option value="Front-end Developer">
                        Front-end Developer
                      </option>
                      <option value="Content Creator">Content Creator</option>
                      <option value="student">student</option>
                    </select>
                  </div>
                  <select
                    id="selectStatus"
                    name="status"
                    defaultValue={"draft"}
                    className="h-12 w-full max-w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
                  >
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <JoditEditor
                  ref={editor}
                  config={config}
                  value={myContent}
                  onChange={changeContent}
                />
                <input type="hidden" name="content" value={myContent} />

                <button
                  disabled={isPending}
                  type="submit"
                  className={`rounded-md font-semibold py-2 w-full bg-mainColor text-light ml-4 sm:ml-0 mt-5 hover:bg-cyan-700 ${
                    isPending ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isPending ? "Creating..." : "Create Article"}
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AddNewArticle;
