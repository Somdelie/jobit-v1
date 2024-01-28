"use client";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Box } from "@mui/material";

export default function DividerText() {
  return (
    <Box sx={{ color: "gray" }}>
      <Divider sx={{ borderColor: "red" }}>or</Divider>
    </Box>
  );
}
