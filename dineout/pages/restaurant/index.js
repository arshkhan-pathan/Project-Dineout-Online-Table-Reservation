import MiniDrawer from "@/components/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import PrimarySearchAppBar from "@/components/Dashboard/Appbar";
import Summery from "@/sections/restaurant/home/Summery";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Restaurant = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{mb: 4}}>
            <Typography variant="h5" sx={{fontWeight:"bold"}}>Hello, Manager</Typography>
          </Box>

          <Box>
            <Summery />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Restaurant;
