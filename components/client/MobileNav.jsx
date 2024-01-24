import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import { Avatar } from "@mui/material";

const MobileNav = ({ navLinks }) => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 20px 20px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 20,
        damping: 40,
      },
    },
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="sm:hidden block bg-gray-700 h-[40px] w-[100%] items-center fixed left-0 top-0"
    >
      <div className=" flex gap-6 items-center">
        <button
          className="rounded-full flex items-center justify-center w-[30px] h-[30px] text-xl text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoMenu />
        </button>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="logo text-green font-semibold">
            Logo
          </Link>
        </motion.span>
      </div>

      {open && (
        <motion.div
          variants={variants}
          className="flex w-[80%] h-screen absolute top-0 left-0 flex-col overflow-hidden bg-gray-700"
        >
          <div className="flex items-center border-b px-4 justify-between h-[40px] text-gray-100">
            <Link href="/" className="logo">
              Logo
            </Link>
            <button
              className="rounded-full flex items-center justify-center w-[20px] h-[20px] text-white bg-roseRed"
              onClick={() => setOpen((prev) => !prev)}
            >
              <IoClose />
            </button>
          </div>

          <div className="grid items-center mt-4 gap-2 px-6 capitalize  font-semibold text-gray-500">
            {navLinks?.map((link, index) => (
              <Link href={link.link} key={index}>
                {link?.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default MobileNav;
