"use client";
import React, { useState, useEffect } from "react";
import { userProjects } from "@/data/data";
import { convertToZAR } from "@/lib/convertToZAR";

const Revenue = () => {
  const [previousMonthData, setPreviousMonthData] = useState(null);

  // Simulate fetching previous month data
  useEffect(() => {
    // You need to fetch historical data from your storage solution here
    // For simplicity, let's simulate some historical data
    const simulatedPreviousMonthData = {
      totalEarnings: 5000,
      totalJobs: 50,
    };
    setPreviousMonthData(simulatedPreviousMonthData);
  }, []);

  // Calculate comparisons once we have the historical data
  const comparisons = previousMonthData
    ? {
        priceIncrease: totalEarnings - previousMonthData.totalEarnings,
        jobsIncrease: userProjects.length - previousMonthData.totalJobs,
      }
    : null;

  return (
    <div>
      {comparisons && (
        <div>
          <h1>Comparisons with Previous Month</h1>
          <p>Price Increase: ZAR {convertToZAR(comparisons.priceIncrease)}</p>
          <p>Jobs Increase: {comparisons.jobsIncrease} more jobs</p>
        </div>
      )}
      <div className="grid sm:grid-cols-3">
        {/* Display other balance components here */}
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 dark:text-gray-400 mt-4 gap-4">
        {/* Display card components here */}
      </div>
    </div>
  );
};

export default Revenue;
