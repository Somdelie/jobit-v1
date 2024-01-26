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
import { motion } from "framer-motion";
import Image from "next/image";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import useScroll from "@/lib/UseScroll";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [user, setUser] = useState({
    firstName: "cautious",
  });

  const scrolled = useScroll(50);

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
    <nav
      className={`fixed w-full left-0 top-0 text-gray-700 z-30
           border-b border-gray-200 bg-white/50 backdrop-blur-xl`}
    >
      {/* lg devices */}
      <div className="">
        <div className="flex relative justify-between items-center px-6 py-1 h-[50px]">
          {/* sm devices */}
          <div className="flex items-center gap-3">
            <div className="z-30 sm:hidden block">
              <MobileNav navLinks={navLinks} />
            </div>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-1"
            >
              <Image
                src="/favicon.png"
                alt="Precedent logo"
                width="20"
                height="20"
                className=" rounded-sm"
              ></Image>
              <Link href="/" className="logo text-green font-semibold">
                Jobit-v1
              </Link>
            </motion.span>
          </div>
          <div className=" hidden sm:flex items-center gap-2 capitalize text-gray-600">
            {navLinks?.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="hover:bg-roseRed hover:text-white px-2 rounded-full"
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
    </nav>
  );
};

export default Navbar;
