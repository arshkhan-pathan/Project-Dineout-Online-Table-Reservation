import React from "react";
import { Grid, Box } from "@mui/material";
import Widget from "../Widget";
import { TrackChanges } from "@mui/icons-material";

function FeaturedSummary() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Widget
            title="Total Restaurants"
            amount={100}
            icon={<TrackChanges />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Widget
            title="Total Featured Restaurants"
            amount={100}
            icon={<TrackChanges />}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeaturedSummary;
