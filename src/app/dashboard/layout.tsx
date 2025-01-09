import { auth } from "@/auth";
import { getUserByEmail } from "@/src/utils/actions";
import { AiFillAlert } from "react-icons/ai";
import Link from "next/link";
import { Metadata } from "next";
import DashSide from "../components/dashboardUX/DashSide";
import { redirect } from "next/navigation";
import NavbarDash from "../components/dashboardUX/NavbarDash";

export const metadata: Metadata = {
  title: "Dashboard | medCode ",
  description: `Empower your online presence with a dashboard for effortless blog management. Seamlessly create, edit, and publish captivating content that engages your audience`,
  keywords: [
    "resume",
    "Experience",
    "learning",
    "articles",
    "blogs",
    "templates",
    "programming",
    "front-end",
  ],
  alternates: {
    canonical: `/dashboard`,
    languages: {
      en: `/en/dashboard`,
    },
  },
};
const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  const user =
    session && session.user && session.user.email
      ? await getUserByEmail(session.user.email)
      : null;
  if (!session) {
    redirect("/");
  }
  return (
    <div className="flex w-full">
      <DashSide
        session={session.user as { name: string; email: string; image: string }}
      />
      <div className="flex-1">
        <NavbarDash
          user={user}
          session={
            session.user as { name: string; email: string; image: string }
          }
        />
        <div className="ml-[20%] xl:px-6 lg:ml-2 p-4 xs:p-2 relative">
          {children}
          {!user && (
            <Link
              href="/dashboard/complete-profile"
              className="fixed  top-20 right-0 text-light bg-red-500 py-2 w-1/2 lg:w-full flex justify-center items-center text-center"
            >
              <AiFillAlert className="text-light mr-3 w-5 h-5" />
              <span>please !complete your account to full access</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
