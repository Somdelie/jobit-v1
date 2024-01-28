import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import UserMenu from "./UserMenu";
import Image from "next/image";
import { Logout } from "@mui/icons-material";

const MobileNav = ({ navLinks, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="flex gap-6 items-center">
        <button
          className="rounded-full flex items-center justify-center w-[30px] h-[30px] text-xl text-green"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoMenu />
        </button>
      </div>
      {open && (
        <motion.div
          className="flex w-[80%] h-screen absolute top-0 left-0 flex-col overflow-hidden bg-white dark:bg-gray-700"
          animate={{
            clipPath: open
              ? "circle(1200px at 20px 20px)"
              : "circle(30px at 40px 40px)",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="flex items-center border-b px-4 justify-between h-[40px] text-gray-100">
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
            <ThemeSwitcher />
            <button
              className="rounded-full flex items-center justify-center w-[20px] h-[20px] text-white bg-roseRed"
              onClick={() => setOpen((prev) => !prev)}
            >
              <IoClose />
            </button>
          </div>

          <div className="grid items-center mt-4 gap-2 px-6 capitalize  font-semibold text-gray-500">
            {navLinks?.map((link, index) => (
              <Link href={link.link} key={index} className="hover:text-roseRed">
                {link?.title}
              </Link>
            ))}
            {user ? (
              <Link href="verified" className="hover:text-roseRed ">
                Get Verified
              </Link>
            ) : (
              ""
            )}
          </div>
          {user ? (
            <div className="mt-4 px-6 flex items-center">
              <Link
                href="#"
                className="px-2 py-1 bg-roseRed hover:bg-rose-800 rounded text-gray-200"
              >
                Post a Project
              </Link>
              <button className="px-5 flex items-center gap-4">
                <Logout fontSize="small" />
                Logout
              </button>
            </div>
          ) : (
            ""
          )}
        </motion.div>
      )}
    </div>
  );
};

export default MobileNav;
