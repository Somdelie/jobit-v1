import DividerText from "@/components/client/auth/DividerText";
import { Email, Lock, Phone } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <section className="bg-gray-50 flex flex-col p-4 sm:p-0 items-center justify-center dark:bg-gray-900 w-full min-h-screen">
      <div>
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
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
        <h2 className="dark:text-white text-lg sm:text-2xl text-center mb-4">
          Log In to your Account
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
        <form className="w-full flex flex-col gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Email
              </label>
              <div class="flex">
                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <Email />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <Lock />
                </span>
                <input
                  type="password"
                  id="password"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign in to your account
          </button>
        </form>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
          Don’t have an account yet?{" "}
          <Link
            href="/register"
            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
