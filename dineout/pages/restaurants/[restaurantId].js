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

const Details = styled.div`
  .restaurant__mainImg--parent {
    width: 100%;
    height: 430px;
    overflow: hidden;
    .leftArrow {
      width: 80px;
      height: 80px;
      position: relative;
      top: 156px;
      left: -30px;
      border-radius: 50px;
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #333333;
    }
    .rightArrow {
      width: 80px;
      height: 80px;
      position: relative;
      top: 80px;
      left: 660px;
      border-radius: 50px;
      background: #333333;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    > img {
      width: 100%;
      position: static;
      margin-top: -160px;
      border-radius: 4px 4px 0 0;
    }
  }

  .restaurant__details {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    position: relative;
  }

  .restaurant__details--left {
    > h2 {
      color: #333333;
      font-weight: 700;
      line-height: 30px;
      font-size: 24px;
    }
  }

  .restaurant__details--sections {
    display: flex;
    flex-direction: row;
    margin-top: 16px;
    align-items: center;

    > p,
    > span {
      font-size: 14px;
      weight: 400;
      line-height: 20px;
    }

    > span {
      margin: 0 5px;
    }

    .restaurant__timing {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 7px;

      > span {
        &:nth-child(1) {
          color: #3595ff;
        }
      }
      > img {
        height: 9.3px;
        weight: 5.49px;
      }
    }
  }

  .direction {
    display: flex;
    flex-direction: row;
    color: #3595ff;
    line-height: 20px;
    font-size: 14px;
    font-weight: 700;
    margin-left: 7px;
  }

  .restaurant__details--right {
    > .restaurant__details--sections {
      background-color: #51ba64;
      height: 46px;
      width: 64px;
      color: #ffffff;
      font-weight: 700;
      font-size: 20px;
      line-height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0px;
      right: 16px;
      border-radius: 2px;

      > p,
      > span {
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
      }
      > p {
        margin-left: 10px;
      }
      > span {
        margin-right: 10px;
      }
    }

    > div {
      &:nth-child(2) {
        position: absolute;
        top: 94px;
        right: 16px;
        color: #3595ff;
        text-decoration: underline dotted #3595ff;
        text-underline-position: under;
        text-decoration-thickness: 2px;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      }
    }
  }
`;

const RestaurantInfo = () => {
  const router = useRouter();
  const { restaurantId } = router.query;

  console.log(restaurantId);
  let { data } = useGetRestaurantQuery(restaurantId, {
    refetchOnMountOrArgChange: true,
  });

  console.log(data);

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
            <Details> </Details>
            <AboutUs />
          </Left>
        </Main>
      </Wrapper>
    </>
  );
};

export default RestaurantInfo;
