import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/router";
import {
  BarIcon,
  ParkingIcon,
  DeliveryIcon,
  MusicIcon,
  CardIcon,
  AcIcon,
  OutdoorIcon,
  ValetIcon,
} from "@/components/icons";

const icons = {
  Bar: <BarIcon />,
  Parking: <ParkingIcon />,
  "Home Delivery": <DeliveryIcon />,
  "Live Performance": <MusicIcon />,
  "Cards Accepted": <CardIcon />,
  "Air Condition": <AcIcon />,
  Outdoors: <OutdoorIcon />,
  "Valet Parking": <ValetIcon />,
};

const buttonsData = [
  "Bar",
  "Parking",
  "Home Delivery",
  "Live Performance",
  "Cards Accepted",
  "Air Condition",
  "Outdoors",
  "Valet Parking",
];

function FillerButtons() {
  const router = useRouter();

  return (
    <Box sx={{ mt: 6 }}>
      <Typography
        sx={{
          fontFamily: "var(--font-body)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#C94F35",
          mb: 1,
        }}
      >
        Browse by
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontWeight: 600,
          color: "#1A1210",
          mb: 3,
          fontSize: "clamp(26px, 3vw, 34px)",
        }}
      >
        What Are You Looking For?
      </Typography>
      <Grid container spacing={1.5}>
        {buttonsData.map((label) => (
          <Grid item xs={6} sm={4} md={3} key={label}>
            <Button
              onClick={() =>
                router.push(`restaurants/search?q=${encodeURIComponent(label)}`)
              }
              variant="outlined"
              startIcon={
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: { xs: 26, sm: 32 },
                    height: { xs: 26, sm: 32 },
                    borderRadius: "6px",
                    backgroundColor: "rgba(201,79,53,0.08)",
                    flexShrink: 0,
                    transition: "background 0.18s",
                    ".MuiButton-root:hover &": {
                      backgroundColor: "rgba(255,255,255,0.18)",
                    },
                  }}
                >
                  {icons[label]}
                </Box>
              }
              sx={{
                width: "100%",
                height: { xs: 50, sm: 54 },
                borderColor: "rgba(0,0,0,0.10)",
                color: "#3A2E28",
                backgroundColor: "white",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px" },
                textTransform: "none",
                borderRadius: "8px",
                justifyContent: "flex-start",
                pl: 1.5,
                gap: 0.5,
                transition: "all 0.18s",
                lineHeight: 1.2,
                "& .MuiButton-startIcon": { mr: { xs: 0.5, sm: 1 }, flexShrink: 0 },
                "&:hover": {
                  backgroundColor: "#C94F35",
                  borderColor: "#C94F35",
                  color: "white",
                  transform: "translateY(-2px)",
                  boxShadow: "0 6px 20px rgba(201,79,53,0.25)",
                },
              }}
            >
              {label}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default FillerButtons;
