import React from "react";
import AdminLayout from "@/layouts/admin";
import { Typography, Box } from "@mui/material";
import PerformanceSummary from "@/sections/admin/PerformanceSummary";
import { useAllRestaurantsQuery } from "@/store/api/admin";
import withAuth from "@/HOC/withAuth";
// Fetch all Restaurnats Data and Pass it to Performance summary

function Performance() {
  const { data } = useAllRestaurantsQuery("s", {
    refetchOnMountOrArgChange: true,
  });

  return (
    <AdminLayout title="Performance Page">
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Performance Page
        </Typography>
        <PerformanceSummary data={data}></PerformanceSummary>
      </Box>
    </AdminLayout>
  );
}

export default withAuth(Performance, ["1"], "/admin");
