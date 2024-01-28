/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import Testimonial from "@/components/client/verified/Testemonial";
import Testimonial2 from "@/components/client/verified/Testimonial2";
import Testimonial3 from "@/components/client/verified/Testimonial3";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Verified = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div>
      <section className="verified min-h-screen flex px-4 overflow-hidden sm:sm:px-0 flex-col gap-2 justify-center">
        <motion.div
          initial="hidden"
          variants={variants}
          whileInView="visible"
          animate={isInView && "animation"}
          className="sm:max-w-[60%] max-w-[75%] sm:px-16 flex flex-col sm:gap-4 text-white"
        >
          <h2 className="text-3xl sm:text-[48px] leading-7 font-semibold">
            Lift your potential.
          </h2>
          <span className="flex items-center gap-2 sm:gap-4 mt-3 text-[18px] my-2 sm:text-[20px] leading-7">
            <Image
              src="/verified.svg"
              alt="Precedent logo"
              width="20"
              height="20"
              className=" rounded-sm"
            ></Image>
            Get Verified by Freelancer.
          </span>
          <p className="text-gray-400 text-[16px]">
            Lift your profile to the next level by becoming Verified by
            Freelancer. The blue badge lets people know that your account is
            authentic and that you have gone through a process to verify
            identity that includes a video interview. Get Verified today for
            R99.00
          </p>
          <span className="my-4">
            Verified by Freelancer get instant access to:
          </span>
          <ul className="text-gray-300 text-[16px]">
            <li>- Projects worth 20,500.00 USD+</li>
            <li>- Hourly projects over R500 USD</li>
            <li>- Winning more jobs, more easily</li>
          </ul>
          <div className="mt-4 ">
            <button className="bg-roseRed rounded px-4 py-3 hover:bg-rose-800 text-white">
              Get started
            </button>
          </div>
        </motion.div>
      </section>
      <section className="sm:max-w-[90%] mx-auto px-4 sm:sm:px-0 py-6 overflow-hidden">
        <Testimonial />
      </section>
      <section className="sm:max-w-[90%] px-4 sm:sm:px-0 mx-auto py-6">
        <Testimonial2 />
      </section>
      <section className="sm:max-w-[90%] px-4 sm:sm:px-0 mx-auto py-6">
        <Testimonial3 />
      </section>
    </div>
  );
};

export default Verified;
