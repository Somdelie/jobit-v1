"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const SideNav = () => {
  return (
    <Sidebar
      aria-label="Sidebar with content separator example"
      className=" h-screen overflow-y-auto sticky top-0 left-0 dark:bg-gray-700"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin-panel" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="/admin-panel/inbox" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
          <Sidebar.Item href="/admin-panel/users" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/admin-panel/projects" icon={HiShoppingBag}>
            Projects
          </Sidebar.Item>
          <Sidebar.Item href="/admin-panel/freelancers" icon={HiArrowSmRight}>
            Freelancers
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Sign Up
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin-panel/news" icon={HiChartPie}>
            News
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideNav;
