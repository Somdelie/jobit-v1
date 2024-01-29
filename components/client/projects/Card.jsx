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

const Card = ({ job }) => {
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
      <span className="text-roseRed font-semibold">{job?.jobType}</span>
      <div className="flex gap-2 ">
        <Link href="#">
          <p className="text-[14px]">{job?.desc.slice(0, 65)}...</p>
          <span className="text-xs text-gray-500 flex gap-1 items-center mt-2">
            <LocationCity />
            {job?.user?.address}
          </span>
        </Link>
      </div>
      <Divider sx={{ borderColor: "gray", marginY: 2 }} />
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2 ">
            <span className="">posted by:</span>
            <h1>{job?.user?.firstName}</h1>
          </div>
        </div>
        <button className="bg-roseRed2 dark:bg-gray-900 hover:bg-transparent transition hover:text-roseRed2 hover:border-roseRed2 border border-gray-800 text-gray-100 px-2 py-1 rounded">
          Send Proposal
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
