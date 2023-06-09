// packages
import Slider from "react-slick";
import { Box, Container, Typography, Grid } from "@mui/material";
// layouts
import UserLayout from "@/layouts/user";
// store
import { useGetAllRestaurantQuery } from "@/store/api/restaurants";
// components
import Card from "@/components/Card";
import { useEffect } from "react";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Home = () => {
  const { data: allRestaurans, isLoading } = useGetAllRestaurantQuery({ refetchOnMountOrArgChange: true });

  return (
    <UserLayout>
      <Box sx={{mt: 4}}>
        <Container maxWidth="lg">
          <Grid container xs={12} sx={{ height: "fit-content" }}>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold">
                Restaurants Near You
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Slider {...settings}> 
                {allRestaurans?.results?.map((restaurant) => (
                    <Card key={restaurant.id} {...restaurant} />
                ))}
              </Slider>

              <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </UserLayout>
  );
};

export default Home;
