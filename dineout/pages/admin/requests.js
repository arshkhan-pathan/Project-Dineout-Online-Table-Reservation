import React from "react";
import AdminLayout from "@/layouts/admin";
import { Box, Typography } from "@mui/material";
import PendingSummary from "@/sections/admin/PendingSummary";

function requests() {
  return (
    <AdminLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Pending Restaurants
        </Typography>
      </Box>
      <Box>
        <PendingSummary></PendingSummary>
      </Box>
    </AdminLayout>
  );
}

export default requests;
