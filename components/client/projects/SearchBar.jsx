"use client";
import { categories } from "@/data/data";
import Link from "next/link";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const SearchBar = ({ metadata }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search functionality here
    console.log("Searching for:", searchInput);
  };

  return (
    <div className="grid relative max-w-[90%] mx-auto items-center gap-4 p-2 mt-8 sm:mt-1 bg-white search dark:bg-gray-800 rounded sm:grid-cols-3">
      <div className="w-full ">
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
      </div>
      <div className="w-full">
        <form className="flex w-full items-center" onSubmit={handleSubmit}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              value={searchInput}
              onChange={handleInputChange}
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-roseRed focus:border-roseRed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-roseRed dark:focus:border-primary-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className="w-full">
        <select
          id="categories"
          className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-roseRed focus:border-roseRed block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-roseRed dark:focus:border-roseRed"
        >
          <option value="">Select category</option>
          {categories?.map((category) => (
            <option key={category?.id} value={category?.id}>
              {category?.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
