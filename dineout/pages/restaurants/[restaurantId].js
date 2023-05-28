// packages
import Link from 'next/link';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
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
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// layout
import Navbar from '@/layouts/restaurant/Navbar';


const RestaurantInfo = () => {
    const router = useRouter();
    const { restaurantId } = router.query;

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
                                    <Slider {...settings} style={{
                                        height: 400,
                                        borderRadius: 0,
                                        overflow: 'hidden',
                                        marginBottom: '10px'
                                    }}>
                                        <div>
                                            <img style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                            }} src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg" alt="Image 1" />
                                        </div>
                                        <div>
                                            <img style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                            }} src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg" alt="Image 2" />
                                        </div>
                                        <div>
                                            <img style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover',
                                            }} src="https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg" alt="Image 3" />
                                        </div>
                                    </Slider>

                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Box>
                                            <Typography variant='h5' component="h4" sx={{ fontWeight: 'bold' }}>Narendra Singh</Typography>
                                            <Typography sx={{ fontSize: 12 }}>hello, hello</Typography>
                                        </Box>
                                        <Chip label="4.3" color="success" sx={{ borderRadius: 1, height: 45, width: 55, fontSize: 16 }} />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box>
                            <Typography>Paymemt Options</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default RestaurantInfo;
