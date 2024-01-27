"use client";
import Link from "next/link";
import "./home.css";
import { navLinks } from "@/data/data";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import useScroll from "@/lib/UseScroll";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import { FaUserCircle } from "react-icons/fa";
import UserMenu from "./UserMenu";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState({
    firstName: "cautious",
  });

  const scrolled = useScroll(50);

  const categories = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 0.2 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 text-gray-700 z-30
            dark:bg-gray-700/50 dark:text-gray-400 bg-white/50 backdrop-blur-xl`}
    >
      {/* lg devices */}
      <div className="">
        <div className="flex relative justify-between items-center px-6 py-1 h-[50px]">
          {/* sm devices */}
          <div className="flex items-center gap-3">
            <div className="z-30 sm:hidden block">
              <MobileNav navLinks={navLinks} />
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1"
            >
              <Image
                src="/favicon.png"
                alt="Precedent logo"
                width="20"
                height="20"
                className=" rounded-sm"
              ></Image>
              <Link href="/" className="logo text-green font-semibold">
                Jobit-v1
              </Link>
            </motion.span>
          </div>
          <div className=" hidden sm:flex items-center gap-2 capitalize text-gray-600 dark:text-gray-400">
            {navLinks?.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="hover:bg-roseRed hover:text-white px-2 rounded-full"
              >
                {link?.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="icons">
              <ThemeSwitcher />
            </div>
            <div className="flex items-center gap-4">
              {user ? (
                <div className="flex items-center gap-4">
                  <Link
                    href="#"
                    className="px-2 py-1 bg-roseRed hover:bg-rose-800 rounded text-gray-200"
                  >
                    Post a Project
                  </Link>
                  <UserMenu user={user} />
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <Link href="#" className="font-semibold">
                    Log In
                  </Link>
                  <Link
                    href="#"
                    className="px-2 py-1 bg-roseRed hover:bg-rose-800 rounded text-gray-200"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
