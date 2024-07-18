"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

type Props = {};

export const SignInForm = ({}: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };

  const inputClassName =
    "pl-4 w-full h-10 border border-border rounded outline-none focus:border-blue ";
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col items-center gap-3 max-w-sm w-full border border-border rounded-lg p-5"
    >
      <Image src="/logo.png" alt="logo" width={103} height={29} />
      <p className="text-center text-gray">
        Войдите, чтобы смотреть фото и видео своих друзей
      </p>
      <input
        className={inputClassName}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
        placeholder="Адрес электронной почты"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
        className={inputClassName}
        type="password"
        placeholder="Пароль"
      />

      <button
        type="submit"
        className="w-full h-10 duration-100 transition-all text-blue hover:text-white font-medium border border-blue hover:bg-blue rounded"
      >
        Войти
      </button>
    </form>
  );
};
