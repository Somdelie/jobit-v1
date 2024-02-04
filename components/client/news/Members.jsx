/* eslint-disable react/no-unescaped-entities */
import { team } from "@/data/data";
import Image from "next/image";
import React from "react";

const Members = () => {
  return (
    <section className="mt-4">
      <div className="mb-4 lg:mb-8">
        <h2 className="mb-4 text-2xl sm:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Our <span className="text-green">Team</span>
        </h2>
        <p className="font-light text-gray-500 lg:mb-2 sm:text-xl dark:text-gray-400">
          Explore our desired team
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {team.map((member, index) => (
          <div
            key={index}
            className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-700 p-4 dark:border-gray-700"
          >
            <div>
              <Image
                src={member.profilePhoto}
                alt={member.name}
                width="200"
                height="200"
                className=" rounded-sm"
              ></Image>
            </div>
            <div className="p-4">
              {/* Render the name and role */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {member.role}
              </p>
              {/* Render the short about */}
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                {member.about}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
