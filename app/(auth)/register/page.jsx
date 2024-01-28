import { Email, Phone } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { FaGithub } from "react-icons/fa";

const SignUp = () => {
  return (
    <section className="bg-gray-50 flex flex-col items-center justify-center dark:bg-gray-900 w-full min-h-screen">
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
      <div className="dark:bg-gray-700 max-w-[70%] p-4">
        <h2 className="dark:text-white text-2xl text-center mb-4">
          Create your Free Account
        </h2>
        <div className="grid sm:grid-cols-2 items-center justify-center gap-4 w-full mb-4">
          <button className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border-2 dark:hover:bg-gray-800 border-gray-300 dark:bg-transparent dark:border-gray-600 dark:text-white">
            <FcGoogle /> Sign up with Google
          </button>
          <button className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 border-2 dark:hover:bg-gray-800 border-gray-300 dark:bg-transparent dark:border-gray-600 dark:text-white">
            <FaGithub /> Sign up with Github
          </button>
        </div>
        <div className="grid grid-cols-3 w-full">
          <hr className="w-[45%]" />
          <span className="flex-1 w-[10%] dark:text-gray-400">or</span>
          <hr className="w-[45%]" />
        </div>
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
              <label
                htmlFor="firstName"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                first Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="firstName"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie Green"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="surname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="surname"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie Green"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone Number
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                  <Phone />
                </span>
                <input
                  type="tel"
                  id="phone"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bonnie Green"
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create an account
          </button>
        </form>
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            class="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
