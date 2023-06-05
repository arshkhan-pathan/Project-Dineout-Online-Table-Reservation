import MiniDrawer from "@/sections/restaurant/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import PrimarySearchAppBar from "@/sections/restaurant/Dashboard/Appbar";
import withAuth from "@/hooks/withAuth";
import Typography from "@mui/material/Typography";
import BookingSummary from "@/sections/restaurant/home/BookingSummary";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Bookings = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Bookings
            </Typography>
          </Box>

          <Box>
            <BookingSummary />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default withAuth(Bookings, [2], "/restaurant/login");
