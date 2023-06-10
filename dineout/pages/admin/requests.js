import React from "react";
import AdminLayout from "@/layouts/admin";
import { Box, Typography } from "@mui/material";
import PendingSummary from "@/sections/admin/PendingSummary";
import { useGetPendingRestaurantsQuery } from "@/store/api/admin";

function requests() {
  const { data } = useGetPendingRestaurantsQuery("arsh", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <AdminLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Pending Restaurants
        </Typography>
      </Box>
      <Box>
        <PendingSummary data={data}></PendingSummary>
      </Box>
    </AdminLayout>
  );
}

export default requests;
