"use client";
import { Avatar } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const listItems = [
  "World's largest freelance marketplace",
  "Any job you can possibly think of",
  "Save up to 90% & get quotes for free",
  "Pay only when you're 100% happy",
];

const data = [
  {
    icon: "/post-a-project.svg",
    title: "Any sized project",
    disc: "Get any job done. From small one-off tasks to large, multi-stage projects.",
  },
  {
    icon: "/make-money.svg",
    title: "Flexible payment terms",
    disc: "Pay your freelancers a fixed price or by the hour. All secured by the Milestone Payments system.",
  },
  {
    icon: "/skills.svg",
    title: "Diverse talent",
    disc: "Choose from expert freelancers in over 1800 skill sets, from all around the globe.",
  },
  // Add more objects as needed
];

const About = () => {
  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="grid gap-4 pt-6 sm:grid-cols-2">
      <div className="p-4 sm:p-0 ">
        {/* <h1 className="sm:text-[44px] text-2xl font-semibold">
          Make it real with Freelancer
        </h1> */}
        <h2 className="sm:text-4xl text-2xl font-semibold">
          Make it real with Freelancer
        </h2>
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={variants}
          className=" mt-4 "
        >
          {listItems?.map((item, index) => (
            <motion.li
              variants={variants}
              className="flex items-center gap-2 mt-2"
              key={index}
            >
              <span className="w-4 h-4 rounded-full bg-roseRed"></span>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className="relative mx-auto border-gray-300 dark:border-gray-800 mt-4 sm:mt-0 -z-10 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] sm:h-[300px] w-[300px] sm:w-[600px]">
        <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
        <div className="rounded-[2rem] overflow-hidden h-[572px] w-[272px] sm:h-[272px] sm:w-[572px] bg-white dark:bg-gray-800">
          <div className="dark:hidden h-[272px] w-[100%] sm:w-[572px] p-4 ">
            <h1 className="text-center mt-3 text-lg font-semibold text-roseRed">
              How It Works
            </h1>
            <div className="grid md:grid-cols-3 pt-6 sm:pt-0 mt-4 sm:mt-2 items-start justify-center gap-3 w-full sm:h-[80%]">
              {data?.map((item, index) => (
                <div key={index} className="border-2 p-2 h-full w-[100%]">
                  <Image
                    src={item?.icon}
                    alt="Precedent logo"
                    width={40}
                    height={40}
                    className=""
                  />
                  <span>{item?.title}</span>
                  <p className="text-xs">{item?.disc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
