"use client";
import { userProjects } from "@/data/data";
import { convertToZAR } from "@/lib/convertToZAR";
import { useEffect, useState } from "react";

const Balances = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [previousMonthData, setPreviousMonthData] = useState(null);

  // Calculate total earnings
  useEffect(() => {
    const earnings = userProjects.reduce(
      (total, project) => total + project.jobAmount,
      0
    );
    setTotalAmount(earnings);

    // Simulate fetching previous month data
    // For simplicity, let's simulate some historical data
    const simulatedPreviousMonthData = {
      totalEarnings: 5000,
      totalJobs: 50,
      pendingAmount: 2500,
      paidAmount: 3000,
      processingAmount: 4000,
    };
    setPreviousMonthData(simulatedPreviousMonthData);
  }, []);

  // Calculate comparisons once we have the historical data
  const comparisons = previousMonthData
    ? {
        priceIncrease: totalAmount - previousMonthData.totalEarnings,
        jobsIncrease: userProjects.length - previousMonthData.totalJobs,
      }
    : null;

  const pendingAmount = userProjects
    .filter((project) => project.jobStatus === "Not Started")
    .reduce((total, project) => total + project.jobAmount, 0);

  const paidAmount = userProjects
    .filter((project) => project.jobStatus === "Done")
    .reduce((total, project) => total + project.jobAmount, 0);

  const processingAmount = userProjects
    .filter((project) => project.jobStatus === "inProgress")
    .reduce((total, project) => total + project.jobAmount, 0);
  return (
    <div>
      <div className="grid sm:grid-cols-4">
        <div className="flex gap-4 items-center">
          <h1 className="text-gray-500 text-xs">Total Earnings</h1>
          <span className="font-semibold text-teal-600">
            ZAR {convertToZAR(totalAmount)}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-gray-500 text-xs">Pending Amount</h1>
          <span className="font-semibold text-red-500">
            ZAR {convertToZAR(pendingAmount)}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-gray-500 text-xs">Amount Paid</h1>
          <span className="font-semibold text-green">
            ZAR {convertToZAR(paidAmount)}
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <h1 className="text-gray-500 text-xs">Amount in Processing</h1>
          <span className="font-semibold text-roseRed">
            ZAR {convertToZAR(processingAmount)}
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {/* Card 1 */}
        <div className="rounded-lg shadow-md p-6 bg-blue-500 text-gray-200">
          <h2 className="text-xl font-semibold mb-4">Card 1</h2>
          {/* Display comparisons for Card 1 */}
          {comparisons && (
            <div>
              <p>
                Price Increase: ZAR {convertToZAR(comparisons.priceIncrease)}
              </p>
              <p>Jobs Increase: {comparisons.jobsIncrease} more jobs</p>
            </div>
          )}
        </div>
        {/* Card 2 */}
        <div className="rounded-lg shadow-md p-6 bg-green text-gray-200 ">
          <h2 className="text-xl font-semibold mb-4">Card 2</h2>
          {/* Display comparisons for Card 2 */}
          {comparisons && (
            <div>
              <p>
                Pending Amount Increase: ZAR{" "}
                {convertToZAR(pendingAmount - previousMonthData.pendingAmount)}
              </p>
              <p>
                Paid Amount Increase: ZAR{" "}
                {convertToZAR(paidAmount - previousMonthData.paidAmount)}
              </p>
            </div>
          )}
        </div>
        {/* Card 3 */}
        <div className="rounded-lg shadow-md p-6 bg-orange-600 text-gray-200 ">
          <h2 className="text-xl font-semibold mb-4">Card 3</h2>
          {/* Display comparisons for Card 3 */}
          {comparisons && (
            <div>
              <p>
                Processing Amount Increase: ZAR{" "}
                {convertToZAR(
                  processingAmount - previousMonthData.processingAmount
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Balances;
