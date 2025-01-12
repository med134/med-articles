import React from "react";
import EditArticle from "@/src/app/components/dashboardUX/EditArticles";
import { checkAdmin, getPostsBySlug } from "@/src/utils/actions";

const Edit = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug;
  const article = await getPostsBySlug(slug);
  const isAdmin = await checkAdmin();

  return (
    <div className="p-6 md:p-1 bg-white">
      <h1 className="text-left text-2xl text-gray-800 font-semibold py-8">
        Edit Your Article & Submit
      </h1>
      <EditArticle article={article} isAdmin={isAdmin} />
    </div>
  );
};
export default Edit;
