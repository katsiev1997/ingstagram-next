import { axiosInstance } from "@/shared/api";
import axios from "axios";

interface UserData {
  id: number;
  email: string;
  username: string;
  fullName: string;
  profileImageUrl: string;
}

interface ReturnData {
  token: string;
  userData: UserData;
}

export const fetchSignIn = async (
  email: string,
  password: string
): Promise<ReturnData> => {
  try {
    // Отправляем POST-запрос на сервер для авторизации
    const response = await axiosInstance.post<ReturnData>("/auth/login", {
      email,
      password,
    });

    // Достаем токен и данные пользователя из ответа
    const { token, userData } = response.data;

    // Сохраняем токен в localStorage
    localStorage.setItem("token", token);

    // Возвращаем данные
    return {
      token,
      userData,
    };
  } catch (error) {
    // Обработка ошибок
    if (axios.isAxiosError(error)) {
      // Если это ошибка axios
      console.error(
        "An error occurred during sign-in:",
        error.response?.data || error.message
      );
      throw new Error(
        error.response?.data.message || "An error occurred during sign-in"
      );
    } else {
      // Если это другая ошибка
      console.error("An unexpected error occurred:", error);
      throw new Error("An unexpected error occurred during sign-in");
    }
  }
};
