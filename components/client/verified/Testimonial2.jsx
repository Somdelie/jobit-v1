"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const Testimonial2 = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div className=" dark:text-gray-300 overflow-hidden">
      <motion.div
        initial="hidden"
        variants={variants}
        whileInView="visible"
        animate={isInView && "animation"}
        className="grid sm:grid-cols-2 items-center gap-4 dark:text-gray-300 w-full"
      >
        <div>
          <video controls autoPlay loop={true}>
            <source src="/explainer.mp4" />
          </video>
        </div>
        <div className="grid gap-4">
          <h2 className="sm:text-[32px] text-2xl font-semibold">
            Show clients the person behind the profile!
          </h2>
          <p className="text-[20px]">
            Video bids is a Verified by Freelancer exclusive feature allowing
            you to stand out from the crowd, win more projects and earn more
            money!
          </p>
          <p className="text-[20px]">
            Record a 30 second video where you can show the client why you are
            the perfect freelancer for the job. Your bid will also stand out
            with an animated border, increasing the visibility of your bid.
            Video bids are 25% more likely to be chatted to and awarded!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Testimonial2;
