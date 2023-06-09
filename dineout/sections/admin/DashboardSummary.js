import { Grid, Box } from "@mui/material";
import Widget from "../Widget";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleIcon from "@mui/icons-material/People";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

const DashboardSummary = ({}) => {
  //   console.log(data);
  //   console.log(stats);

  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="New Users This Week"
              amount="100"
              icon={<PeopleIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Total Users Registered"
              amount="100"
              icon={<GroupAddIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Total Restaurants"
              amount="100"
              icon={<RestaurantIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Pending Restarurant"
              amount="100"
              icon={<HourglassEmptyIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <LineChart
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total_earnings"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Grid>
          <Grid item xs={6}>
            <LineChart
              width={500}
              height={300}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total_bookings"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default DashboardSummary;
