import React from "react";

const Card = ({ card }) => {
  return (
    <div className="smallCard rounded border dark:border-gray-700 border-gray-400">
      <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <h3 className="tracking-tight text-sm font-medium">{card?.title}</h3>
        <span className="text-lg">{card?.icon}</span>
      </div>
      <div className="p-6 pt-0">
        <div className="text-2xl font-bold">{card?.amount}</div>
        <p className="text-xs text-muted-foreground">{card?.percentage}</p>
      </div>
    </div>
  );
};

export default Card;
