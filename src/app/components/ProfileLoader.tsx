import Image from "next/image";
import React from "react";

const ProfileLoader = () => {
  return (
    <div className="flex justify-center items-center ml-8">
      <div className="absolute animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500" />
      <Image
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-10 w-10"
        alt="loading photo"
        width={200}
        height={200}
      />
    </div>
  );
};

export default ProfileLoader;
