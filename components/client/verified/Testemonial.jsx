/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion, useInView } from "framer-motion";
import { Divider, Rating } from "@mui/material";
import { verified } from "@/data/data";
import Image from "next/image";
import React, { useRef } from "react";
import { MdVerifiedUser } from "react-icons/md";

const variants = {
  hidden: { y: 100, opacity: 0, transition: { staggerChildren: 0.3 } },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};
const value = 4.5;
const Testimonial = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className="overflow-hidden">
      <motion.div
        initial="hidden"
        // animate="visible"
        whileInView="visible"
        animate={isInView && "animation"}
        variants={variants}
        className="grid sm:grid-cols-3 gap-4 mb-6"
      >
        {verified?.map((item, index) => (
          <motion.div
            variants={variants}
            key={index}
            className="dark:text-gray-400"
          >
            <Image
              src={item?.icon}
              alt="Precedent logo"
              width="60"
              height="60"
              className=" rounded-sm"
            ></Image>
            <h2 className="font-semibold my-4 text-[20px] dark:text-gray-300 text-gray-700">
              {item?.title}
            </h2>
            <p>{item?.desc}</p>
          </motion.div>
        ))}
      </motion.div>
      <Divider sx={{ marginY: 8, borderColor: "gray" }} />
      <div className="grid sm:grid-cols-2 gap-6 dark:text-gray-300">
        <div className="w-full">
          <p>
            "After I got Verified, I started winning more projects. My clients
            really appreciated that I went through the extra step to verify
            myself. It removed a lot of the friction."
          </p>
          <h2 className="font-semibold">- Somdelie M.</h2>
        </div>
        <div className="relative p-6 flex gap-3 items-start bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-600">
          <Image
            src="/somdelie.jpg"
            alt="Precedent logo"
            width="100"
            height="100"
            className=" rounded-sm"
          ></Image>

          <div>
            <h2 className="font-semibold flex items-center">
              Somdelie Ndlovu{" "}
              <span className="text-sm font-light">@somdelieNdlovu</span>
              <MdVerifiedUser className="text-green" />
            </h2>
            <Rating readOnly value={value} sx={{ color: "#cd4163" }} />
            <ol className="flex items-center w-full">
              <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                  <svg
                    className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                </span>
              </li>
              <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-800">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-800 shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                  </svg>
                </span>
              </li>
              <li className="flex items-center w-full">
                <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-800 shrink-0">
                  <svg
                    className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                  </svg>
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
