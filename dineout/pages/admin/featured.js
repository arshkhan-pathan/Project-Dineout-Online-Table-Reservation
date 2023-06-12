import React from "react";
import AdminLayout from "@/layouts/admin";
import FeaturedSummary from "@/sections/admin/FeaturedSummary";
import { Box, Typography } from "@mui/material";

function featured() {
  return (
    <AdminLayout>
      {" "}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Featured
        </Typography>
      </Box>
      <Box>
        <FeaturedSummary></FeaturedSummary>
      </Box>
    </AdminLayout>
  );
}

export default featured;
