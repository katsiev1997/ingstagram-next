import { SearchInput } from "@/features";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="w-full border-b border-border h-14 flex justify-center">
      <div className="max-w-[1080px] w-full h-full flex items-center gap-3 justify-between px-3">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={103} height={29} />
        </Link>
        <SearchInput />
        <nav className="flex gap-5">
          <Link href="/">
            <Image src="/home.svg" alt="home" width={22} height={22} />
          </Link>
          <Link href="/messenger">
            <Image src="/direct.svg" alt="direct" width={22} height={22} />
          </Link>
          <Link href="/add_post">
            <Image src="/add_post.svg" alt="add_post" width={22} height={22} />
          </Link>
          <Link href="/explore">
            <Image src="/explore.svg" alt="explore" width={22} height={22} />
          </Link>
          <Link href="/">
            <Image
              src="/notifications.svg"
              alt="notifications"
              width={22}
              height={22}
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};
