"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { incrementLike } from "@/src/utils/actions";

const ReactionBlog = ({
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
      <div className="flex justify-start items-center p-2 mb-1 rounded-md sm:flex-col">
        <div className="flex">
          <button
            onClick={async () => {
              if (!isClicked) {
                const updatedLikes = await incrementLike(BlogId);
                setLikes(updatedLikes);
                setIsClicked(true);
              }
            }}
            className={`py-3 px-4 rounded-md text-red-500 text-center h-8 flex items-center gap-1 lg:gap-2`}
          >
            {isClicked ? (
              <FaHeart className={`w-6 h-6 fill-red-500`} />
            ) : (
              <FaRegHeart className="w-6 h-6 fill-dark" />
            )}
            <span className="text-dark ml-2">
              {likes} personas likes this post...
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReactionBlog;
