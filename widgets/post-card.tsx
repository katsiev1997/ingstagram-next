import { AddComment } from "@/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const PostCard = (props: Props) => {
  return (
    <article className="max-w-2xl w-full border border-border rounded-lg m-3">
      <div className="w-full flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-3">
          <Image src="/avatar.png" alt="avatar" width={40} height={40} />
          <Link href="/user/1" className="text-lg font-semibold">
            terrylucas
          </Link>
        </div>
        <Image
          className="cursor-pointer"
          src="/more.svg"
          alt="more"
          width={35}
          height={20}
        />
      </div>
      <Image src="/post-image.png" alt="post-image" width={672} height={576} />
      <div className="px-5 flex items-center justify-between h-14">
        <div className="flex items-center gap-4">
          <Image src="/like.svg" alt="like" width={24} height={24} />
          <Image src="/comment.svg" alt="comment" width={24} height={24} />
          <Image src="/share.svg" alt="share" width={24} height={24} />
        </div>
        <Image src="/save.svg" alt="save" width={24} height={24} />
      </div>
      <div className="px-5">
        <span className="font-semibold">1.064 likes</span>
        <div className="flex">
          <span className="font-semibold">terrylucas</span>
          Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque
          <span className="text-gray">...more</span>
        </div>
        <span className="text-gray">View all 100 comments</span>
        <span className="text-gray font-light uppercase">1 hour ago</span>
        <AddComment />
      </div>
    </article>
  );
};
