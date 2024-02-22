import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { FaGithub } from "react-icons/fa";
import DividerText from "@/components/client/auth/DividerText";
import SignUpForm from "@/components/ui/SignUpForm";
import { RegisterForm } from "@/components/client/auth/RegisterForm";

const SignUp = () => {
  return (
    <section className="bg-gray-50 flex flex-col p-4 sm:p-0 items-center justify-center dark:bg-gray-900 w-full min-h-screen">
      <div>
        <Link
          href="/"
          className="flex items-center mb-2 sm:mb-4 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            src="/favicon.png"
            alt="Precedent logo"
            width="20"
            height="20"
            className=" rounded-sm"
          ></Image>
          Jobit
        </Link>
      </div>
      <div className="dark:bg-gray-700 w-full sm:max-w-[50%] p-4">
        <h2 className="dark:text-white text-lg sm:text-2xl text-center mb-2 sm:mb-4">
          Create an Account
        </h2>
        <div className="grid sm:grid-cols-2 items-center justify-center gap-4 w-full mb-4">
          <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 border-2 dark:hover:bg-gray-800 border-gray-300 dark:bg-transparent dark:border-gray-600 dark:text-white">
            <FcGoogle /> Sign up with Google
          </button>
          <button className="flex items-center justify-center gap-2 p-2 rounded-lg bg-gray-50 border-2 dark:hover:bg-gray-800 border-gray-300 dark:bg-transparent dark:border-gray-600 dark:text-white">
            <FaGithub /> Sign up with Github
          </button>
        </div>
        <DividerText />
        <RegisterForm />
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
