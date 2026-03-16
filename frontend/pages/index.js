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
import FillerButtons from "@/components/FillerButtons";
import { selectCurrentLocation } from "@/store/slices/restaurantSlice";
import { useSelector } from "react-redux";
import { settings } from "@/sections/user/restaurants/SliderSettings";
import Skeleton from "@mui/material/Skeleton";

const SectionHeading = ({ overline, title }) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      sx={{
        fontFamily: "var(--font-body)",
        fontSize: "11px",
        fontWeight: 500,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "#C94F35",
        mb: 0.75,
        display: "block",
      }}
    >
      {overline}
    </Typography>
    <Typography
      variant="h4"
      sx={{
        fontFamily: '"Cormorant Garamond", Georgia, serif',
        fontWeight: 600,
        color: "#1A1210",
        fontSize: "clamp(30px, 3.5vw, 40px)",
        lineHeight: 1.15,
      }}
    >
      {title}
    </Typography>
  </Box>
);

const CardSkeleton = () => (
  <Box sx={{ borderRadius: "8px", overflow: "hidden" }}>
    <Skeleton animation="wave" variant="rectangular" height={180} sx={{ borderRadius: "8px 8px 0 0" }} />
    <Box sx={{ p: 2, backgroundColor: "white", borderRadius: "0 0 8px 8px" }}>
      <Skeleton animation="wave" height={22} width="70%" />
      <Skeleton animation="wave" height={16} width="50%" sx={{ mt: 0.5 }} />
    </Box>
  </Box>
);

const sliderSx = {
  "& .slick-track": {
    display: "flex",
    marginLeft: "0px",
    "& .slick-slide": {
      marginRight: "16px",
    },
    "& .slick-slide:last-child": {
      marginRight: 0,
    },
  },
};

const Home = () => {
  const selectedLocation = useSelector(selectCurrentLocation);
  const selectedFilters = {
    cuisines: "",
    tags: "",
    types: "",
    location: selectedLocation.name,
  };

  const {
    data: allRestaurans,
    isLoading,
    isError,
  } = useGetAllRestaurantQuery(
    { selectedFilters, page: 1 },
    { refetchOnMountOrArgChange: true }
  );

  const {
    data: featuredRestaurant,
    isLoading: featuredLoading,
    isError: featuredError,
  } = useGetFeaturedRestaurantQuery(
    { selectedFilters },
    { refetchOnMountOrArgChange: true }
  );

  return (
    <UserLayout>
      {/* Near You section */}
      <Box sx={{ py: { xs: 5, md: 7 }, backgroundColor: "#F5EDE0" }}>
        <Container maxWidth="lg">
          <SectionHeading overline="Near You" title="Restaurants in Your Area" />
          <Grid container xs={12} sx={sliderSx}>
            <Grid item xs={12}>
              {isLoading || isError ? (
                <Slider {...settings}>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <CardSkeleton key={index} />
                  ))}
                </Slider>
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

      {/* Featured section */}
      <Box sx={{ py: { xs: 5, md: 7 }, backgroundColor: "#EDE3D2" }}>
        <Container maxWidth="lg">
          <SectionHeading overline="Editor's Pick" title="Featured Restaurants" />
          <Grid container xs={12} sx={sliderSx}>
            <Grid item xs={12}>
              {featuredLoading || featuredError ? (
                <Slider {...settings}>
                  {Array.from({ length: 4 }).map((_, index) => (
                    <CardSkeleton key={index} />
                  ))}
                </Slider>
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
