"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AdminLinks, Others } from "@/data/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/components/admin/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import { UserLocationContext } from "@/context/UseLocationContext";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  background: "blue",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Layout = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const pathname = usePathname();
  const [userLocation, setUserLocation] = React.useState([]);

  React.useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    // Use getCurrentPosition instead of getUserLocation
    navigator.geolocation.getCurrentPosition(function (pos) {
      console.log(pos);
      setUserLocation({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      });
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className="nav">
          <div className="flex pl-4 items-center gap-12 w-full text-gray-700 dark:text-gray-300">
            <button
              onClick={handleDrawerOpen}
              style={{
                ...(open && { display: "none" }),
              }}
              className=""
            >
              <MenuIcon />
            </button>
            <Navbar open={open} />
          </div>
        </AppBar>
        <Drawer
          variant="permanent"
          open={open}
          sx={{ backgroundColor: "black" }}
        >
          <div className="flex h-14 items-center justify-between px-3 text-inherit bg-white dark:bg-gray-700">
            <div className={`flex h-full items-center gap-3 `}>
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
                  Thuso.com
                </Link>
              </motion.span>
            </div>
            <button
              onClick={handleDrawerClose}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </button>
          </div>
          <Divider />
          <span className="mt-3 text-gray-400 px-2">Main</span>
          <div className="flex flex-col gap-2 font-semibold text-gray-700 dark:text-gray-300 transition">
            {AdminLinks?.map((link, index) => (
              <Link href={link?.link} key={index} className="">
                <div
                  className={
                    link.link === pathname
                      ? " dark:bg-gray-800 font-semibold gap-2 text-white flex items-center pl-4 transition bg-roseRed"
                      : "hover:dark:bg-gray-800 font-semibold gap-2  hover:text-white flex items-center pl-4 transition hover:bg-roseRed"
                  }
                  style={{
                    minHeight: 38,
                    justifyContent: open ? "initial" : "center",
                    fontWeight: 600,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      fontWeight: 600,
                    }}
                    className="itemIcon"
                  >
                    {link?.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link?.title}
                    sx={{ opacity: open ? 1 : 0 }}
                    className="linkTitle"
                  />
                </div>
              </Link>
            ))}
          </div>
          <Divider />
          <span className="mt-3 text-gray-400 px-2">Others</span>
          <div className="flex flex-col gap-2 font-semibold text-gray-700 dark:text-gray-300 transition">
            {Others?.map((link, index) => (
              <Link href={link?.link} key={index} className="">
                <div
                  className={
                    link.link === pathname
                      ? " dark:bg-gray-800 font-semibold gap-2 text-white flex items-center pl-4 transition bg-roseRed"
                      : "hover:dark:bg-gray-800 font-semibold gap-2  hover:text-white flex items-center pl-4 transition hover:bg-roseRed"
                  }
                  style={{
                    minHeight: 38,
                    justifyContent: open ? "initial" : "center",
                    fontWeight: 600,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      fontWeight: 600,
                    }}
                    className="itemIcon"
                  >
                    {link?.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link?.title}
                    sx={{ opacity: open ? 1 : 0 }}
                    className="linkTitle"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, paddingY: 8, paddingX: 2 }}
          className="main"
        >
          {children}
        </Box>
      </Box>
    </UserLocationContext.Provider>
  );
};

export default Layout;
