import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard = ({ job }) => {
  const { title, companyName, location, description, postedBy } = job;
  return (
    <Link href="#">
      {" "}
      <div className=" border-2 border-transparent transition hover:border-gray-300 dark:hover:border-gray-700 rounded-lg p-2 hover:border-2">
        <div className="">
          <div className="flex items-center gap-4">
            <Avatar
              src={postedBy.profileImage}
              alt={`${postedBy.firstName} ${postedBy.lastName}`}
            />

            <p className="text-gray-600 text-[14px] font-light">
              Posted by: {postedBy.firstName} {postedBy.lastName}
            </p>
          </div>
          <div className="mt-2">
            <h3
              href="#"
              className="text-base text-gray-700 dark:text-gray-400 font-semibold"
            >
              {title}
            </h3>
            <p className="text-gray-500 ">
              {description.length > 70
                ? `${description.slice(0, 70)}...`
                : description}
            </p>
          </div>
        </div>
        <div className="flex gap-1 mt-1 text-xs items-center">
          <Image
            src="/mosque.png"
            alt="Precedent logo"
            width="15"
            height="15"
            className=" rounded-sm"
          ></Image>{" "}
          <p className="text-blue-400">
            {`${(companyName + " - " + location).slice(0, 27)}${
              (companyName + " - " + location).length > 27 ? "..." : ""
            }`}
          </p>
          {/* <button className="bg-green hover:bg-transparent text-white hover:text-green border-2 border-green py-2 px-4 rounded-md">
        Apply Now
      </button> */}
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
