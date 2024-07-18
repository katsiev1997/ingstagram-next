import { UserCard } from "@/shared/components";
import Image from "next/image";
import React from "react";

type Props = {};

export const SideBar = (props: Props) => {
  return (
    <aside className="w-full">
      <div className="flex justify-between items-center my-8">
        <Image src="/profile_avatar.png" alt="avatar" width={56} height={56} />
        <div className="flex flex-col ">
          <span className="font-semibold">shirleyromero</span>
          <span className="text-gray">Shirley Romero</span>
        </div>
        <button className="text-blue font-semibold">Switch</button>
      </div>
      <div className="flex justify-between">
        <span className="text-gray font-medium">Suggestions For You</span>
        <span className="font-semibold cursor-pointer">See All</span>
      </div>
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </aside>
  );
};
