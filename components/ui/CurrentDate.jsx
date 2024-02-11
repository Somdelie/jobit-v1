"use client";

import React, { useState, useEffect } from "react";

const DateTimeDisplay = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    const options = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  return (
    <div className="text-center text-sm border px-2 bg-gray-500 text-white dark:bg-gray-900 border-gray-400 dark:border-gray-700 py-1">
      {formatDate(currentDateTime)}
    </div>
  );
};

export default DateTimeDisplay;
