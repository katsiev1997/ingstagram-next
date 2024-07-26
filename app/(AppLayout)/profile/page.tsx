import { ProfileData } from "@/components/shared/components";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProfilePage() {
  const divClass =
    "flex items-center gap-2 h-full hover:-translate-y-0.5 hover:border-t duration-300 transition-all hover:border-black cursor-pointer";
  return (
    <div className="max-w-[1080px] w-full mx-auto">
      <ProfileData />
      <div className="w-96 flex items-center gap-14 h-14 mx-auto">
        <div className={divClass}>
          <Image src="/posts-icon.svg" alt="posts-icon" width={12} height={12} />
          <span className="uppercase font-semibold">posts</span>
        </div>
        <div className={divClass}>
          <Image src="/saved-icon.svg" alt="saved-icon" width={12} height={12} />
          <span className="uppercase font-semibold">saved</span>
        </div>
        <div className={divClass}>
          <Image src="/tagged-icon.svg" alt="tagged-icon" width={12} height={12} />
          <span className="uppercase font-semibold">tagged</span>
        </div>
      </div>
      <div className="w-full flex justify-between">
        <Image src="/profile-images.png" alt="image" width={380} height={380} />
        <div className="w-full h-96 flex flex-col gap-3 justify-center items-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold">
              Start capturing and sharing your moments.
            </h3>
            <p>Get the app to share your photo or video</p>
          </div>
          <div className="flex gap-3 justify-center w-full">
            <Link href="#">
              <Image
                src="/app-store.png"
                alt="google-play"
                width={134}
                height={40}
              />
            </Link>
            <Link href="#">
              <Image
                src="/google-play.png"
                alt="google-play"
                width={136}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
