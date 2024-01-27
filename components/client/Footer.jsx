"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const leftLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Community",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
  },
  {
    title: "Contact us",
    link: "#",
  },
];

const centerLinks = [
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Jobs",
    link: "#",
  },
  {
    title: "Guides",
    link: "#",
  },
  {
    title: "Help center",
    link: "#",
  },
];

const rightLinks = [
  {
    title: "Talent",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
  },
  {
    title: "History",
    link: "#",
  },
  {
    title: "Schedule",
    link: "#",
  },
];

const Footer = () => {
  return (
    <div className="px-[2%] md:px-[4%] mt-4 z-0 py-6 dark:bg-gray-700/50 dark:text-gray-400 bg-white/50 backdrop-blur-xl">
      <footer className="">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Home</h2>
            <ul>
              {leftLinks.map((link, index) => (
                <li
                  className="my-3 text-muted dark:text-gray-500 dark:hover:text-roseRed hover:text-roseRed transition"
                  key={index}
                >
                  <Link href={link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold">Resources</h2>
            <ul>
              {centerLinks.map((link, index) => (
                <li
                  className="my-3 text-muted dark:text-gray-500 hover:text-roseRed transition"
                  key={index}
                >
                  <Link href={link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 basis-[10rem] text-sm">
            <h2 className="text-xl font-semibold">Main Links</h2>
            <ul>
              {rightLinks.map((link, index) => (
                <li
                  className="my-3 text-muted dark:text-gray-500 hover:text-roseRed transition"
                  key={index}
                >
                  <Link href={link}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 basis-[10rem] col-span-2 sm:col-span-1 text-sm text-center">
            <h2 className="text-xl font-semibold">
              Subscribe to our Newsletter
            </h2>

            <div className="flex-align-center justify-center my-3">
              <form action="#">
                <div className="items-center mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div className="relative w-full">
                    <label
                      htmlFor="email"
                      className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Email address
                    </label>
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    </div>
                    <input
                      className="block p-1 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your email"
                      type="email"
                      id="email"
                      required
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="py-1 px-2 w-full text-sm font-medium text-center text-white rounded border cursor-pointer bg-roseRed border-roseRed sm:rounded-none sm:rounded-r-lg hover:opacity-75 focus:ring-4 focus:ring-green "
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
                <div className="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300">
                  We care about the protection of your data.{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </div>
              </form>
            </div>
            <div className="flex items-center justify-center gap-5 my-6">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="attribution pt-2 border-t-2 flex items-center justify-center border-t-gray-300 dark:">
        <p className="text-center  text-muted pb-2">
          Created By <span className="text-roseRed">Somdelie Graphics</span> |
          All Rights Reserved
        </p>
      </section>
    </div>
  );
};

export default Footer;
