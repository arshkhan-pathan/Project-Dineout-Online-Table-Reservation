import { Grid, Box, Typography } from "@mui/material";
import Widget from "../../Widget";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import { useGetRestaurantBookingsDataQuery } from "@/store/api/restaurant";
import { Divider } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";

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

  const { data } = useGetRestaurantBookingsDataQuery(user.id, {
    refetchOnMountOrArgChange: true,
  });
  console.log(data);
  return (
    <>
      {" "}
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Todays Bookings"}
              amount={data?.today_bookings}
              icon={<TodayIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Upcoming Bookings"}
              amount={data?.upcoming_bookings}
              icon={<UpcomingIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Bookings this Month"}
              amount={data?.bookings_this_month}
              icon={<CalendarMonthIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Past Bookings"}
              amount={data?.past_bookings}
              icon={<EventAvailableIcon />}
            />
          </Grid>
          <Grid container item xs={12} spacing={2}>
            {data?.today_bookings_data.length > 0 ? (
              <>
                <Grid item xs={12} textAlign="end">
                  <Typography fontWeight="bold">Todays Bookings</Typography>
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
              </>
            ) : (
              <>
                <Grid item xs={12} textAlign="start">
                  <Typography fontWeight="bold">
                    No Bookings for Today
                  </Typography>
                  <Divider />
                </Grid>
              </>
            )}
          </Grid>
          <Grid container item xs={12} spacing={2}>
            {data?.upcoming_bookings_data.length > 0 ? (
              <>
                <Grid item xs={12} textAlign="start">
                  <Typography fontWeight="bold">Upcoming Bookings</Typography>
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
              </>
            ) : (
              <>
                <Grid item xs={12} textAlign="start">
                  <Typography fontWeight="bold">
                    No Upcoming Bookings to Show
                  </Typography>
                  <Divider />
                </Grid>
              </>
            )}
          </Grid>{" "}
          <Grid container item xs={12} spacing={2}>
            {data?.past_bookings_data.length > 0 ? (
              <>
                <Grid item xs={12} textAlign="start">
                  <Typography fontWeight="bold">Past Bookings</Typography>
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
              </>
            ) : (
              <>
                <Grid item xs={12} textAlign="start">
                  <Typography fontWeight="bold">
                    No Past Bookings Data to Show
                  </Typography>
                  <Divider />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookingSummary;
