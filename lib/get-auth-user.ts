import { axiosInstance } from "@/components/shared/api";
import axios from "axios";

interface ReturnData {
  token: string;
  userData: {
    id: number;
    email: string;
    username: string;
    fullname: string;
    profileImageUrl: string;
  };
}

export const getAuthUser = async (): Promise<ReturnData> => {
  try {
    const res = await axiosInstance.get("/auth/refresh_token");
    // localStorage.setItem("token", res.data.token);
    return { token: res.data.token, userData: res.data.userData };
  } catch (err) {
    if (axios.isAxiosError(err)) {
      // Обработка ошибки axios
      console.error("An error occurred:", err.response);
    } else {
      // Обработка других ошибок
      console.error("An unexpected error occurred:", err);
    }
    throw err;
  }
};
