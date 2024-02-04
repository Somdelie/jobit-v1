import LabTabs from "@/components/client/user-dashboard/Drawer";
import { TabPanel } from "@mui/base";
import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export const metadata = {
  title: "Dashboard",
};

const UserDashboard = () => {
  return (
    <section className="min-h-screen py-8 px-4 sm:py-16 lg:px-6 ">
      <ol className="flex w-full items-center font-semibold dark:text-gray-300">
        <li>
          <Link
            href="/"
            className="flex items-center hover:text-roseRed transition gap-1"
          >
            <FaHome />
            Home
          </Link>
        </li>
        <IoIosArrowForward className="mt-1" />
        <li className="capitalize">{metadata?.title}</li>
      </ol>
      <div className="mt-4">
        <LabTabs />
      </div>
    </section>
  );
};

export default UserDashboard;
