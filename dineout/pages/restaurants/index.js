// packages
import { Button, Container, Grid, Typography } from "@mui/material";
// layouts
import Navbar from "@/layouts/restaurant/Navbar";
// components
import Card from "@/components/Card";
import Filters from "@/sections/user/restaurants/Filters";
import { useGetAllRestaurantQuery } from "@/store/api/restaurants";
import { useState } from "react";

const Restaurants = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    cuisines: "",
    tags: "",
    types: "",
  });

  const { data, isLoading } = useGetAllRestaurantQuery(selectedFilters, {
    refetchOnMountOrArgChange: true,
  });

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={3}>
            <Filters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </Grid>
          <Grid container item xs={9} spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold">
                Best Restaurants Near me
              </Typography>
            </Grid>
            {isLoading
              ? "loading..."
              : data?.results?.map((restaurant) => (
                  <Grid item xs={12} sm={4} md={4} key={restaurant.id}>
                    <Card {...restaurant} />
                  </Grid>
                ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Restaurants;
