import MiniDrawer from "@/components/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { selectCurrentUser } from "@/store/slices/auth";
import { useSelector, useEffect } from "react-redux";
import { useGetRestaurantEarningsQuery } from "@/store/api/restaurant";

import PrimarySearchAppBar from "@/components/Dashboard/Appbar";
import Summary from "@/sections/restaurant/home/Summary";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Restaurant = () => {
  const user = useSelector(selectCurrentUser);
  const {data}= useGetRestaurantEarningsQuery(39, {
    pollingInterval: 20000,
  });


  console.log(user);

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
            <Summary data={data} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Restaurant;
