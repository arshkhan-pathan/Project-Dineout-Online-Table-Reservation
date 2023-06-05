import MiniDrawer from "@/sections/restaurant/Dashboard/Drawer";
import withAuth from "@/hooks/withAuth";
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
import PrimarySearchAppBar from "@/sections/restaurant/Dashboard/Appbar";
import Summary from "@/sections/restaurant/home/Summary";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));
const Restaurant = ({}) => {
  const user = useSelector(selectCurrentUser);

  const { data } = useGetRestaurantEarningsQuery(user.id, {
    refetchOnMountOrArgChange: true,
  });

  const stats = useGetRestaurantBookingStatsQuery(user.id, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Hello {user?.name}
            </Typography>
          </Box>

          <Box>
            <Summary data={data} stats={stats.data} graph={data?.graph} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default withAuth(Restaurant, [2], "/restaurant/login");
