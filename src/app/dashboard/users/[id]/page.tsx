import { auth } from "@/auth";
import ProfileDashboard from "@/src/app/components/dashboardUX/ProfileDashboard";
import {
  getUserById,
} from "@/src/utils/actions";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const session = await auth();
  const user = await getUserById(id);
  let isOwner = false;
  if (session && session.user && user.email === session.user.email) {
    isOwner = true;
  }
  return (
    <main className="w-full">
      <ProfileDashboard
        user={user}
        isOwner={isOwner}
      />
    </main>
  );
}
