// packages
import { useRouter } from "next/router";
import Slider from "react-slick";
import styled from "styled-components";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Breadcrumbs,
  Chip,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
// layout
import Navbar from "@/layouts/restaurant/Navbar";
import { useGetRestaurantQuery } from "@/store/api/restaurants";
import Reservation from "@/sections/user/restaurant/Reservation";
import AboutUs from "@/components/Restaurants/AboutUs";
import FoodMenu from "@/components/Restaurants/FoodMenu";
import SubMenu from "@/components/Restaurants/Submenu";
import Footer from "@/components/Footer";
const Wrapper = styled.div`
  width: 100vw;
  padding: 26px 10.56% 48px;
  background-color: #e5e5e5;
  color: #797979;
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  /* width: 79vw; */
  display: flex;
  justify-content: space-between;
  gap: 1.143vw;
  margin: 30px 0px 24px;
`;

const Left = styled.div`
  width: 52.2vw;
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
      {restaurantId}
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
        >
          {breadcrumbs}
        </Breadcrumbs>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Box>
              <Card elevation={0}>
                <CardContent>
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
                      <Typography sx={{ fontSize: 12 }}>
                        {data?.locality},{data?.address} , {data?.city}
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
            <Reservation />
          </Grid>
        </Grid>
      </Container>
      <Wrapper>
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
          </Left>
        </Main>
      </Wrapper>
      <Footer></Footer>
    </>
  );
};

export default RestaurantInfo;
