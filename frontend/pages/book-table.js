import { Box, Container, Grid, Typography, Pagination, Skeleton, Drawer, Button, IconButton } from "@mui/material";
import Navbar from "@/layouts/restaurant/Navbar";
import Card from "@/components/Card";
import Filters from "@/sections/user/restaurants/Filters";
import { useGetAllRestaurantQuery } from "@/store/api/restaurants";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "@/store/slices/restaurantSlice";
import Head from "next/head";
import Image from "next/image";
import TuneIcon from "@mui/icons-material/Tune";
import CloseIcon from "@mui/icons-material/Close";

const CardSkeleton = () => (
  <Box sx={{ borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(0,0,0,0.07)" }}>
    <Skeleton animation="wave" variant="rectangular" sx={{ paddingTop: "60%", width: "100%" }} />
    <Box sx={{ p: 2, backgroundColor: "white" }}>
      <Skeleton animation="wave" height={20} width="70%" />
      <Skeleton animation="wave" height={14} width="50%" sx={{ mt: 0.5 }} />
    </Box>
  </Box>
);

const BookTable = () => {
  const location = useSelector(selectCurrentLocation);
  const [selectedFilters, setSelectedFilters] = useState({
    cuisines: "",
    tags: "",
    types: "",
    location: location.name,
  });
  const [pageNumber, setPageNumber] = useState(1);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);

  useEffect(() => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      location: location.name,
    }));
  }, [location]);

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
        <title>Book a Table — Dineout</title>
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
            Reserve Your Seat
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
            Book a Table
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
            Filter by cuisine, type, or amenity — find the perfect spot.
          </Typography>
        </Container>
      </Box>

      {/* Main content */}
      <Box sx={{ backgroundColor: "#F5EDE0", minHeight: "60vh", py: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Mobile filter button */}
          <Box sx={{ display: { xs: "flex", md: "none" }, mb: 2 }}>
            <Button
              onClick={() => setFilterDrawerOpen(true)}
              startIcon={<TuneIcon />}
              variant="outlined"
              sx={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "#C94F35",
                borderColor: "rgba(201,79,53,0.40)",
                borderRadius: "8px",
                textTransform: "none",
                px: 2.5,
                py: 1,
                "&:hover": { borderColor: "#C94F35", backgroundColor: "rgba(201,79,53,0.05)" },
              }}
            >
              Filters
            </Button>
          </Box>

          {/* Mobile filter drawer */}
          <Drawer
            anchor="bottom"
            open={filterDrawerOpen}
            onClose={() => setFilterDrawerOpen(false)}
            PaperProps={{
              sx: {
                borderTopLeftRadius: "16px",
                borderTopRightRadius: "16px",
                maxHeight: "80vh",
                backgroundColor: "#FDFAF6",
                px: 2,
                pb: 3,
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", pt: 2, pb: 1.5 }}>
              <Typography sx={{ fontFamily: "var(--font-body)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.20em", textTransform: "uppercase", color: "#9A8878" }}>
                Filter By
              </Typography>
              <IconButton onClick={() => setFilterDrawerOpen(false)} size="small" sx={{ color: "#5A4E44" }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            <Box sx={{ overflowY: "auto" }}>
              <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
            </Box>
            <Box sx={{ pt: 2 }}>
              <Button
                fullWidth
                onClick={() => setFilterDrawerOpen(false)}
                variant="contained"
                sx={{
                  backgroundColor: "#C94F35",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "15px",
                  textTransform: "none",
                  borderRadius: "8px",
                  py: 1.4,
                  "&:hover": { backgroundColor: "#A03B24" },
                }}
              >
                Show Results
              </Button>
            </Box>
          </Drawer>

          <Grid container spacing={3}>
            {/* Filter sidebar — desktop only */}
            <Grid item xs={12} md={3} sx={{ display: { xs: "none", md: "block" } }}>
              <Box
                sx={{
                  position: { md: "sticky" },
                  top: { md: "130px" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.20em",
                    textTransform: "uppercase",
                    color: "#9A8878",
                    mb: 1.5,
                  }}
                >
                  Filter By
                </Typography>
                <Filters
                  selectedFilters={selectedFilters}
                  setSelectedFilters={setSelectedFilters}
                />
              </Box>
            </Grid>

            {/* Results */}
            <Grid item xs={12} md={9}>
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
                  Best Restaurants Near Me
                </Typography>
                {data?.count > 0 && (
                  <Typography
                    sx={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "#9A8878",
                    }}
                  >
                    {data.count} found
                  </Typography>
                )}
              </Box>

              <Grid container spacing={2}>
                {isLoading || isError ? (
                  Array.from({ length: 6 }).map((_, i) => (
                    <Grid item xs={12} sm={6} md={4} key={i}>
                      <CardSkeleton />
                    </Grid>
                  ))
                ) : data?.results?.length > 0 ? (
                  data.results.map((restaurant) => (
                    <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
                      <Card {...restaurant} showExtra />
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12} sx={{ textAlign: "center", py: 6 }}>
                    <Image
                      src="https://res.cloudinary.com/dhe9hmzbn/image/upload/v1687760200/no-result_zmcl61.gif"
                      alt="No Results Found"
                      height={300}
                      width={420}
                      style={{ maxWidth: "100%", height: "auto", opacity: 0.8 }}
                    />
                    <Typography
                      sx={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontSize: "22px",
                        color: "#5A4E44",
                        mt: 2,
                      }}
                    >
                      No restaurants found
                    </Typography>
                    <Typography sx={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "#9A8878", mt: 0.5 }}>
                      Try adjusting your filters or location.
                    </Typography>
                  </Grid>
                )}
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
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default BookTable;
