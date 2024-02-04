"use client";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";

const MobileNav = ({ navLinks, user, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsOpen(true);
  };
  return (
    <>
      <button
        onClick={handleMenuOpen}
        className={isOpen ? "hidden md:hidden" : "block md:hidden"}
      >
        <MenuIcon />
      </button>

      <div
        className={
          !isOpen
            ? " block items-center -translate-x-full dark:text-slate-100 text-gray-600 fixed left-0 top-0 h-screen w-[80%] bg-white dark:bg-darkCard overflow-y-auto transition-transform"
            : "block items-center transition shadow bg-white  dark:text-gray-100 text-gray-600 fixed left-0 top-0 h-screen w-[80%] dark:bg-darkCard overflow-y-auto"
        }
      >
        <div className="flex items-center p-4 justify-between bg-white dark:bg-darkCard border-b border-gray-200 dark:border-gray-600">
          <Link href="/" className="flex items-center">
            <Image
              src="/favicon.png"
              alt="Precedent logo"
              width="20"
              height="20"
              className=" rounded-sm"
            ></Image>
            <h1 className="dark:text-white text-[26px] font-semibold">Jobit</h1>
          </Link>
          <button
            className="bg-roseRed w-8 h-8 rounded-full p-2 flex text-white items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
        </div>
        <div className="p-6 flex flex-col gap-4 text-[20px]">
          {navLinks?.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className={
                link.link === pathname
                  ? "flex space-x-3 items-center border-roseRed text-roseRed transition "
                  : "flex space-x-3 items-center hover:text-roseRed transition dark:text-slate-100 text-gray-600"
              }
              onClick={() => setIsOpen(false)}
            >
              <span>{link.title}</span>
            </Link>
          ))}
          <Link
            href="/freelancers"
            className={
              pathname === "/freelancers"
                ? "flex space-x-3 items-center border-roseRed text-roseRed transition "
                : "flex space-x-3 items-center hover:text-roseRed transition dark:text-slate-100 text-gray-600"
            }
            onClick={() => setIsOpen(false)}
          >
            Freelancers
          </Link>
          <Link
            href="/projects"
            className={
              pathname === "/projects"
                ? "flex space-x-3 items-center border-roseRed text-roseRed transition "
                : "flex space-x-3 items-center hover:text-roseRed transition dark:text-slate-100 text-gray-600"
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <div>
            <Link
              href="/projects/create"
              onClick={() => setIsOpen(false)}
              className="px-2 py-1 bg-roseRed hover:bg-rose-800 rounded text-gray-200"
            >
              Post a Project
            </Link>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default MobileNav;
