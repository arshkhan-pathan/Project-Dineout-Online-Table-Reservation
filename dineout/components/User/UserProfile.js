import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bookings: [
      { id: 1, date: "2023-01-01", restaurant: "Restaurant A" },
      { id: 2, date: "2023-02-15", restaurant: "Restaurant B" },
      { id: 3, date: "2023-03-10", restaurant: "Restaurant C" },
    ],
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={3} lg={2}>
            <Avatar alt={user.name} src="/path/to/avatar.jpg" />
          </Grid>
          <Grid item xs={12} md={9} lg={10}>
            <Typography variant="h4">{user.name}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {user.email}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography variant="h5">Past Bookings</Typography>
        {user.bookings.map((booking) => (
          <Box key={booking.id} mt={2}>
            <Typography variant="subtitle1">Date: {booking.date}</Typography>
            <Typography variant="subtitle1">
              Restaurant: {booking.restaurant}
            </Typography>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
