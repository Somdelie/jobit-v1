import { userProjects } from "@/data/data";
import { convertToZAR } from "@/lib/convertToZAR";
import { EyeIcon } from "lucide-react";

const Finished = () => {
  const Done = userProjects.filter((job) => job.jobStatus === "Done");

  const getStatusColor = (status) => {
    switch (status) {
      case "inProgress":
        return "bg-red-400 text-red-600";
      case "Done":
        return "bg-green text-teal-600";
      case "Not Started":
        return "bg-gray-200";
      default:
        return ""; // Default background color
    }
  };

  return (
    <div className="w-full dark:text-gray-400 search dark:bg-slate-700 overflow-x-auto">
      <table className="border-collapse w-full">
        <thead className="dark:bg-gray-900 bg-blue-300">
          <tr>
            <th className="border-r border-gray-500 p-2 whitespace-nowrap">
              ID
            </th>
            <th className="border-r border-gray-500 p-2 whitespace-nowrap">
              Employer
            </th>
            <th className="border-r border-gray-500 p-2 whitespace-nowrap">
              Job Type
            </th>
            <th className="border-r border-gray-500 p-2 whitespace-nowrap">
              Job Description
            </th>
            <th className="border-r border-gray-500 p-2 whitespace-nowrap">
              Job Amount (ZAR)
            </th>
            <th className="border-r border-gray-500 p-2 whitespace-nowrap">
              Job Status
            </th>
            <th className=" border-gray-500 p-2 whitespace-nowrap">Address</th>
          </tr>
        </thead>
        <tbody>
          {Done?.map((job, index) => (
            <tr
              key={job.id}
              className={`${
                index !== userProjects.length - 1
                  ? "border-b border-gray-500 t-row relative"
                  : "t-row relative"
              } hover:bg-gray-600`}
            >
              <td className="p-2 whitespace-nowrap">{job.id}</td>
              <td className="p-2 whitespace-nowrap">
                {job.employer.firstName} {job.employer.lastName}
              </td>
              <td className="p-2 whitespace-nowrap">{job.jobType}</td>
              <td className="p-2 whitespace-nowrap">{job.jobDescription}</td>
              <td className="p-2 text-center font-semibold whitespace-nowrap">
                {convertToZAR(job.jobAmount)}
              </td>
              {/* Apply background color class based on job status */}
              <td className={`p-2 whitespace-nowrap`}>
                <span
                  className={` w-full py-1 text-xs flex items-center justify-center rounded-full whitespace-nowrap ${getStatusColor(
                    job.jobStatus
                  )}`}
                >
                  {job.jobStatus}
                </span>
              </td>
              <td className="p-2 whitespace-nowrap text-xs">
                {job.address.street}, {job.address.city}, {job.address.state},{" "}
                {job.address.country}
              </td>
              <td className="eye">
                <EyeIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Finished;
