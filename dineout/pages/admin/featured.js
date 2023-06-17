import React from "react";
import AdminLayout from "@/layouts/admin";
import FeaturedSummary from "@/sections/admin/FeaturedSummary";
import { Box, Typography } from "@mui/material";
import {
  useAllRestaurantsQuery,
  useFeaturedRestaurantsQuery,
  useRestaurantStatsQuery,
} from "@/store/api/admin";

function Featured() {
  const { data } = useFeaturedRestaurantsQuery("", {
    refetchOnMountOrArgChange: true,
  });

  const { data: allRestaurants } = useAllRestaurantsQuery("_", {
    refetchOnMountOrArgChange: true,
  });

  const { data: stats } = useRestaurantStatsQuery("", {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  return (
    <AdminLayout title="Featured Restaurant">
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Featured
        </Typography>

        <FeaturedSummary
          data={data}
          allRestaurants={allRestaurants}
          stats={stats}
        />
      </Box>
    </AdminLayout>
  );
}

export default Featured;
