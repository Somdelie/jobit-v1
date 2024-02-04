"use client";
import { LocationCity } from "@mui/icons-material";
import { Divider, Rating } from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Card = ({ user }) => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      initial="hidden"
      variants={variants}
      whileInView="visible"
      animate={isInView && "animation"}
      className=" bg-white dark:bg-gray-700 p-4 dark:text-gray-400"
    >
      <div className="flex gap-2 ">
        <div>
          {" "}
          <Image
            src={user?.profilePhoto}
            alt="Precedent logo"
            width="100"
            height="100"
            className=" rounded-sm"
          ></Image>
        </div>
        <Link href="#">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-2 ">
              <h1>{user?.firstName}</h1>
              <h1>{user?.surname}</h1>
            </div>
            <span className="dark:text-gray-100 font-semibold">
              {user?.jobType}
            </span>
          </div>
          <span className="text-xs text-gray-500 flex gap-1 items-start mt-2">
            <LocationCity />
            {user?.address}
          </span>
          <p className="text-[14px]">{user?.desc.slice(0, 65)}...</p>
        </Link>
      </div>
      <Divider sx={{ borderColor: "gray", marginY: 2 }} />
      <div className="flex items-center justify-between">
        <Rating value={user?.ratings} readOnly />
        <button className="bg-roseRed2 dark:bg-gray-900 hover:bg-transparent transition hover:text-roseRed2 hover:border-roseRed2 border border-gray-800 text-gray-100 px-2 py-1 rounded">
          Request Quote
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
