"use client";
import Image from "next/image";
import { ThemeSwitcher } from "../ui/ThemeSwitcher";
import UserMenu from "./UserMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@mui/material";
import { Mail, Message } from "@mui/icons-material";
import TeamSelect from "./TeamSelect";
// import { SelectScrollable } from "./SelectInput";

const Navbar = ({ open }) => {
  return (
    <div className="flex h-14 px-4 justify-between items-center w-full">
      {/* <SelectScrollable /> */}
      <TeamSelect />
      <div className="flex h-full items-center gap-2">
        <ThemeSwitcher />
        <div className="flex h-full items-center gap-3">
          <button>
            {" "}
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </button>
          <button>
            <Badge badgeContent={4} color="error">
              <Message />
            </Badge>
          </button>
        </div>
        <UserMenu />
      </div>
    </div>
  );
};

export default Navbar;
