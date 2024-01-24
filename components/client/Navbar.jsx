"use client";
import Link from "next/link";
import "./home.css";
import { navLinks } from "@/data/data";
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState({
    firstName: "cautious",
  });

  const categories = ["Profile", "Account", "Dashboard", "Logout"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 100,
      transition: { staggerChildren: 0.2 },
    },
    hidden: { opacity: 0 },
  };

  return (
    <nav className="sticky left-0 top-0 bg-gray-700 text-white">
      {/* lg devices */}
      <div className="hidden sm:block">
        <div className="flex relative justify-between items-center px-6 py-1 h-[50px]">
          <div className=" flex items-center">
            <Sidebar />
          </div>
          <div className="flex items-center gap-2 capitalize text-gray-300">
            {navLinks?.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="hover:bg-roseRed px-2 rounded-full"
              >
                {link?.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <div className="icons">icons</div>
            <div className="user">
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              {user ? (
                <Menu
                  sx={{ mt: "35px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              ) : (
                <div>No user</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* sm devices */}
      <div className="relative">
        <MobileNav navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
