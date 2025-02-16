import React from "react";
import EditPending from "../../components/dashboardUX/EditPending";
import { getDraftPosts } from "@/src/utils/strapiSever";

const page = async () => {
  const draftBlog = await getDraftPosts();
  console.log(draftBlog)
  return (
    <div className="container mx-auto p-4 py-8">
      <EditPending draftBlog={draftBlog} />
    </div>
  );
};
export default page;
