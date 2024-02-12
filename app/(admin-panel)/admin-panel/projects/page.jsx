import ProjectsDataTable from "@/components/admin/projects/ProjectsDataTable";
import { Dashboard } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

export const metadata = {
  title: "Projects",
};

const Projects = () => {
  return (
    <div>
      <div className="flex items-center my-2 justify-between">
        <ol className="flex items-center dark:text-gray-400">
          <li>
            <Link
              href="/admin-panel"
              className="flex items-center hover:text-roseRed transition gap-1"
            >
              <Dashboard />
              Dashboard
            </Link>
          </li>
          <IoIosArrowForward className="mt-1" />
          <li className="capitalize">{metadata?.title}</li>
        </ol>
        <h2>Manage Users</h2>
      </div>

      <div className="h-[80vh] w-full">
        {/* <UsersTable /> */}
        <ProjectsDataTable />
      </div>
    </div>
  );
};

export default Projects;
