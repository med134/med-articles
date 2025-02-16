import React from "react";
import { checkAdmin, getEmailSession } from "@/src/utils/actions";
import ListBlogUsers from "@/src/app/components/dashboardUX/ListBlogUsers";
import { getAdminArticles } from "@/src/utils/strapiSever";

const Blogs = async () => {
  const email = await getEmailSession();
  if (!email) {
    throw new Error("Email is required");
  }
  const posts = await getAdminArticles(email);
  const isAdmin = await checkAdmin();

  return (
    <div className="w-full p-6 h-full md:p-1 xs:py-10">
      <ListBlogUsers posts={posts} isAdmin={isAdmin} />
    </div>
  );
};

export default Blogs;
