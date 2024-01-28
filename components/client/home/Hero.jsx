/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { HiRectangleGroup } from "react-icons/hi2";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useRef } from "react";

const list = [
  {
    percent: 123,
    span: "%",
    desc: "more results per job search vs Keyword Matching",
  },
  {
    percent: 35,
    span: "%",
    desc: "more qualified candidates",
  },
  {
    percent: 12,
    span: "times",
    desc: "higher rate of application",
  },
  {
    percent: 50,
    span: "%",
    desc: "more effectiveness in the recruiting process",
  },
];

const Hero = () => {
  const ref = useRef();
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
  };
  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="flex px-4 sm:px-1 overflow-hidden flex-col items-center justify-center min-h-screen gap-6">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="w-90% sm:w-[70%] mx-auto mt-4"
      >
        <motion.h1
          variants={textVariants}
          className="text-2xl sm:text-3xl dark:text-gray-300 md:text-6xl font-bold tracking-[-0.02em] "
        >
          <span className="text-roseRed">Hire the best freelancers</span> for
          any job, online.
        </motion.h1>
        <motion.p
          variants={textVariants}
          className="mt-8 text-gray-600 dark:text-gray-200 md:text-xl"
        >
          Every day we’re helping thousands of companies to hire the best talent
          from our profiled community of 110 + MLN job seekers and via our large
          network of quality affiliate partners.
        </motion.p>
        <div className="mx-auto mt-6 text-xs sm:w-1/2 sm:text-base grid sm:grid-cols-2 justify-center gap-2 sm:gap-4">
          <Link
            href="#"
            className="group flex whitespace-nowrap sm:items-center items-center justify-center gap-2 rounded-full border border-green bg-green dark:bg-gray-800 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-gray-700"
          >
            <HiRectangleGroup /> Hire a Freelancer
          </Link>
          <Link
            href="#"
            className="flex whitespace-nowrap sm:items-center items-center justify-center gap-2 rounded-full border border-green dark:text-white dark:bg-gray-700 hover:bg-green dark:hover:bg-gray-800 bg-white px-5 py-2 text-sm text-gray-700 shadow-md transition "
          >
            <FaMoneyCheckAlt /> Become a Freelancer
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="grid grid-cols-2 sm:grid-cols-4 w-full items-center sm:mt-6 sm:px-[50px] justify-center gap-3"
      >
        {list?.map((card, index) => (
          <motion.div
            variants={variants}
            className="overflow-hidden rounded border border-gray-400 h-[100px] bg-white/50 dark:bg-gray-800 dark:text-gray-400 transition p-4 shadow-md"
            key={index}
          >
            <div className="flex items-center text-center">
              <h1 className="text-roseRed text-lg font-semibold">
                {card?.percent}
              </h1>
              <span className="text-xs text-green">{card?.span}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {card?.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;
