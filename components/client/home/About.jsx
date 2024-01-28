"use client";
import { Avatar, Rating } from "@mui/material";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";

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
const data2 = [
  {
    title: "The best talent",
    disc: "Discover reliable professionals by exploring their portfolios and immersing yourself in the feedback shared on their profiles.",
  },
  {
    title: "Fast bids",
    disc: "Get quick, no-obligation quotes from skilled freelancers. 80% of jobs receive bids within 60 seconds. Your idea is just moments from reality.",
  },
  {
    title: "Quality work",
    disc: "With Freelancer's talent pool of over 60 million professionals at your fingertips, you'll find quality talent to get what you need done.",
  },
  {
    title: "Be in control",
    disc: "Stay in the loop while on the move. Chat with your freelancers and get real time updates with our mobile app. Anytime, anywhere.",
  },
  // Add more objects as needed
];

const freelancers = [
  {
    firstName: "John",
    surname: "Doe",
    profession: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    rating: 4.8,
  },
  {
    firstName: "Jane",
    surname: "Smith",
    profession: "Graphic Designer",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Sketch"],
    rating: 4.5,
  },
  {
    firstName: "Michael",
    surname: "Johnson",
    profession: "Copywriter",
    skills: ["Copywriting", "Content Marketing", "SEO"],
    rating: 4.7,
  },
  {
    firstName: "Sarah",
    surname: "Lee",
    profession: "UI/UX Designer",
    skills: [
      "User Interface Design",
      "User Experience Design",
      "Figma",
      "Sketch",
    ],
    rating: 4.9,
  },
  // Add more freelancers as needed
];

const About = () => {
  const ref = useRef();

  const variants = {
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
    hidden: { opacity: 0 },
  };
  const variant1 = {
    initial: {
      x: 500,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        taggerChildren: 0.1,
      },
    },
  };
  const variant2 = {
    initial: {
      x: -300,
      opacity: 1,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        taggerChildren: 0.1,
      },
    },
  };
  const variants4 = {
    hidden: { y: 100, opacity: 0, transition: { staggerChildren: 0.3 } },
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="py-6 dark:text-gray-400 overflow-hidden">
      <motion.div
        className="grid gap-4 py-6 sm:grid-cols-2"
        variants={variants}
        initial="initial"
        whileInView="visible"
        animate={isInView && "animation"}
      >
        <motion.div className="p-4 sm:p-0 overflow-hidden">
          <h2 className="sm:text-4xl dark:text-gray-200 text-2xl font-semibold">
            <span className="text-roseRed">Make it real</span> with Freelancer
          </h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            animate={isInView && "animation"}
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
        </motion.div>
        <motion.div
          initial="hidden"
          variants={variants4}
          whileInView="visible"
          animate={isInView && "animation"}
          className="relative mx-auto border-gray-300 dark:border-gray-900 mt-4 sm:mt-0 -z-10 bg-gray-300 dark:bg-gray-900 border-[14px] rounded-[2.5rem] h-[600px] sm:h-[300px] w-[300px] sm:w-[600px]"
        >
          <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-900 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-900 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
          <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-900 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
          <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-900 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
          <div className="rounded-[2rem] overflow-hidden h-[572px] w-[272px] sm:h-[272px] sm:w-[572px] bg-white dark:bg-gray-700">
            <div className="h-[272px] w-[100%] sm:w-[572px] p-4 ">
              <h1 className="text-center mt-3 text-lg font-semibold text-roseRed">
                How It Works
              </h1>
              <div className="grid md:grid-cols-3 pt-6 dark:text-gray-300 sm:pt-0 mt-4 sm:mt-2 items-start justify-center gap-3 w-full sm:h-[80%]">
                {data?.map((item, index) => (
                  <div
                    key={index}
                    className="border-2 dark:border-slate-900 p-2 h-full w-[100%]"
                  >
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
        </motion.div>
      </motion.div>
      <div className="p-4 sm:p-0 overflow-hidden">
        <div className="grid sm:grid-cols-2 gap-6 mt-6">
          <div className="">
            <div className="flex justify-between">
              <h3 className="sm:text-3xl text-lg text-gray-700 dark:text-gray-300 font-semibold">
                Top Rated Freelancers
              </h3>{" "}
              <Link href="#" className="text-green flex items-center gap-1">
                see more
                <FaArrowRight />
              </Link>
            </div>
            <motion.div
              variants={variant2}
              initial="initial"
              whileInView="animate"
              animate={isInView && "animation"}
              className="grid sm:grid-cols-2 mt-3 gap-3"
            >
              {freelancers?.map((user, index) => (
                <motion.div
                  className="w-full flex flex-col bg-gray-300 dark:bg-gray-700 p-3 shadow"
                  key={index}
                >
                  <div className="flex items-center border-b border-gray-400 dark:border-gray-600 py-2 justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>{user?.firstName.charAt(0)}</Avatar>
                      <h3 className="text-lg flex items-center gap-3 text-gray-700 dark:text-gray-200 font-semibold">
                        {user?.firstName} {user?.surname.charAt(0)}
                      </h3>
                    </div>
                    <p className="text-sm">{user?.profession}</p>
                  </div>
                  <div className="flex flex-col flex-grow mt-2 text-sm ">
                    {user?.skills.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        className="flex gap-2 text-gray-400 items-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-green"></span>
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="flex items-center flex-grow mt-2 text-sm justify-between">
                    <Rating readOnly value={user?.rating} className="mui" />
                    <Link
                      href="#"
                      className="bg-roseRed2 dark:bg-gray-950 hover:bg-transparent transition hover:text-roseRed2 hover:border-roseRed2 border text-gray-100 px-2 py-1 rounded"
                    >
                      Hire me!
                    </Link>
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            variants={variants4}
            whileInView="visible"
            animate={isInView && "animation"}
            className="grid sm:grid-cols-2 gap-4 overflow-hidden"
          >
            {data2?.map((item, index) => (
              <motion.div className="w-full" key={index}>
                <h3 className="text-lg text-roseRed font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm">{item.disc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
