import MiniDrawer from "@/components/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material";

import PrimarySearchAppBar from "@/components/Dashboard/Appbar";
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
          <h1>Home</h1>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <h2>Hi</h2>
            </Grid>
            <Grid h1 xs={4}>
              <h1>xs=4</h1>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Restaurant;
