"use client";
import React, { useState, useRef, useMemo, useActionState } from "react";
import SkeletonLoadingForm from "../dashboardUX/SkeltonLoadingForm";
import imageCompression from "browser-image-compression";
import "jodit/examples/assets/app.css";
import { UserInfo } from "../Interfaces";
import { addArticle } from "@/src/utils/actions";
import IsUpdate from "../dashboardUX/IsUpdate";
import JoditEditor from "jodit-pro-react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { blogSchema } from "@/src/utils/ZodSchema";

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

  const [form, fields] = useForm({
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: blogSchema,
      });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });
  /* joditEditor */
  const editor = useRef(null);
  const config = useMemo(
    () => ({
      readonly: false,
      filebrowser: {
        ajax: {
          url: "https://xdsoft.net/jodit/finder/",
        },
        height: 580,
      },
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
        url: "https://xdsoft.net/jodit/finder/?action=fileUpload",
      },
      height: "500px",
      width: "100%",
    }),
    []
  );
  const readURL = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
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
              {typeof success === 'string' && <IsUpdate success={success} />}
              <form
                id={form.id}
                onSubmit={form.onSubmit}
                action={action}
                noValidate
                className="p-4 text-left text-gray-700"
              >
                <div className="grid grid-cols-2 gap-4 md:block">
                  <div>
                    <input
                      name={fields.title.name}
                      key={fields.title.key}
                      defaultValue={fields.title.initialValue as string}
                      placeholder="Title"
                      className="h-12 w-full sm:mb-2 rounded-md border m-1 bg-white px-2 text-sm outline-none focus:ring sm:px-2"
                    />
                    <p className="text-red-600 text-sm px-4">
                      {fields.title.errors}
                    </p>
                  </div>
                  <div>
                    <input
                      required
                      type="text"
                      name={fields.tags.name}
                      key={fields.tags.key}
                      defaultValue={fields.tags.initialValue as string}
                      placeholder="tags"
                      className="h-12 w-full rounded-md border m-1 bg-white px-5 outline-none focus:ring"
                    />
                    <p className="text-red-600 text-sm px-4">
                      {fields.tags.errors}
                    </p>
                  </div>
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
                  <div>
                    <textarea
                      required
                      name={fields.description.name}
                      key={fields.description.key}
                      defaultValue={fields.description.initialValue as string}
                      placeholder="description"
                      className="h-24 w-full p-3 rows-3 rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
                    />
                    <p className="text-red-600 text-sm px-4">
                      {fields.description.errors}
                    </p>
                  </div>
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="example-title-slug"
                      name={fields.slug.name}
                      key={fields.slug.key}
                      defaultValue={fields.slug.initialValue as string}
                      className="h-12 w-full rounded-md border m-1 bg-white px-5 text-sm outline-none focus:ring"
                    />
                    <p className="text-red-600 text-sm px-4">
                      {fields.slug.errors}
                    </p>
                  </div>
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
