import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import withAuth from "@/HOC/withAuth";
import Typography from "@mui/material/Typography";
import Pricing from "@/sections/restaurant/home/Pricings";
import RestaurantLayout from "@/layouts/restaurant";

const DyanamicPrice = () => {
  return (
    <RestaurantLayout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Pricing
        </Typography>
      </Box>
      <Box>
        <Pricing></Pricing>
      </Box>
    </RestaurantLayout>
  );
};

export default withAuth(DyanamicPrice, [2], "/restaurant/login");
