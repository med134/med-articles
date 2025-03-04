import { getComments } from "@/src/utils/strapiSever";
import React from "react";

const AllComments = async ({ postId }) => {
  const comments = await getComments(postId);
  console.log(comments);
  return (
    <div className="mt-4">
      comments
      {comments?.map((item) => (
        <div key={item.id}>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default AllComments;
