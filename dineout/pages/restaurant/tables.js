import MiniDrawer from "@/sections/restaurant/Dashboard/Drawer";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import PrimarySearchAppBar from "@/sections/restaurant/Dashboard/Appbar";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import axios from "axios";
import Typography from "@mui/material/Typography";
import TablesSummary from "@/sections/restaurant/home/TablesSummary";
import { useState, useEffect } from "react";
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Tables = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <div>
      <div>
        <PrimarySearchAppBar />
        <Box sx={{ display: "flex" }}>
          <MiniDrawer />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Box sx={{ mb: 4 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Tables
              </Typography>
            </Box>

            <Box>
              <TablesSummary></TablesSummary>
            </Box>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Tables;
