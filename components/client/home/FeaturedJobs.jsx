"use client";
import FeatureCard from "./FeatureCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const availableJobs = [
  {
    id: 1,
    title: "Software Engineer",
    companyName: "Tech Co.",
    location: "San Francisco, CA",
    description:
      "We are seeking a talented Software Engineer to join our team. Must have experience with React, Node.js, and MongoDB.",
    postedBy: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      profileImage: "avatar-3.png",
    },
  },
  {
    id: 2,
    title: "Marketing Specialist",
    companyName: "Marketing Agency",
    location: "New York, NY",
    description:
      "Join our marketing team and help drive our campaigns to success. Experience in social media marketing and content creation preferred.",
    postedBy: {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      profileImage: "avatar-3.png",
    },
  },
  {
    id: 3,
    title: "Frontend Developer",
    companyName: "Web Solutions Inc.",
    location: "Seattle, WA",
    description:
      "We are looking for a Frontend Developer to join our team. Experience with React.js and CSS preprocessors preferred.",
    postedBy: {
      firstName: "Michael",
      lastName: "Johnson",
      email: "michael.johnson@example.com",
      profileImage: "avatar-3.png",
    },
  },
  {
    id: 4,
    title: "HR Manager",
    companyName: "Human Resources Ltd.",
    location: "Chicago, IL",
    description:
      "We are hiring an HR Manager to oversee our human resources department. Experience in employee relations and recruitment required.",
    postedBy: {
      firstName: "Emily",
      lastName: "Williams",
      email: "emily.williams@example.com",
      profileImage: "avatar-3.png",
    },
  },
  {
    id: 5,
    title: "Data Scientist",
    companyName: "Data Analytics Corp.",
    location: "Boston, MA",
    description:
      "We are seeking a skilled Data Scientist to join our team. Must have experience with machine learning algorithms and data analysis techniques.",
    postedBy: {
      firstName: "David",
      lastName: "Brown",
      email: "david.brown@example.com",
      profileImage: "avatar-3.png",
    },
  },
  {
    id: 6,
    title: "UI/UX Designer",
    companyName: "Design Innovations LLC",
    location: "Los Angeles, CA",
    description:
      "Join our creative team as a UI/UX Designer. Experience with Adobe XD and Figma preferred.",
    postedBy: {
      firstName: "Jessica",
      lastName: "Lee",
      email: "jessica.lee@example.com",
      profileImage: "avatar-3.png",
    },
  },
  {
    id: 7,
    title: "Accountant",
    companyName: "Financial Services Inc.",
    location: "Houston, TX",
    description:
      "We are looking for an Accountant to join our finance department. Experience in financial reporting and tax preparation preferred.",
    postedBy: {
      firstName: "William",
      lastName: "Jones",
      email: "william.jones@example.com",
      profileImage: "avatar-3.png",
    },
  },
  {
    id: 8,
    title: "Customer Support Specialist",
    companyName: "Support Solutions Ltd.",
    location: "Denver, CO",
    description:
      "Join our customer support team and provide excellent service to our clients. Experience in helpdesk software and troubleshooting preferred.",
    postedBy: {
      firstName: "Sarah",
      lastName: "Clark",
      email: "sarah.clark@example.com",
      profileImage: "avatar-3.png",
    },
  },
];

const variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
};

const FeaturedJobs = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      initial="hidden"
      variants={variants}
      whileInView="visible"
      animate={isInView && "animation"}
      className=" py-4 w-90% sm:w-[90%] mx-auto px-4 sm:px-0"
    >
      <div className="mt-4">
        <div className="flex justify-between">
          <h3 className="sm:text-3xl text-2xl text-gray-700 dark:text-gray-400 font-semibold">
            Available Jobs
          </h3>{" "}
          <Link href="#" className="text-green flex items-center gap-1">
            see more
            <FaArrowRight />
          </Link>
        </div>
        <p className="text-gray-500 sm:text-xl mt-2 dark:text-gray-400">
          <span className="text-roseRed">Browse through the latest</span> job
          listings from top companies.
        </p>
      </div>
      <div className=" mt-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableJobs?.slice(0, 6).map((job) => (
          <FeatureCard key={job.id} job={job} />
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturedJobs;
