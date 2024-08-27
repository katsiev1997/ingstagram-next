"use server"

import { axiosInstance } from "@/components/shared/api";
import { cookies } from "next/headers";

export type User = {
  id: number;
  email: string;
  username: string;
  fullname: string;
  avatarUrl: string;
};

export const getUsers = async (username: string): Promise<User[]> => {
  try {
    const token = cookies().get("token")?.value;
    const response = await axiosInstance.get<User[]>(`/users?filters[username][$containsi]=${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data)
    return response.data || [];
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
