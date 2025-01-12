import React from "react";
import { getDraftBlog } from "@/src/utils/actions";
import EditPending from "../../components/dashboardUX/EditPending";

const page = async () => {
  const draftBlog = await getDraftBlog();
  return (
    <div className="container mx-auto p-4 py-8">
      <EditPending draftBlog={draftBlog} />
    </div>
  );
};
export default page;
