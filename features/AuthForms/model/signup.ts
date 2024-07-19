import { axiosInstance } from "@/shared/api";
import axios from "axios";

interface ReturnData {
  token: string;
  user: {
    email: string;
    username: string;
    fullName: string;
  }
}

export const fetchSignUp = async (
  email: string,
  username: string,
  fullName: string,
  password: string
):Promise<ReturnData> => {
  try {
    const res = await axiosInstance.post("/auth/local/register", {
      username,
      email,
      password,
      fullName,
    });
    return res.data.user;
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
