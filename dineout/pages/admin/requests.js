import React from "react";
import AdminLayout from "@/layouts/admin";
import { Box, Typography } from "@mui/material";
import PendingSummary from "@/sections/admin/PendingSummary";
import {
  useGetPendingRestaurantsQuery,
  useRequestStatsQuery,
} from "@/store/api/admin";
import withAuth from "@/HOC/withAuth";

function Requests() {
  const { data } = useGetPendingRestaurantsQuery("arsh", {
    refetchOnMountOrArgChange: true,
  });

  const { data: stats } = useRequestStatsQuery();

  return (
    <AdminLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Pending Restaurants
        </Typography>
      </Box>
      <Box>
        <PendingSummary data={data} stats={stats}></PendingSummary>
      </Box>
    </AdminLayout>
  );
}

export default withAuth(Requests, ["1"], "/admin");
