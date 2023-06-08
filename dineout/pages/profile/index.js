import UserLayout from "@/layouts/user";
import React from "react";
import { Card, CardContent, Typography, Avatar, Grid } from "@mui/material";
import { selectCurrentUser } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import { useGetUserProfileQuery } from "@/store/api/restaurants";

function index() {
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
    </UserLayout>
  );
}

export default index;
