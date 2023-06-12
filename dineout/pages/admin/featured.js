import React from "react";
import AdminLayout from "@/layouts/admin";
import FeaturedSummary from "@/sections/admin/FeaturedSummary";
import { Box, Typography } from "@mui/material";
import { useGetFeaturedRestaurantQuery } from "@/store/api/restaurants";
import { useFeaturedRestaurantsQuery } from "@/store/api/admin";

function featured() {
  const { data } = useFeaturedRestaurantsQuery("a", {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  return (
    <AdminLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Featured
        </Typography>
      </Box>
      <Box>
        <FeaturedSummary data={data}></FeaturedSummary>
      </Box>
    </AdminLayout>
  );
}

export default featured;
