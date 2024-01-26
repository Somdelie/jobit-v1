/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiRectangleGroup } from "react-icons/hi2";
import { FaMoneyCheckAlt } from "react-icons/fa";

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
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="flex px-4 sm:px-1 flex-col items-center justify-center min-h-screen gap-6">
      <div className="w-90% sm:w-[70%] mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold tracking-[-0.02em] ">
          <span className="text-roseRed">Hire the best freelancers</span> for
          any job, online.
        </h1>
        <p className="mt-6 text-gray-600 md:text-xl">
          Every day we’re helping thousands of companies to hire the best talent
          from our profiled community of 110 + MLN job seekers and via our large
          network of quality affiliate partners.
        </p>
      </div>

      <div className="mx-auto mt-6 text-xs sm:text-base flex items-center justify-center gap-2 sm:gap-4">
        <Link
          href="#"
          className="group flex max-w-fit sm:items-center items-start justify-center space-x-2 rounded-full border border-green bg-green px-5 py-2 text-sm text-white transition-colors hover:bg-white hover:text-gray-700"
        >
          <HiRectangleGroup /> Hire a Freelancer
        </Link>
        <Link
          href="#"
          className="flex max-w-fit sm:items-center items-start justify-center space-x-2 rounded-full border border-green bg-white px-5 py-2 text-sm text-gray-700 shadow-md transition-colors hover:border-roseRed"
        >
          <FaMoneyCheckAlt /> Become a Freelancer
        </Link>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        className="grid grid-cols-2 sm:grid-cols-4 w-full items-center sm:mt-4 sm:px-[50px] justify-center gap-3"
      >
        {list?.map((card, index) => (
          <motion.div
            variants={variants}
            className="overflow-hidden rounded border border-gray-400 h-[100px] bg-white/50 p-4 shadow-md"
            key={index}
          >
            <div className="flex items-center text-center">
              <h1 className="text-roseRed text-lg font-semibold">
                {card?.percent}
              </h1>
              <span className="text-xs text-green">{card?.span}</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">{card?.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* <p className="mt-6 animate-fade-up text-center text-gray-500 md:text-xl">
        We're different to traditional candidate-search platforms. We deliver
        the most relevant, qualified candidates on demand through smart
        programmatic recruiting solutions with our Smart Intuition Technology™.
      </p> */}
    </div>
  );
};

export default Hero;
