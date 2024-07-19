"use client";

import { UserCard } from "@/shared/components";
import { useAuthStore } from "@/stores";
import Image from "next/image";
import React from "react";

type Props = {};

export const SideBar = (props: Props) => {
  const username = useAuthStore((state) => state.username);
  const fullName = useAuthStore((state) => state.fullName);
  return (
    <aside className="w-full">
      <div className="flex justify-between items-center my-8">
        <Image src="/profile_avatar.png" alt="avatar" width={56} height={56} />
        <div className="flex flex-col ">
          <span className="font-semibold">{username}</span>
          <span className="text-gray">{fullName}</span>
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
      <p className="text-gray text-sm mt-5 cursor-pointer">
        About · Press · API · Jobs · Privacy · Terms · Locations · Top Accounts ·
        Hashtags · Language ·
      </p>
    </aside>
  );
};
