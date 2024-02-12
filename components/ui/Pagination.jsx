"use client";
import { useState } from "react";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1); // Initialize current page state

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber); // Update current page state
  };

  return (
    <div className="mt-4 flex justify-end">
      <ul className="flex items-center -space-x-px h-10 text-sm">
        <li className="h-full">
          <button
            className="flex items-center justify-center px-3 h-full ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-[8px] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pageNumber) => (
          <li key={pageNumber} className="h-full">
            <button
              className={`flex items-center justify-center px-3 h-full leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === pageNumber
                  ? "bg-green dark:bg-gray-500 text-white"
                  : ""
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
        <li className="h-full">
          <button
            className="flex items-center justify-center px-3 h-full leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-[8px] hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === 5}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
