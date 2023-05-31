import MiniDrawer from "@/components/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import PrimarySearchAppBar from "@/components/Dashboard/Appbar";

import Typography from "@mui/material/Typography";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));
const Reviews = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <h1>Reviews</h1>
        </Box>
      </Box>
    </div>
  );
};

export default Reviews;
