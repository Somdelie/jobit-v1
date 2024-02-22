import { Logout } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { Settings } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { MdDashboard, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BiMoneyWithdraw, BiSupport } from "react-icons/bi";
import { IoPersonSharp, IoSettings } from "react-icons/io5";

const menu = [
  { name: "Admin-panel", link: "/admin-panel", icon: <MdDashboard /> },
  { name: "Dashboard", link: "/user-dashboard", icon: <MdDashboard /> },
  { name: "Settings", link: "settings", icon: <IoSettings /> },
  { name: "View Profile", link: "#", icon: <IoPersonSharp /> },
  { name: "Support", link: "#", icon: <BiSupport /> },
];
const UserMenu = ({ session }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {/* {session?.firstName.charAt(0)} */}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <span className="mb-3 px-4"> {user?.firstName}</span>
        <Divider sx={{ mt: 2 }} />
        {menu?.map((link, index) => (
          <MenuItem onClick={handleClose} key={index}>
            <ListItemIcon sx={{ color: "inherit", fontSize: "20px" }}>
              {link?.icon}
            </ListItemIcon>
            <Link href={link?.link}>{link?.name}</Link>
          </MenuItem>
        ))}
        <Divider />

        <button className="px-5 flex items-center gap-4">
          <Logout fontSize="small" />
          Logout
        </button>
      </Menu>
    </div>
  );
};

export default UserMenu;
