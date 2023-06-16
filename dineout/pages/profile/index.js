import UserLayout from "@/layouts/user";
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Button,
} from "@mui/material";
import { selectCurrentUser } from "@/store/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserProfileQuery } from "@/store/api/restaurants";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import withAuth from "@/HOC/withAuth";
import CardActions from "@mui/material/CardActions";
import useToggle from "@/hooks/useToggle";
import Modal from "@/components/Modal";
import { useState } from "react";
import EditProfile from "@/sections/user/profile/EditProfile";
import ChangePassword from "@/sections/user/profile/ChangePassword";
import baseApi from "@/store/api/base";
import { useDeleteBookingsMutation } from "@/store/api/profile";
import { toast } from "react-hot-toast";

const columns1 = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "restaurant_name",
    headerName: "Restaurant Name",
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
    field: "start_time",
    headerName: "Time",

    width: 100,
    editable: false,
  },
  {
    field: "end_time",
    headerName: "End Time",

    width: 100,
    editable: false,
  },
  {
    field: "guests",
    headerName: "Guests",
    type: "number",
    width: 100,
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
    field: "order_payment_id",
    headerName: "Payment Id",
    width: 150,
    editable: false,
  },
];

function Index() {
  const [deleteBookings] = useDeleteBookingsMutation();
  const renderCancel = (params) => {
    const bookingId = params.row.id;
    const handleCancelBooking = (value) => {
      console.log(value, "line 31");
      const data = { id: value, role: { role: 3 } };
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
      field: "restaurant_name",
      headerName: "Restaurant Name",
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
      field: "start_time",
      headerName: "Time",

      width: 100,
      editable: false,
    },
    {
      field: "end_time",
      headerName: "End Time",

      width: 100,
      editable: false,
    },
    {
      field: "guests",
      headerName: "Guests",
      type: "number",
      width: 100,
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
      field: "order_payment_id",
      headerName: "Payment Id",
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
  // Fetch user Profile By its ID
  const { isOpen, onOpen, onClose, onToggle } = useToggle();
  // Onopen will create modal
  const user = useSelector(selectCurrentUser);
  const [modalContent, setModalContent] = useState();
  console.log(user);
  const { data } = useGetUserProfileQuery(user?.id, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <UserLayout title="Profile Page">
      <div>
        <Card style={{ maxWidth: 400, margin: "auto" }}>
          <CardContent>
            <Avatar
              style={{
                width: 80,
                height: 80,
                margin: "auto",
                marginBottom: 16,
              }}
              alt="Profile"
              src={data?.user?.image_url}
            />
            <Typography variant="h6" component="h2" align="center">
              {user?.first_name}
            </Typography>
            <Typography
              variant="body1"
              component="p"
              align="center"
              gutterBottom
            >
              Total Restaurants Dined In: {data?.total_bookings}
            </Typography>
            {/* Additional fields or information can be added here */}
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                setModalContent("Edit");
                onOpen();
              }}
            >
              Edit
            </Button>
            <Button
              size="small"
              onClick={() => {
                setModalContent("Change");
                onOpen();
              }}
            >
              Change Password
            </Button>
          </CardActions>
        </Card>
        <Grid>{/* Add more components or content here */}</Grid>
      </div>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          {data?.upcoming_bookings.length > 0 ? (
            <h1>Upcoming Bookings</h1>
          ) : (
            <h1>No Upcoming Bookings to show</h1>
          )}
          {data?.upcoming_bookings.length > 0 && (
            <Box sx={{ height: 300, width: "100%" }}>
              <DataGrid
                rows={data?.upcoming_bookings || []}
                columns={columns}
                autoHeight
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
            </Box>
          )}
        </Grid>
        <Grid item xs={3}>
          {data?.past_bookings?.length > 0 ? (
            <>
              <h1>Past Bookings</h1>
              <Box sx={{ height: 300, width: "100%" }}>
                <DataGrid
                  rows={data?.past_bookings || []}
                  columns={columns1}
                  autoHeight
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
              </Box>
            </>
          ) : (
            <>
              <h1>No Past Bookings to show</h1>
            </>
          )}
        </Grid>
      </Grid>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          {modalContent == "Edit" ? <EditProfile /> : <ChangePassword />}
        </Modal>
      )}
    </UserLayout>
  );
}

export default withAuth(Index, ["3"], "/");
