"use server";

import { axiosInstance } from "@/components/shared/api";
import { cookies } from "next/headers";

export async function signUp(
    email: string,
    username: string,
    password: string
) {
    try {
        const { data } = await axiosInstance.post("/auth/local/register", {
            email,
            username,
            password,
        });

        cookies().set("token", data.jwt);
        return data.user;
    } catch (error) {
        console.log(error);
        throw new Error('Failed to sign up');
    }
}
