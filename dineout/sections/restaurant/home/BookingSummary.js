import { Grid, Box, Typography, Button } from "@mui/material";
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
import { useDeleteBookingsMutation } from "@/store/api/profile";
import { toast } from "react-hot-toast";

const renderCancel = (params) => {
  const [deleteBookings] = useDeleteBookingsMutation();
  const bookingId = params.row.id;
  const handleCancelBooking = (value) => {
    console.log(value, "line 31");
    const data = { id: value, role: { role: 2 } };
    console.log(data);
    deleteBookings(data)
      .unwrap()
      .then((res) => {
        console.log(res);
        toast.success("Cancelled");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.data.error);
      });
  };
  return (
    <Button
      variant="contained"
      sx={{ color: "whitesmoke" }}
      onClick={() => handleCancelBooking(bookingId)}
    >
      Cancel
    </Button>
  );
};
const columns = [
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
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: renderCancel,
  },
];
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
                <Grid item xs={12}>
                  <Typography fontWeight="bold">Todays Bookings</Typography>
                </Grid>
                <Grid item xs={12}>
                  <DataGrid
                    rows={data?.today_bookings_data || []}
                    autoHeight
                    columns={columns}
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
                    autoHeight
                    rows={data?.upcoming_bookings_data || []}
                    columns={columns}
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
          </Grid>
          <Grid container item xs={12} spacing={2}>
            {data?.past_bookings_data.length > 0 ? (
              <>
                <Grid item xs={12} textAlign="start">
                  <Typography fontWeight="bold">Past Bookings</Typography>
                </Grid>
                <Grid item xs={12}>
                  <DataGrid
                    autoHeight
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
