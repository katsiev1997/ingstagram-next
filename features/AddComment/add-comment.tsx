import Image from "next/image";
import React from "react";

type Props = {};

export const AddComment = (props: Props) => {
  return (
    <div className="relative border-t border-border h-14 w-full mt-5">
      <Image
        className="absolute top-4 left-3"
        src="/smile.svg"
        alt="smile"
        width={24}
        height={24}
      />
      <input
        className="w-full h-full pl-12 outline-none"
        type="text"
        placeholder="Add a comment"
      />
      <button className="absolute top-4 right-3 text-blue font-semibold">
        Post
      </button>
    </div>
  );
};
