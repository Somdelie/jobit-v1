"use client";
import { categories } from "@/data/data";
import React, { useState } from "react";

const Create = () => {
  const [value, setValue] = useState(
    "I'm seeking a highly creative and technical web designer to bring my online presence to life. My project details are tailored to attract a freelancer who can interpret my vision and needs effectively."
  );
  return (
    <section className="max-w-[90%] sm:max-w-[80%] mx-auto py-8 px-4 sm:py-16 lg:px-6 ">
      <h2 className="font-semibold sm:text-4xl mt-2 dark:text-gray-300">
        Tell us what you need <span className="text-roseRed">done.</span>{" "}
      </h2>
      <form action="#" className="mt-4">
        <div className="grid gap-4 mb-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="jobType"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project type
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Plumber,Architect,Painter,etc"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="45 Greenview Avenue, Randburg, Johannesburg              "
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Project Budget
            </label>
            <input
              type="text"
              name="budget"
              id="budget"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="R2000, R40per/h, R5000/month, etc"
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
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
            className="block mb-2 text-sm font-medium text-gray-700 dark:text-white"
          >
            Project description
          </label>
          <textarea
            id="description"
            rows="4"
            className="w-full p-4 text-sm text-gray-900 bg-white border-0 dark:bg-gray-700 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="I'm looking for an experienced web developer to create an online..."
            required
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white inline-flex mt-4 items-center bg-roseRed hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-3 py-2 text-center dark:bg-roseRed dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Publish Project
        </button>
      </form>
    </section>
  );
};

export default Create;
