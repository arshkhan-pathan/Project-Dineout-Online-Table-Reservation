import { Box, Container, Grid, Typography, Pagination, Skeleton } from "@mui/material";
import Navbar from "@/layouts/restaurant/Navbar";
import Card from "@/components/Card";
import FillerButtons from "@/components/FillerButtons";
import { useGetAllRestaurantQuery } from "@/store/api/restaurants";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useState } from "react";

const CardSkeleton = () => (
  <Box sx={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.07)" }}>
    <Skeleton animation="wave" variant="rectangular" sx={{ paddingTop: "60%", width: "100%" }} />
    <Box sx={{ p: 2, backgroundColor: "white" }}>
      <Skeleton animation="wave" height={20} width="70%" />
      <Skeleton animation="wave" height={14} width="50%" sx={{ mt: 0.5 }} />
    </Box>
  </Box>
);

const Restaurants = () => {
  const selectedFilters = {
    cuisines: "",
    tags: "",
    types: "",
    location: "",
  };
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useGetAllRestaurantQuery(
    { selectedFilters, page: pageNumber },
    { refetchOnMountOrArgChange: true }
  );

  const onPageChange = (event, value) => {
    setPageNumber(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Restaurants — Dineout</title>
      </Head>
      <Navbar />

      {/* Page hero strip */}
      <Box
        sx={{
          backgroundColor: "#1A1210",
          py: { xs: 4, md: 5 },
          px: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.30em",
              textTransform: "uppercase",
              color: "#C8922A",
              mb: 1,
            }}
          >
            Explore
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 600,
              color: "#F0E6D3",
              fontSize: "clamp(28px, 4vw, 46px)",
              lineHeight: 1.15,
            }}
          >
            All Restaurants in Surat
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "rgba(240,230,211,0.50)",
              mt: 1,
              fontWeight: 300,
            }}
          >
            Discover every dining experience the city has to offer.
          </Typography>
        </Container>
      </Box>

      {/* Results grid */}
      <Box sx={{ backgroundColor: "#F5EDE0", minHeight: "60vh", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 3, display: "flex", alignItems: "baseline", gap: 1.5 }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 600,
                color: "#1A1210",
                fontSize: "clamp(22px, 2.5vw, 30px)",
              }}
            >
              Best Restaurants
            </Typography>
            {data?.count > 0 && (
              <Typography
                sx={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9A8878" }}
              >
                {data.count} found
              </Typography>
            )}
          </Box>

          <Grid container spacing={2}>
            {isLoading || isError
              ? Array.from({ length: 8 }).map((_, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <CardSkeleton />
                  </Grid>
                ))
              : data?.results?.map((restaurant) => (
                  <Grid item xs={12} sm={6} md={3} key={restaurant.id}>
                    <Card {...restaurant} showExtra={true} />
                  </Grid>
                ))}
          </Grid>

          {/* Pagination */}
          {data?.count > 12 && (
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Pagination
                count={Math.ceil(data.count / 12)}
                onChange={onPageChange}
                page={pageNumber}
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "#5A4E44",
                    borderRadius: "4px",
                  },
                  "& .MuiPaginationItem-root.Mui-selected": {
                    backgroundColor: "#C94F35",
                    color: "white",
                    "&:hover": { backgroundColor: "#A03B24" },
                  },
                }}
              />
            </Box>
          )}

          <FillerButtons />
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Restaurants;
