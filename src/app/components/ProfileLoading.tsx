import Image from "next/image";
import React from "react";

const ProfileLoading = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500" />
      <Image
        src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg"
        className="rounded-full h-28 w-28"
        fill
        alt='loading profile'
      />
    </div>
  );
};

export default ProfileLoading;
