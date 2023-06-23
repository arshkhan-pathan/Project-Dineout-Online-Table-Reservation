// packages
import Slider from "react-slick";
import { Box, Container, Typography, Grid } from "@mui/material";
// layouts
import UserLayout from "@/layouts/user";
// store
import {
  useGetAllRestaurantQuery,
  useGetFeaturedRestaurantQuery,
} from "@/store/api/restaurants";
// components
import Card from "@/components/Card";
import { useEffect } from "react";
import FillerButtons from "@/components/FillerButtons";
import { selectCurrentLocation } from "@/store/slices/restaurantSlice";
import { useSelector } from "react-redux";
import { settings } from "@/sections/user/restaurants/SliderSettings";

const Home = () => {
  const selectedLocation = useSelector(selectCurrentLocation);
  console.log(selectedLocation);
  const selectedFilters = {
    cuisines: "",
    tags: "",
    types: "",
    location: selectedLocation.name,
  };
  console.log(selectedFilters);

  const {
    data: allRestaurans,
    isLoading,
    isError,
  } = useGetAllRestaurantQuery(
    { selectedFilters, page: 1 },
    { refetchOnMountOrArgChange: true }
  );

  const { data: featuredRestaurant, isLoading: featuredLoading } =
    useGetFeaturedRestaurantQuery(
      { selectedFilters },
      { refetchOnMountOrArgChange: true }
    );

  return (
    <UserLayout>
      <Box sx={{ mt: 4 }}>
        <Container maxWidth="lg">
          <Grid
            container
            xs={12}
            sx={{
              height: "fit-content",
              "& .slick-track": {
                display: "flex",
                marginLeft: "0px",
                "& .slick-slide": {
                  marginRight: "15px",
                },

                "& .slick-slide:last-child": {
                  marginRight: "auto",
                },
              },
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: "20px" }}
              >
                Restaurants Near You
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {isLoading || isError ? (
                "isloading"
              ) : (
                <Slider {...settings}>
                  {allRestaurans?.results?.map((restaurant) => (
                    <Card key={restaurant.id} {...restaurant} />
                  ))}
                </Slider>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid
            container
            xs={12}
            sx={{
              height: "fit-content",
              "& .slick-track": {
                display: "flex",
                marginLeft: "0px",
                "& .slick-slide": {
                  marginRight: "15px",
                },

                "& .slick-slide:last-child": {
                  marginRight: "auto",
                },
              },
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ marginBottom: "20px" }}
              >
                Featured Restaurants
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {featuredLoading ? (
                "loadinf"
              ) : (
                <Slider {...settings}>
                  {featuredRestaurant?.map((restaurant) => (
                    <Card key={restaurant.id} {...restaurant} />
                  ))}
                </Slider>
              )}
            </Grid>
          </Grid>
          <FillerButtons />
        </Container>
      </Box>
    </UserLayout>
  );
};

export default Home;
