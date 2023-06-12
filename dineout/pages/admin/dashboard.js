import React from "react";
import AdminLayout from "@/layouts/admin";
import { Box, Typography } from "@mui/material";
import DashboardSummary from "@/sections/admin/DashboardSummary";
import { useGetStatsQuery } from "@/store/api/admin";
import withAuth from "@/HOC/withAuth";

function Dashboard() {
  const { data } = useGetStatsQuery();
  return (
    <>
      <AdminLayout>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Hello Admin
          </Typography>
        </Box>

        <Box>
          <DashboardSummary data={data}></DashboardSummary>
        </Box>
      </AdminLayout>
    </>
  );
}

export default withAuth(Dashboard, ["1"], "/admin");
