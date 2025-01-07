import Image from "next/image";
import React from "react";
interface ImageProps {
  imageUrl: string;
  className: string;
}
const ImageUser = ({ imageUrl, className }: ImageProps) => {
  return (
    <Image
      src={imageUrl}
      width={300}
      height={300}
      alt="user Image"
      className={className}
      loading="lazy"
    />
  );
};

export default ImageUser;
