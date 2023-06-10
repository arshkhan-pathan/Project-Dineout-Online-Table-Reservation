import UserLayout from "@/layouts/user";
import React from "react";
import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import { selectCurrentUser } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import { useGetUserProfileQuery } from "@/store/api/restaurants";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "restaurant",
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

    width: 150,
    editable: false,
  },
  {
    field: "end_time",
    headerName: "End Time",

    width: 150,
    editable: false,
  },
  {
    field: "guests",
    headerName: "Guests",
    type: "number",
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
    field: "order_payment_id",
    headerName: "Payment Id",
    width: 150,
    editable: false,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function Index() {
  // Fetch user Profile By its ID
  const user = useSelector(selectCurrentUser);
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
              src={user?.image}
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
              </Box>
            </>
          ) : (
            <>
              <h1>No Past Bookings to show</h1>
            </>
          )}
        </Grid>
      </Grid>
    </UserLayout>
  );
}

export default Index;
