"use client";
import React, { useState, useEffect } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { incrementLike } from "@/src/utils/actions";

const ReactionBlog = ({ BlogId }: { BlogId: string }) => {
  const [likes, setLikes] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/comments/${BlogId}`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data);
        setLoading(false);
      });
  }, [BlogId]);
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
            <div className="text-dark ml-2">
              {loading
                ? "loading..."
                : <span>{likes} personas likes this post...</span>}
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReactionBlog;
