import { Grid, Box, Typography } from "@mui/material";
import Widget from "../../Widget";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import axios from "axios";

const columns1 = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "customer_name",
    headerName: "Customer Name",
    width: 150,
    editable: false,
  },
  {
    field: "customer_id",
    headerName: "Customer Id",
    width: 150,
    editable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "start_time",
    headerName: "Time",

    width: 150,
    editable: false,
  },
  {
    field: "date",
    headerName: "Date",

    width: 150,
    editable: false,
  },
];

const BookingSummary = () => {
  const user = useSelector(selectCurrentUser);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/restaurant/restaurants/${user?.id}/bookings/data`
        );

        setData(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [user?.id]);

  console.log(data?.today_bookings_data);
  return (
    <>
      {" "}
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title={"Todays Bookings"} amount={data?.today_bookings} />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Upcoming Bookings"}
              amount={data?.upcoming_bookings}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Bookings this Month"}
              amount={data?.bookings_this_month}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title={"Past Bookings"} amount={data?.past_bookings} />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} textAlign="end">
              <Typography fontWeight="bold">
                Todays Bookings
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <DataGrid
                rows={data?.today_bookings_data || []}
                columns={columns1}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Grid>
          </Grid>{" "}
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} textAlign="end">
              <Typography fontWeight="bold">
                Upcomming Bookings
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <DataGrid
                rows={data?.upcoming_bookings_data || []}
                columns={columns1}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                disableRowSelectionOnClick
              />
            </Grid>
          </Grid>{" "}
          <Grid container item xs={12} spacing={2}>
            <Grid item xs={12} textAlign="end">
              <Typography fontWeight="bold">
                Past Bookings
              </Typography>
            </Grid>
            <Grid item xs={12}>
            <DataGrid
              rows={data?.past_bookings_data || []}
              columns={columns1}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookingSummary;
