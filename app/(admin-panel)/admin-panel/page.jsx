import Cards from "@/components/admin/cards/Cards";
import DateTimeDisplay from "@/components/ui/CurrentDate";
import React from "react";

export const metadata = {
  title: "Admin",
  desc: "Dashboard",
};

const AdminDashboard = () => {
  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <h2 className="font-semibold dark:text-gray-300 px-2">
          {metadata?.desc}
        </h2>
        <DateTimeDisplay />
      </div>
      <Cards />
    </div>
  );
};

export default AdminDashboard;
