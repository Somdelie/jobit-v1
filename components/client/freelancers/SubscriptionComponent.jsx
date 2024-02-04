import React from "react";
import { IoCheckmarkSharp } from "react-icons/io5";

const SubscriptionComponent = () => {
  return (
    <section className="">
      <h2 className="font-semibold sm:text-4xl mt-2 dark:text-gray-300">
        Choose your <span className="text-roseRed">plan</span>{" "}
      </h2>
      <div className="">
        <h2 className="my-4 tracking-tight font-extrabold text-gray-700 dark:text-gray-400">
          Subscribe to get approved on our platform
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-2 ">
        {/* Pricing Card 1 - Starter */}
        <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-2 text-lg font-semibold">Starter</h3>
          <p className="font-light text-gray-500 text-sm dark:text-gray-400">
            Best option for personal use & for your next project.
          </p>
          <div className="flex justify-center items-baseline my-2">
            <span className="mr-2 text-lg font-extrabold">R29</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-2 space-y-2 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                <span className="font-semibold">
                  be visible on our platform
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                Premium support:
                <span className="font-semibold">6 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                Free updates: <span className="font-semibold">6 months</span>
              </span>
            </li>
          </ul>
          <a
            href="#"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900"
          >
            Get started
          </a>
        </div>
        {/* Pricing Card 2 - Company */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-2 text-lg font-semibold">Company</h3>
          <p className="font-light text-gray-500 text-sm dark:text-gray-400">
            Relevant for multiple features, extended & premium support.
          </p>
          <div className="flex justify-center items-baseline my-2">
            <span className="mr-2 text-lg font-extrabold">R99</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-2 space-y-2 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                <span className="font-semibold">
                  be on our featured freelancer
                </span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                Premium support:
                <span className="font-semibold">24 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                Free updates: <span className="font-semibold">24 months</span>
              </span>
            </li>
          </ul>
          <a
            href="#"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900"
          >
            Get started
          </a>
        </div>
        {/* Pricing Card 3 - Enterprise */}
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
          <h3 className="mb-2 text-lg font-semibold">Enterprise</h3>
          <p className="font-light text-gray-500 text-sm dark:text-gray-400">
            Get recognized on our home page as top rated, featured
          </p>
          <div className="flex justify-center items-baseline my-2">
            <span className="mr-2 text-lg font-extrabold">R199</span>
            <span className="text-gray-500 dark:text-gray-400">/month</span>
          </div>
          {/* List */}
          <ul role="list" className="mb-2 space-y-2 text-left">
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                Team size:{" "}
                <span className="font-semibold">100+ developers</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                Premium support:{" "}
                <span className="font-semibold">36 months</span>
              </span>
            </li>
            <li className="flex items-center space-x-3">
              {/* Icon */}
              <IoCheckmarkSharp className="text-green" />
              <span>
                Free updates: <span className="font-semibold">36 months</span>
              </span>
            </li>
          </ul>
          <a
            href="#"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-blue-900"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionComponent;
