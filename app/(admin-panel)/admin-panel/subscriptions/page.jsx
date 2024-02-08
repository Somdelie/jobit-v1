import { Dashboard } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const metadata = {
  title: "Subscriptions",
};

const Subscriptions = () => {
  return (
    <div>
      <ol className="flex w-full items-center font-semibold dark:text-gray-300">
        <li>
          <Link
            href="/admin-panel"
            className="flex items-center hover:text-roseRed transition gap-1"
          >
            <Dashboard />
            Dashboard
          </Link>
        </li>
        <IoIosArrowForward className="mt-1" />
        <li className="capitalize">{metadata?.title}</li>
      </ol>
    </div>
  );
};

export default Subscriptions;
