import { SignInForm } from "@/features";
import Link from "next/link";
import React from "react";

function SignInPage() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div>
        <SignInForm />
        <div className="text-center w-full max-w-sm h-14 text-gray border border-border mt-5 rounded flex justify-center items-center">
          Нет аккаунта?{" "}
          <Link href="/sign-up" className="text-blue ml-4">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
