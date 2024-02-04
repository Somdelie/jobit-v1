"use client";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import Projects from "./tabs_content/Projects";
import Inprogress from "./tabs_content/Inprogress";
import Finished from "./tabs_content/Finished";
import Balances from "./tabs_content/Balances";
import Inboxes from "./tabs_content/Inboxes";
import Tasks from "./tabs_content/Tasks";

export default function LabTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Define your tabs and panels as arrays
  const tabs = [
    { label: "All Projects", value: "1" },
    { label: "Work in Progress", value: "2" },
    { label: "Finished Projects", value: "3" },
    { label: "Balances", value: "4" },
    { label: "Inboxes", value: "5" },
    { label: "Tasks", value: "6" },
  ];

  const panels = [
    { value: "1", content: <Projects /> },
    { value: "2", content: <Inprogress /> },
    { value: "3", content: <Finished /> },
    { value: "4", content: <Balances /> },
    { value: "5", content: <Inboxes /> },
    { value: "6", content: <Tasks /> },
  ];

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          {/* Map through tabs array to render Tab components */}
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabs.map((tab) => (
              <Tab
                key={tab.value}
                label={tab.label}
                value={tab.value}
                sx={{
                  fontFamily: "inherit",
                  fontWeight: "700",
                  color: "gray",
                  "&.Mui-selected": {
                    color: "#cd4163",
                    borderBottomColor: "#cd4163",
                  },
                }}
              />
            ))}
          </TabList>
        </Box>
        {/* Map through panels array to render TabPanel components */}
        {panels.map((panel) => (
          <TabPanel key={panel.value} value={panel.value}>
            {panel.content}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
