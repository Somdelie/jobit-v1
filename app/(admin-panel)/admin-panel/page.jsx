import Cards from "@/components/admin/cards/Cards";
import React from "react";

export const metadata = {
  title: "Admin",
  desc: "Dashboard",
};

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="font-semibold dark:text-gray-300">{metadata?.desc}</h2>
      <Cards />
    </div>
  );
};

export default AdminDashboard;
