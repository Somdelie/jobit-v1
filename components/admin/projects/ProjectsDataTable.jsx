"use client";
import { projects } from "@/data/data";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { EditProject } from "./EditProject";

// Define columns outside the component function
const columns = [
  { field: "firstName", headerName: "Employer", width: 200 },
  { field: "jobType", headerName: "Project Type", width: 200 },
  { field: "status", headerName: "Status", width: 100 },
  { field: "address", headerName: "Address", width: 500 },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      return <EditProject user={params.row} />;
    },
  },
];

export default function ProjectsDataTable() {
  // Use useMemo to memoize the columns array
  const memoizedColumns = useMemo(() => columns, []);

  // Map allProjects to include an id field
  const rows = useMemo(
    () =>
      projects.map((project) => ({
        id: project.id,
        firstName: project.user.firstName, // Access user's first name
        jobType: project.skills.join(", "), // Concatenate project skills
        jobType: project.jobType,
        status: project.status,
        address: project.address,
      })),
    []
  );

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataGrid
        className="data-grid"
        rows={rows}
        columns={memoizedColumns} // Use the memoized columns
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        disableSelectionOnClick
        disableRowSelectionOnClick // Disable row selection on clicks
      />
    </Box>
  );
}
