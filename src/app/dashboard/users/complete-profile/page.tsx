import { auth } from "@/auth";
import CompleteUser from "@/src/app/components/dashboardUX/CompleteUser";
import React from "react";

const page = async () => {
  const session = await auth();
  return (
    <div className="py-12">
      {session && (
        <CompleteUser
          session={
            session.user as { name: string; email: string; image: string }
          }
        />
      )}
    </div>
  );
};

export default page;
