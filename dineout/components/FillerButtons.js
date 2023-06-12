import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";

function FillerButtons() {
  return (
    <div style={{ marginTop: "50px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Button
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              variant="contained"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686552553/icons/1553738_ffqead.png"
                  }
                />
              }
            >
              Bar
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686551836/icons/parking_ns6bha.jpg"
                  }
                />
              }
            >
              Parking
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686551836/icons/delivery_qpm6md.png"
                  }
                />
              }
            >
              Home Delivery
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686551836/icons/performance_tmlg0j.png"
                  }
                />
              }
            >
              Live Performance
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686551836/icons/cards_pochqv.png"
                  }
                />
              }
            >
              Cards Accepted
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686551836/icons/air_jaswkf.png"
                  }
                />
              }
            >
              Air Condition
            </Button>
          </Grid>{" "}
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686552030/icons/outdoor_eopfwg.png"
                  }
                />
              }
            >
              Outdoors
            </Button>
          </Grid>{" "}
          <Grid item xs={3}>
            <Button
              variant="contained"
              sx={{ width: 250, height: 60, backgroundColor: "whitesmoke" }}
              color="primary"
              startIcon={
                <Avatar
                  variant="square"
                  src={
                    "https://res.cloudinary.com/dhe9hmzbn/image/upload/v1686552028/icons/valet_rline2.png"
                  }
                />
              }
            >
              Valet Parking
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FillerButtons;
