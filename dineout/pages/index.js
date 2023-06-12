// packages
import Slider from "react-slick";
import { Box, Container, Typography, Grid, IconButton } from "@mui/material";
// layouts
import UserLayout from "@/layouts/user";
// store
import { useGetAllRestaurantQuery } from "@/store/api/restaurants";
// components
import Card from "@/components/Card";
import { useEffect } from "react";
import FillerButtons from "@/components/FillerButtons";
import { selectCurrentLocation } from "@/store/slices/restaurantSlice";
import { useSelector } from "react-redux";

const arrowSx = {
  display: "block",
  background: "#ff645a",
  padding: 1,
  borderRadius: 1,
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    background: "red",
  },
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  const isDisabled = className.includes("slick-disabled");
  return (
    <Box
      className={className}
      sx={{
        ...style,
        ...arrowSx,
        right: "-40px",
        display: isDisabled ? "none" : "flex",
      }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  const isDisabled = className.includes("slick-disabled");
  return (
    <Box
      className={className}
      sx={{
        ...style,
        ...arrowSx,
        left: "-40px",
        display: isDisabled ? "none" : "flex",
      }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

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

  const { data: allRestaurans, isLoading } = useGetAllRestaurantQuery(
    { selectedFilters, page: 1 },
    { refetchOnMountOrArgChange: true }
  );

  useEffect(() => {
    console.log("dddd", allRestaurans);
  }, [allRestaurans]);

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
                gap: "15px",
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
              <Slider {...settings}>
                {allRestaurans?.results?.map((restaurant) => (
                  <Card key={restaurant.id} {...restaurant} />
                ))}
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Container maxWidth="lg">
          <Grid
            container
            xs={12}
            sx={{
              height: "fit-content",
              "& .slick-track": {
                display: "flex",
                gap: "15px",
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
              <Slider {...settings}>
                {allRestaurans?.results?.map((restaurant) => (
                  <Card key={restaurant.id} {...restaurant} />
                ))}
              </Slider>
            </Grid>
          </Grid>
          <FillerButtons></FillerButtons>
        </Container>
      </Box>
    </UserLayout>
  );
};

export default Home;
