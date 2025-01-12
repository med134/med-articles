import { auth } from "@/auth";
import ProfileDashboard from "@/src/app/components/dashboardUX/ProfileDashboard";
import {
  getEmailSession,
  getNumberOfArticle,
  getUserById,
} from "@/src/utils/actions";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const email = await getEmailSession();
  const session = await auth();
  if (!email) {
    throw new Error("Email is required");
  }
  const numberOfArticle = await getNumberOfArticle(email);
  const user = await getUserById(id);
  let isOwner = false;
  if (session && session.user && user.email === session.user.email) {
    isOwner = true;
  }
  return (
    <main className="w-full">
      <ProfileDashboard
        user={user}
        numberOfArticle={numberOfArticle}
        isOwner={isOwner}
      />
    </main>
  );
}
