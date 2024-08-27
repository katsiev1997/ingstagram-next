"use server";

import { axiosInstance } from "@/components/shared/api";
import { cookies } from "next/headers";

export async function signIn(identifier: string, password: string) {
    try {
        const { data } = await axiosInstance.post("/auth/local", {
            identifier,
            password,
        });

        cookies().set("token", data.jwt, {
            maxAge: 60 * 60 * 24 * 30,
            httpOnly: true,
        });
        return data.user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to sign in");
    }
}
