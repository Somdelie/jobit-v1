"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const data = [
  {
    title: "Post your job",
    disc: "It's free and easy! Get lots of competitive bids that suit your budget in minutes. Start making your dreams reality.",
  },
  {
    title: "Choose freelancers",
    disc: "No job is too big or complex. We've got freelancers for jobs of any size or budget, across 2700+ skills. Let our talent bring your ideas to life.",
  },
  {
    title: "Pay safely",
    disc: "Only pay for work when you are 100% satisfied with the outcome. Our milestone payment system protects you every step of the way.",
  },
  {
    title: "We're here to help",
    disc: "Your time is precious. Let our team of expert recruiters and co-pilots save you time finding talent, even managing your job if needed.",
  },
  // Add more objects as needed
];

const Featured = () => {
  return (
    <div className="border-t mt-3 w-[90%] mx-auto py-6 border-gray-300">
      <h2 className="sm:text-5xl text-white text-2xl font-semibold grid">
        Tap into a<span className="text-roseRed">global talent network</span>
      </h2>
      <div className="grid mt-3 sm:grid-cols-2 gap-4">
        <div>
          <div className="grid mt-4 sm:mt-6 sm:grid-cols-2 gap-4">
            {data?.map((item, index) => (
              <motion.div className="w-full mt-2" key={index}>
                <h3 className="text-xl sm:text-2xl text-[#F7F8F9] font-semibold">
                  {item.title}
                </h3>
                <p className="text-[16px] text-gray-300 mt-4">{item.disc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <Image width={500} height={500} src="/card.webp" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
