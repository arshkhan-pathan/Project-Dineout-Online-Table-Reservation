import { Grid, Box } from "@mui/material";
import Widget from "../../Widget";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data1 = [
  {
    name: "dat",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "dat",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "dat",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "dat",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "dat",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "dat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "dat",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Summary = ({ data }) => {
  return (
    <>
      {" "}
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title="Todays Earning" amount={data?.today} />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title="Week Earning" amount={data?.last_week} />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title="Todays Booking" amount="2" />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title="Upcoming Bookings" amount="20" />
          </Grid>{" "}
          <Grid item xs={6}>
            <LineChart
              width={500}
              height={300}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </Grid>
          <Grid item xs={6}>
            <LineChart
              width={500}
              height={300}
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Summary;
