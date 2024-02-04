"use client";
import { categories } from "@/data/data";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const NewFreelancer = () => {
  const [value, setValue] = useState(
    "I'm Cautious, a seven-year experienced iOS engineer. I hold a BSc in Computer Science and an MSc in Mobile Software. I love my work, and I do my best to reflect that passion on the quality of my code."
  );
  return (
    <section className="max-w-[90%] sm:max-w-[80%] mx-auto px-4 py-16 lg:px-6 ">
      <h2 className="font-semibold sm:text-4xl mt-2 dark:text-gray-300">
        Tell us what you <span className="text-roseRed">do.</span>{" "}
      </h2>
      <form action="#" className="mt-4">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="jobType"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Job type
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Plumber,Architect,Painter,etc"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Your Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="45 Greenview Avenue, Randburg, Johannesburg              "
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              How Much is your expectation
            </label>
            <input
              type="text"
              name="budget"
              id="budget"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="R2000, R40per/h, R5000/month, etc"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Category
            </label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
        <div className="col-span-2">
          <label
            htmlFor="description"
            className=" mb-2 text-sm font-medium text-gray-700 dark:text-gray-400"
          >
            Tell us more about yourself
          </label>

          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="border-gray-700 dark:text-gray-400"
          />
        </div>
        <button
          type="submit"
          className="text-white mt-4 inline-flex items-center bg-roseRed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-2 text-center dark:bg-roseRed dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Publish Project
        </button>
      </form>
    </section>
  );
};

export default NewFreelancer;
