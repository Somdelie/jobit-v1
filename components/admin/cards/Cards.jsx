import React from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import Card from "./Card";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { LuActivity } from "react-icons/lu";

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
    <div className="grid mt-4 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
