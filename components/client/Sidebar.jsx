import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const categories = [
  "Web Development",
  "Graphic Design",
  "Data Analysis",
  "Mobile App Development",
  "Content Writing",
  "Video Editing",
  "Social Media Management",
  "UI/UX Design",
  "Construction",
];

const Sidebar = () => {
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
      className="sidebar flex relative flex-col items-center text-gray-700 w-[200px]"
    >
      <div className=" flex gap-6 items-center">
        <button
          className="rounded-full flex items-center justify-center w-[30px] h-[30px] text-xl text-green"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoMenu />
        </button>
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
            className="mr-2 rounded-sm"
          ></Image>
          <Link href="/" className="logo text-green font-semibold">
            Jobit-v1
          </Link>
        </motion.span>
      </div>

      {open && (
        <motion.div
          variants={variants}
          className="flex absolute h-screen top-0 w-full -left-6 flex-col overflow-hidden bg-slate-50"
        >
          <div className="flex items-center px-2 justify-between h-[40px] text-gray-100 bg-gray-700">
            <span>Categories</span>
            <button
              className="rounded-full flex items-center justify-center w-[20px] h-[20px] text-white bg-roseRed"
              onClick={() => setOpen((prev) => !prev)}
            >
              <IoClose />
            </button>
          </div>
          <div className="p-4 gap-2 flex flex-col text-xs">
            {categories?.map((item) => (
              <Link
                href="#"
                key={item}
                className="w-full hover:text-green transition"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Sidebar;
