"use client";
import { useState, useMemo, useActionState, useRef } from "react";
import Link from "next/link";
import "jodit/examples/assets/app.css";
import JoditEditor from "jodit-react";
import imageCompression from "browser-image-compression";
import { editArticles } from "@/src/utils/action";
import Image from "next/image";
import SearchLoading from "@/src/app/components/SearchLoading";
import { Blog } from "./Interfaces";
import { useSession } from "next-auth/react";

interface ArticleProps {
  article: Blog[];
  _id: string;
  title: string;
  tags: string;
  image: string;
  description: string;
  slug: string;
  category: string;
  job: string;
  content: string;
  status: string;
  username: string;
  userId: string;
  email: string;
  userImage: string;
  createdAt: Date;
}
export default function EditArticle({ article }: { article: ArticleProps }) {
  const [success, action, isPending] = useActionState(editArticles, undefined);
  const session = useSession();
  const [dataUrl, setDataUrl] = useState(article.image || null);
  const config = useMemo(
    () => ({
      uploader: {
        insertImageAsBase64URI: true,
        imagesExtensions: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
      },
      readonly: false,
      height: "500px",
      width: "100%",
    }),
    []
  );
  const [content, setContent] = useState(article.content);
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  const editor = useRef(null);
  const [formArticle, setFormData] = useState({
    title: article.title,
    description: article.description,
    tags: article.tags,
    image: article?.image,
    job: article.job,
    category: article.category,
    content: article.content,
    status: article.status,
  });
  // handelInput
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
  console.log(content);
  return (
    <form action={action} className="w-auto">
      {success && (
        <p className="text-xl fixed top-24 px-16 z-40 rounded-md bg-green-600 text-light py-2 text-center">
          {success}
        </p>
      )}
      <input name="id" value={article._id} hidden readOnly />
      <input name="slug" value={article.slug} hidden readOnly />
      <input name="userId" value={article.userId} hidden readOnly />
      <input name="email" value={article.email} hidden readOnly />
      <input name="username" value={article.username} hidden readOnly />
      <input type="text" name="image" value={dataUrl || ""} hidden readOnly />
      <input name="content" value={content} hidden readOnly />
      <input
        type="text"
        name="userImage"
        value={article.userImage}
        hidden
        readOnly
      />

      <div className="flex justify-around items-center md:block">
        <div className="p-4 border border-dark rounded-lg w-1/2">
          <Image
            className="rounded-sm shadow-xl mx-auto h-32 object-cover"
            src={dataUrl || ""}
            width={300}
            height={300}
            alt="user image"
            loading="lazy"
          />
          <input
            type="file"
            onChange={readURL}
            accept="image/*"
            readOnly
            className="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded"
          />
        </div>
        <div className="grid grid-cols-2 md:block md:w-full">
          <div className="p-4 sm:p-2">
            <label
              className="text-gray-600 font-bold mb-2 dark:text-light px-4"
              htmlFor="title"
            >
              title
            </label>
            <input
              value={formArticle.title}
              className="border w-full border-slate-500 px-8 py-2 rounded-lg"
              type="text"
              id="title"
              name="title"
              placeholder="Topic Title"
              onChange={(e) => handelChange(e.target.name, e.target.value)}
            />
          </div>
          <div className="p-4 sm:p-2">
            <label
              className="text-gray-600 font-bold mb-2 dark:text-light px-4"
              htmlFor="newTags"
            >
              Tags
            </label>
            <input
              onChange={(e) => handelChange(e.target.name, e.target.value)}
              value={formArticle.tags}
              id="tags"
              className="border w-full border-slate-500 px-8 py-2 rounded-lg"
              type="text"
              name="tags"
              placeholder="Topic tags"
            />
          </div>

          <div className="p-4 sm:p-2">
            <label
              className="text-gray-600 font-bold mb-2 dark:text-light px-4"
              htmlFor="newDescription"
            >
              Description
            </label>
            <input
              onChange={(e) => handelChange(e.target.name, e.target.value)}
              value={formArticle.description}
              id="newDescription"
              className="border w-full border-slate-500 px-8 py-2 rounded-lg"
              type="text"
              name="description"
              placeholder="Topic Description"
            />
          </div>
          <div className="p-4 sm:p-2">
            <label
              className="text-gray-600 font-bold mb-2 dark:text-light px-4"
              htmlFor="newCategory"
            >
              Category
            </label>
            <select
              id="newCategory"
              value={formArticle.category}
              name="category"
              onChange={(e) => handelChange(e.target.name, e.target.value)}
              className="h-12 w-full max-w-full py-2 rounded-md border px-8 bg-white text-sm outline-none focus:ring"
            >
              <option value="">Select category</option>
              <option value="react">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="career">Career</option>
              <option value="solution">Solution</option>
              <option value="productivity">Productivity</option>
              <option value="tools">Tools</option>
            </select>
          </div>

          <div className="p-4 sm:p-2">
            <label className="text-gray-600 px-4 font-bold mb-2 dark:text-light">
              job
            </label>
            <div className="">
              <select
                value={formArticle.job}
                name="job"
                onChange={(e) => handelChange(e.target.name, e.target.value)}
                className="h-11 w-full max-w-full rounded-md border px-8 py-2 bg-white text-sm outline-none focus:ring"
              >
                <option value="">Select Your jobs</option>
                <option value="Software engineer">Software engineer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Designer">Designer</option>
                <option value="Front-end Developer">Front-end Developer</option>
                <option value="Content Creator">Content Creator</option>
                <option value="student">student</option>
              </select>
            </div>
          </div>
          <div
            className={`p-3 ${
              session?.data?.user?.email === "mohamed7dakir@gmail.com"
                ? "block"
                : "hidden"
            }`}
          >
            <label className="text-gray-600 font-bold mb-2 dark:text-light">
              Status
            </label>
            <select
              value={formArticle.status}
              name="status"
              onChange={(e) => handelChange(e.target.name, e.target.value)}
              className="h-11 w-full max-w-full rounded-md border bg-white px-5 text-sm outline-none focus:ring"
            >
              <option className="py-2" value="draft">
                Draft
              </option>
              <option value="publish" className="py-2">
                publish
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="md:p-2">
        <label
          className="text-gray-600 font-bold mb-1 dark:text-light"
          htmlFor="content"
        >
          content
        </label>
        <JoditEditor
          ref={editor}
          config={config}
          value={content}
          onChange={handleEditorChange}
        />
      </div>
      {isPending && <SearchLoading />}
      <div className="flex justify-start items-center mt-2">
        <button
          type="submit"
          className="bg-slate-600 font-bold text-white py-3 px-6 w-fit hover:bg-slate-400 rounded-lg"
        >
          {isPending ? "loading for updating" : "Update Article"}
        </button>
        <Link
          href="/dashboard/blogs"
          className="bg-slate-600 ml-3 font-bold text-white py-3 px-6 w-fit hover:bg-slate-400 rounded-lg"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
