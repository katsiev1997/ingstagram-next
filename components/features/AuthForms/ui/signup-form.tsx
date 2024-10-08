"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signUp } from "@/actions/sign-up";

type Props = {};

export const SignUpForm = ({}: Props) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Пароль должен содержать не менее 6 символов");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Пароли не совпадают");
      return;
    }

    const userPromise = signUp(email, username, password);

    await toast.promise(userPromise, {
      loading: "Регистрация...",
      success: "Вы успешно зарегистрировались",
      error: "Ошибка при регистрации",
    });

    const user = await userPromise;
    console.log(user)
    if (user) {
      router.push("/");
    }
  };

  const inputClassName =
    "pl-4 w-full h-10 border border-border rounded outline-none focus:border-blue ";
  const buttonClassName =
    "w-full h-10 duration-100 transition-all text-blue hover:text-white font-medium border border-blue hover:bg-blue rounded";
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-3 max-w-sm w-full border border-border rounded-lg p-5"
    >
      <Image src="/logo.png" alt="logo" width={103} height={29} />
      <p className="text-center text-gray">
        Зарегистрируйтесь, чтобы смотреть фото и видео своих друзей
      </p>
      <input
        className={inputClassName}
        type="email"
        autoComplete="current-password"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Адрес электронной почты"
      />
      <input
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        className={inputClassName}
        type="text"
        autoComplete="current-password"
        placeholder="Имя пользователя"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        className={inputClassName}
        type="password"
        autoComplete="current-password"
        placeholder="Пароль"
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        className={inputClassName}
        type="password"
        autoComplete="current-password"
        placeholder="Подтвердите пароль"
      />
      <button type="submit" className={buttonClassName}>
        Зарегистрироваться
      </button>
    </form>
  );
};
