"use client";
import React, { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import ShareButtons from "./ShareButtons";
import { incrementLike } from "@/src/utils/action";

const ReactionBlog = ({
  slug,
  totalLikes,
  BlogId,
}: {
  slug: string;
  totalLikes: number;
  BlogId: string;
}) => {
  const [likes, setLikes] = useState(totalLikes);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <div className="flex justify-start items-center p-2 border mb-1 rounded-md sm:flex-col">
        <div className="flex">
          <button
            onClick={async () => {
              if (!isClicked) {
                const updatedLikes = await incrementLike(BlogId);
                setLikes(updatedLikes);
                setIsClicked(true);
              }
            }}
            className={`${
              isClicked ? "bg-mainColor" : "bg-transparent"
            }py-3 px-4 hover:text-mainColor hover:scale-105 hover:shadow text-center border border-gray-300 rounded-md  h-8 text-sm flex items-center gap-1 lg:gap-2`}
          >
            <span
              className={`${isClicked ? "text-mainColor font-semibold" : ""}`}
            >
              {" "}
              Like{" "}
            </span>
            <AiOutlineLike
              className={`w-5 h-5 ${isClicked ? "fill-mainColor" : ""}`}
            />
            <span>{likes}</span>
          </button>
        </div>
        <ShareButtons url={`https://www.medcode.dev/blogs/${slug}`} />
      </div>
    </>
  );
};

export default ReactionBlog;
