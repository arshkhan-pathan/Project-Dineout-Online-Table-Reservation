// packages
import { Button, Container, Grid, Typography } from "@mui/material";
// layouts
import Navbar from "@/layouts/restaurant/Navbar";
// components
import Card from "@/components/Card";
import Filters from "@/sections/user/restaurants/Filters";
import { useGetAllRestaurantQuery } from "@/store/api/restaurants";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { selectCurrentLocation } from "@/store/slices/restaurantSlice";
import Head from "next/head";

const BookTable = () => {
    const location = useSelector(selectCurrentLocation);
    const [selectedFilters, setSelectedFilters] = useState({
        cuisines: "",
        tags: "",
        types: "",
        location: location.name,
    });
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            location: location.name,
        }));
    }, [location]);

    const { data, isLoading } = useGetAllRestaurantQuery(
        { selectedFilters, page: pageNumber },
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
                <title>All Restaurants</title>
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
                        {isLoading
                            ? "loading..."
                            : data?.results?.map((restaurant) => (
                                <Grid item xs={12} sm={4} md={4} key={restaurant.id}>
                                    <Card {...restaurant} showExtra={true} />
                                </Grid>
                            ))}
                        <Grid
                            container
                            item
                            xs={12}
                            spacing={0}
                            direction="column"
                            alignItems="center"
                            justifyContent="center"
                            sx={{  mt: 3 }}
                        >
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
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default BookTable;
