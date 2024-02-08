import React from "react";

const SmallCard = ({ title, amount, percentage, icon }) => {
  return (
    <div className="rounded-xl border bg-card text-card-foreground shadow">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="h-4 w-4 text-muted-foreground"
        >
          <path d={icon} />
        </svg>
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{amount}</div>
        <p className="text-xs text-muted-foreground">{percentage}</p>
      </div>
    </div>
  );
};

export default SmallCard;
