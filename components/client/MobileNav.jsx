import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const MobileNav = ({ navLinks }) => {
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
          className="flex w-[80%] h-screen absolute top-0 left-0 flex-col overflow-hidden bg-gray-700"
          animate={{
            clipPath: open
              ? "circle(1200px at 20px 20px)"
              : "circle(30px at 40px 40px)",
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
    </div>
  );
};

export default MobileNav;
