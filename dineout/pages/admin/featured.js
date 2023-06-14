import React from "react";
import AdminLayout from "@/layouts/admin";
import FeaturedSummary from "@/sections/admin/FeaturedSummary";
import { Box, Typography } from "@mui/material";
import {
  useAllRestaurantsQuery,
  useFeaturedRestaurantsQuery,
  useRestaurantStatsQuery,
} from "@/store/api/admin";

function featured() {
  const { data } = useFeaturedRestaurantsQuery("a", {
    refetchOnMountOrArgChange: true,
  });

  const { data: allRestaurants } = useAllRestaurantsQuery("a", {
    refetchOnMountOrArgChange: true,
  });

  const { data: stats } = useRestaurantStatsQuery("a", {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  return (
    <AdminLayout>
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

export default featured;
