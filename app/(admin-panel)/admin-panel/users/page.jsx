// import UsersTable from "@/components/admin/users/UsersTable";
import UserDataTable from "@/components/admin/users/UserDataTable";
import { Dashboard } from "@mui/icons-material";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export const metadata = {
  title: "Users",
};

const Users = () => {
  return (
    <div className="w-full">
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
        <UserDataTable />
      </div>
    </div>
  );
};

export default Users;
