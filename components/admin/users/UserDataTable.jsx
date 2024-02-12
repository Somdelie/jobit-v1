"use client";
import { allUsers } from "@/data/data";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo } from "react";
import { EditUser } from "./EditUser";

// Define columns outside the component function
const columns = [
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "phoneNumber", headerName: "Phone Number", width: 200 },
  {
    field: "role",
    headerName: "Role",
    width: 100,
    type: "singleSelect",
    valueOptions: ["basic", "editor", "admin"],
    editable: true,
  },
  {
    field: "active",
    headerName: "Active",
    width: 130,
    type: "boolean",
    editable: true,
  },
  { field: "address", headerName: "Address", sortable: false, width: 250 },
  {
    field: "actions",
    headerName: "Actions",
    width: 100,
    filterable: false,
    sortable: false,
    renderCell: (params) => {
      return <EditUser user={params.row} />;
    },
  },
];

export default function UserDataTable() {
  // Use useMemo to memoize the columns array
  const memoizedColumns = useMemo(() => columns, []);

  // Map allUsers to include an id field
  const rows = useMemo(
    () =>
      allUsers.map((user, index) => ({
        ...user,
        id: index + 1,
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
