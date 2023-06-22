import { Grid, Box, Typography, Button } from "@mui/material";
import Widget from "../../../components/Widget";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import { useGetRestaurantBookingsDataQuery } from "@/store/api/restaurant";
import { Divider } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import RenderCancel from "@/sections/user/profile/Grid/RenderCancel";
import { useDeleteBookingsMutation } from "@/store/api/profile";
import useToggle from "@/hooks/useToggle";

const commonColumns = [
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
    field: "order_payment_id",
    headerName: "Payment Id",
    width: 200,
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

    width: 100,
    editable: false,
  },
  {
    field: "tableNo",
    headerName: "Table",
    type: "number",
    width: 100,
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
  const [deleteBookings] = useDeleteBookingsMutation();
  const { isOpen, onOpen, onClose } = useToggle();

  const user = useSelector(selectCurrentUser);
  const cancelColums = [
    ...commonColumns,
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) =>
        RenderCancel(params, deleteBookings, 2, isOpen, onOpen, onClose),
    },
  ];

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
                    columns={cancelColums}
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
                    columns={cancelColums}
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
                    columns={commonColumns}
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
