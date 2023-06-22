import withAuth from "@/HOC/withAuth";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { selectCurrentUser } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import {
  useGetRestaurantBookingStatsQuery,
  useGetRestaurantEarningsQuery,
} from "@/store/api/restaurant";
import Summary from "@/sections/restaurant/home/Summary";
import RestaurantLayout from "@/layouts/restaurant";

const Restaurant = ({}) => {
  const user = useSelector(selectCurrentUser);

  const { data } = useGetRestaurantEarningsQuery(user.id, {
    refetchOnMountOrArgChange: true,
  });

  const stats = useGetRestaurantBookingStatsQuery(user.id, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <RestaurantLayout title="Dashboard Home">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Hello {user?.first_name}
        </Typography>
      </Box>
      <Box>
        <Summary data={data} stats={stats.data} graph={data?.graph} />
      </Box>
    </RestaurantLayout>
  );
};

export default withAuth(Restaurant, [2], "/restaurant/login");
