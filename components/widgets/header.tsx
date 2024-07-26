"use client";

import { SearchInput } from "@/components/features";
import { getAuthUser } from "@/lib/get-auth-user";
import { useAuthStore } from "@/stores";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useCallback } from "react";

type Props = {};

export const Header = (props: Props) => {
  const { auth } = useAuthStore();
  const router = useRouter();

  const getUserData = useCallback(async () => {
    try {
      const res = await getAuthUser();
      if (!res.userData) {
        router.push("/sign-in");
        return null;
      }
      return res;
    } catch (error) {
      console.error("Failed to get user data:", error);
      router.push("/sign-in");
      return null;
    }
  }, [router]);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("token");
      if (!accessToken) {
        router.push("/sign-in");
        return;
      }

      const userData = await getUserData();
      if (userData) {
        const { token, userData: user } = userData;
        auth(token, user);
      }
    };

    checkAuth();
  }, [getUserData, auth, router]);
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
          <Link href="/add-post">
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
          <Link href="/profile">
            <Image src="/profile-s.png" alt="profile-s" width={22} height={22} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
