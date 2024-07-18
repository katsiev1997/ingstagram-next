"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type Props = {};

export const SignUpForm = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, username, fullName, password, confirmPassword);
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
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Адрес электронной почты"
      />
      <input
        value={fullName}
        onChange={(e) => setFullName(e.currentTarget.value)}
        className={inputClassName}
        type="text"
        placeholder="Имя и фамилия"
      />
      <input
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value)}
        className={inputClassName}
        type="text"
        placeholder="Имя пользователя"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        className={inputClassName}
        type="password"
        placeholder="Пароль"
      />
      <input
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.currentTarget.value)}
        className={inputClassName}
        type="password"
        placeholder="Подтвердите пароль"
      />
      <button type="submit" className={buttonClassName}>
        Зарегистрироваться
      </button>
    </form>
  );
};
