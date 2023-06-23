// pages/search.js
import { useRouter } from "next/router";
// packages
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
// layouts
import Navbar from "@/layouts/restaurant/Navbar";
// components
import Card from "@/components/Card";
import Filters from "@/sections/user/restaurants/Filters";
import { useGetAllRestaurantQuery } from "@/store/api/restaurants";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { Pagination } from "@mui/material";
import Head from "next/head";

const SearchPage = () => {
  const router = useRouter();
  const { q } = router.query; // Retrieving the search query from the URL

  const [selectedFilters, setSelectedFilters] = useState({
    cuisines: "",
    tags: "",
    types: "",
    location: "",
  });
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useGetAllRestaurantQuery(
    {
      selectedFilters,
      page: pageNumber,
      search: encodeURIComponent(q),
    },
    {
      refetchOnMountOrArgChange: true,
    }
  );
  const onPageChange = (event, value) => {
    console.log("on page change ", value);
    setPageNumber(value);
  };

  return (
    <>
      <Head>
        <title>Search Results for {q}</title>
      </Head>
      <Navbar />
      <Container maxWidth="lg" sx={{ my: 5 }}>
        <Grid container spacing={3} sx={{ mt: 1 }}>
          <Grid item xs={3}>
            <Filters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </Grid>
          <Grid
            container
            item
            xs={9}
            spacing={2}
            sx={{ height: "fit-content" }}
          >
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold">
                Best Restaurants Near me
              </Typography>
            </Grid>
            {isLoading || isError ? (
              <CircularProgress />
            ) : (
              data?.results?.map((restaurant) => (
                <Grid item xs={12} sm={4} md={4} key={restaurant.id}>
                  <Card {...restaurant} />
                </Grid>
              ))
            )}
            <Grid item xs={12} alignItems="center">
              <div>
                <Pagination
                  count={Math.ceil(data?.count / 12)}
                  onChange={onPageChange}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default SearchPage;
