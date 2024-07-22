import { axiosInstance } from "@/shared/api";

export type User = {
  id: number;
  email: string;
  username: string;
  fullname: string;
  profileImageUrl: string;
};

export const getUsers = async (username: string): Promise<User[]> => {
  try {
    const token = localStorage.getItem("token");
    const response = await axiosInstance.get<User[]>(`/users/get/${username}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data || [];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
