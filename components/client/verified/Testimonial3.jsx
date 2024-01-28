"use client";
import Link from "next/link";
import React from "react";
import { FcProcess } from "react-icons/fc";
import { IoCheckmarkSharp, IoFingerPrint } from "react-icons/io5";
import { PiClockCountdownFill } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Testimonial3 = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="dark:text-gray-300 grid gap-4 overflow-hidden">
      <h2 className="text-xl sm:text-4xl mb-2 font-semibold">
        Getting started is easy
      </h2>

      <motion.div
        initial="hidden"
        variants={variants}
        whileInView="visible"
        animate={isInView && "animation"}
        className="mt-6 grid sm:grid-cols-3 gap-4"
      >
        <div className="">
          <div className="relative w-[48px] text-green">
            <IoFingerPrint className="text-5xl" />
            <div className="absolute flex items-center rounded-full bg-white -top-1 -right-1 justify-center border-2 border-green h-6 w-6">
              <IoCheckmarkSharp className="text-green" />
            </div>
          </div>
          <h3 className="my-4 text-lg font-semibold">What is required?</h3>
          <p>To apply you must have an up to date profile and be:</p>
          <ul className="grid gap-1">
            <li>• Email verified</li>
            <li>• Phone verified</li>
            <li>• Payment verified</li>
            <li>• KYC verified</li>
          </ul>
        </div>
        <div className="">
          <PiClockCountdownFill className="text-5xl text-green" />
          <h3 className="my-4 text-lg font-semibold ">
            How long does it take?
          </h3>
          <p>
            After applying our agents will begin reviewing your application.
            This process is usually complete within 1 to 2 business days.
          </p>
        </div>
        <div className="">
          <FcProcess className="text-5xl text-green" />
          <h1 className="my-4 text-lg font-semibold">What is the process?</h1>
          <p>
            After your application has been reviewed, one of our agents will
            contact you to schedule a video interview. If your interview is
            successful then your new blue Verified badge will be activated.
          </p>
        </div>
      </motion.div>
      <span className=" pt-4">
        The R99.00 application fee is non-refundable, even if you do not end up
        meeting the requirements to be a Verified Freelancer. The Verified
        status is subject to renewal upon KYC expiration. For more information,
        please refer to our{" "}
        <Link href="#" className="text-blue-500">
          FAQ.
        </Link>
      </span>
    </div>
  );
};

export default Testimonial3;
