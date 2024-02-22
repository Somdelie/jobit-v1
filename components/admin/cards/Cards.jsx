import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Card from "./Card";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { LuActivity } from "react-icons/lu";
import { Avatar, Divider } from "@mui/material";
import { recentUsers } from "@/data/data";
import { formatCreatedAt } from "@/lib/convertDate";
import Map from "@/components/ui/Map";
import BarCharts from "../BarCharts";

const cards = [
  {
    title: "Total Revenue",
    amount: "$45,231.89",
    percentage: "+20.1% from last month",
    icon: <FaMoneyBillTrendUp />,
  },
  {
    title: "Subscriptions",
    amount: "+2350",
    percentage: "+180.1% from last month",
    icon: <MdOutlinePeopleOutline />,
  },
  {
    title: "Sales",
    amount: "+12,234",
    percentage: "+19% from last month",
    icon: <FaRegCreditCard />,
  },
  {
    title: "Active Now",
    amount: "+573",
    percentage: "+201 since last hour",
    icon: <LuActivity />,
  },
];

const Cards = () => {
  return (
    <div>
      <div className="grid mt-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <div className="grid sm:grid-cols-5 gap-4 mt-4">
        <div className="sm:col-span-3 grow smallCard rounded w-full p-2 h-[350px] border dark:border-gray-700 border-gray-400">
          <h2 className="font-semibold dark:text-gray-300 mb-4">Overview</h2>
          <BarCharts />
        </div>

        <div className="sm:col-span-2 smallCard p-6 rounded border dark:border-gray-700 border-gray-400">
          <div>
            <h2 className="font-semibold dark:text-gray-300">Recent Users</h2>
            <p className="text-sm">You got 265 users this month.</p>
          </div>
          <div className="mt-2">
            {recentUsers?.map((user, index) => (
              <div
                key={index}
                className="flex items-start justify-between mt-2 "
              >
                <div className="flex items-center gap-2">
                  <Avatar sx={{ bgcolor: "#cd4163" }}>
                    {user?.name.charAt(0)}
                  </Avatar>

                  <div>
                    <p className="text-sm font-medium leading-none">
                      {user?.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <div className="text-sm ">
                  {formatCreatedAt(user?.createdAt)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
