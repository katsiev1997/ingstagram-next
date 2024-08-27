"use server";

import { axiosInstance } from "@/components/shared/api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getMe() {
    const token = cookies().get("token")?.value;
    if (!token) {
        redirect("/sign-in");
    }
    const { data } = await axiosInstance.get("/users/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return data;
}
