// packages
import { useRouter } from "next/router";
import Slider from "react-slick";
import styled from "styled-components";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Breadcrumbs,
  Chip,
  Tooltip,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
// layout
import Navbar from "@/layouts/restaurant/Navbar";
import { useGetRestaurantQuery } from "@/store/api/restaurants";
import Reservation from "@/sections/user/restaurant/Reservation";
import AboutUs from "@/components/Restaurants/AboutUs";
import FoodMenu from "@/components/Restaurants/FoodMenu";
import SubMenu from "@/components/Restaurants/Submenu";
import Footer from "@/components/Footer";
import ReviewSection from "@/components/Restaurants/ReviewSection";
import ReviewComponent from "@/sections/user/restaurant/ReviewComponent";
import { useState } from "react";
const Wrapper = styled.div`
  padding: 26px 10.56% 48px;
  color: #797979;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  /* width: 79vw; */
  display: flex;
  justify-content: space-between;
  gap: 1.143vw;
  margin: 18px 0px 24px;
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  > div {
    background-color: #ffffff;
    border-radius: 4px;
  }
`;

const RestaurantInfo = () => {
  const router = useRouter();
  const { restaurantId } = router.query;
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const user = useSelector(selectCurrentUser);

  const handleReviewSubmit = () => {
    console.log("Review submitted:", reviewText, "Rating:", rating);
    setReviewText("");
    setRating(0);
  };

  console.log(restaurantId);
  let { data } = useGetRestaurantQuery(restaurantId, {
    refetchOnMountOrArgChange: true,
  });

  // console.log(data);

  const breadcrumbs = [
    <Typography sx={{ fontSize: 14 }} key="1" color="text.disabled">
      Restaurants
    </Typography>,
    <Typography sx={{ fontSize: 14 }} key="2" color="text.primary">
      {data?.name}
    </Typography>,
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 1 }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ marginTop: "35px", marginBottom: "8px" }}
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box>
              <Card elevation={0}>
                <CardContent sx={{ padding: 0 }}>
                  <Slider
                    {...settings}
                    style={{
                      height: 400,
                      borderRadius: 0,
                      overflow: "hidden",
                      marginBottom: "10px",
                    }}
                  >
                    {data?.images.map((image, id) => (
                      <div key={id}>
                        <img
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          src={image.image}
                          alt={`Image ${id + 1}`}
                        />
                      </div>
                    ))}
                  </Slider>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingInline: "15px",
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h5"
                        component="h4"
                        sx={{ fontWeight: "bold" }}
                      >
                        {data?.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#696969" }}>
                        {data?.address} | {data?.locality} | {data?.city}
                      </Typography>

                      <Typography variant="body2" sx={{ color: "#696969" }}>
                        Time:
                        <Button
                          variant="text"
                          sx={{ textTransform: "capitalize" }}
                        >
                          Opens at {data?.opening_time}
                        </Button>
                      </Typography>
                    </Box>
                    <Chip
                      label={data?.ratings}
                      color="success"
                      sx={{
                        borderRadius: 1,
                        height: 45,
                        width: 55,
                        fontSize: 16,
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Reservation user={user} />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={8}>
            <Main>
              <Left>
                <SubMenu />
                <FoodMenu menu={data?.menuImages} />
                <AboutUs
                  cuisines={data?.cuisines}
                  types={data?.types}
                  charge={data?.unit_charge}
                  average={data?.avg_cost}
                  tags={data?.tags}
                />
                <ReviewComponent
                  rating={rating}
                  reviewText={reviewText}
                  setRating={setRating}
                  setReviewText={setReviewText}
                  handleReviewSubmit={handleReviewSubmit}
                ></ReviewComponent>
                <ReviewSection reviews={data?.reviews}></ReviewSection>
                <></>
              </Left>
            </Main>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default RestaurantInfo;
