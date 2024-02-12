"use client";
import { allUsers } from "@/data/data";
import { EditUser } from "./EditUser";
import Pagination from "@/components/ui/Pagination";

const head = [
  "First Name",
  "Surname",
  "Phone Number",
  "Address",
  "Status",
  "Actions",
];

const UsersTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {head?.map((head, index) => (
              <th
                scope="col"
                className="px-6 py-3 rounded-s-lg border-2 dark:border-gray-700"
                key={index}
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allUsers?.map((user, index) => (
            <tr
              className="bg-white dark:bg-transparent hover:bg-gray-700 border-2 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-600 whitespace-nowrap border-r-gray-300 dark:text-gray-400"
              >
                {user?.firstName}
              </th>
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-600 whitespace-nowrap dark:text-gray-400"
              >
                {user?.lastName}
              </th>
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-600 whitespace-nowrap dark:text-gray-400"
              >
                {user?.phoneNumber}
              </th>
              <th
                scope="row"
                className="px-6 py-2 font-medium text-gray-600 whitespace-nowrap dark:text-gray-400"
              >
                {user?.address}
              </th>
              <th
                scope="row"
                className={`px-6 py-2 font-medium whitespace-nowrap ${
                  user.status === "disabled"
                    ? "bg-red-500 text-white dark:bg-red-700 dark:text-gray-200"
                    : "bg-green text-white dark:text-gray-200"
                }`}
              >
                {user?.status}
              </th>
              <th
                scope="row"
                className="px-6 py-1 font-medium text-gray-600 whitespace-nowrap dark:text-gray-400"
              >
                <EditUser user={user} />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default UsersTable;
