import MiniDrawer from "@/sections/restaurant/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import PrimarySearchAppBar from "@/sections/restaurant/Dashboard/Appbar";

import Typography from "@mui/material/Typography";
import Pricing from "@/sections/restaurant/home/Pricings";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DyanamicPrice = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Pricing
            </Typography>
          </Box>

          <Box>
            <Pricing></Pricing>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default DyanamicPrice;
