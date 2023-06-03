import MiniDrawer from "@/sections/restaurant/Dashboard/Drawer";
import withAuth from "@/hooks/withAuth";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled, useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { selectCurrentUser } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import { useGetRestaurantEarningsQuery } from "@/store/api/restaurant";
import axios from "axios";
import { useState, useEffect } from "react";

import PrimarySearchAppBar from "@/sections/restaurant/Dashboard/Appbar";
import Summary from "@/sections/restaurant/home/Summary";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
}));
const Restaurant = ({}) => {
  const user = useSelector(selectCurrentUser);
  const [data, setData] = useState();
  const [stats, setStats] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requests = [
          axios.get(
            `http://127.0.0.1:8000/api/restaurant/restaurants/${user.id}/earnings/`
          ),
          axios.get(
            `http://127.0.0.1:8000/api/restaurant/restaurants/${user.id}/bookings/stats`
          ),
        ];

        const responses = await Promise.all(requests);

        setData(responses[0].data);
        setStats(responses[1].data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [user?.id]);

  console.log(stats);

  return (
    <div>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Hello {user?.name}
            </Typography>
          </Box>

          <Box>
            <Summary data={data} stats={stats} graph={data?.graph} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default withAuth(Restaurant, [2], "/restaurant/login");
