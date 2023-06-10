import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";

function FillerButtons() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              variant="contained"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>{" "}
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>{" "}
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  src={
                    "https://im1.dineout.co.in/images/uploads/misc/2020/May/8/bffet.png"
                  }
                />
              }
            >
              Filters
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FillerButtons;
