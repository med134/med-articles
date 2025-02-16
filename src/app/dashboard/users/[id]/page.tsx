import { auth } from "@/auth";
import ProfileDashboard from "@/src/app/components/dashboardUX/ProfileDashboard";
import { getUserById } from "@/src/utils/strapiSever";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const user = await getUserById(id);
  const useSession = await auth();
  let isOwner = false;
  if (useSession?.user?.email === user?.data?.email) {
    isOwner = true;
  }

  console.log(useSession?.user?.email);

  return (
    <main className="w-full">
      <ProfileDashboard user={user.data} isOwner={isOwner} />
    </main>
  );
}
