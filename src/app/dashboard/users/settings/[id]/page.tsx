import React from "react";
import { getUserById } from "@/src/utils/actions";
import UpdateUser from "@/src/app/components/dashboardUX/UpdateUser";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const user = await getUserById(id);
  return (
    <div className="max-w-4xl flex items-center mx-auto my-16">
      <UpdateUser user={user} />
    </div>
  );
};

export default page;
