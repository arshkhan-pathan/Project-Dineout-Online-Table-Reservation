// packages
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
// layouts
import Navbar from '@/layouts/restaurant/Navbar';
// components
import Card from '@/components/Card';
import Filters from '@/sections/user/restaurants/Filters';
import { useGetAllRestaurantQuery } from '@/store/api/restaurants';
import { useState } from 'react';

const _mock = [
  {
    id: '1',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '2',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '3',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '4',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '11',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '12',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '13',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '14',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '21',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '22',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '23',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
  {
    id: '24',
    name: 'Sigree Global Gril',
    locality: 'Powai, Powai',
    banner: 'https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/s/o/p9884-16621888756312fd4b0c44a.jpg',
    rating: '4.3'
  },
];


const Restaurants = () => {
  const [selectedFilters,setSelectedFilters] = useState({
    cuisines: '',
    tags: '',
    types: '',
  });

  const {data, isLoading } = useGetAllRestaurantQuery(selectedFilters, { refetchOnMountOrArgChange: true});

  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={3} sx={{mt: 1}}>
          <Grid item xs={3}>
            <Filters selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters}/>
          </Grid>
          <Grid container item xs={9} spacing={2}>
            <Grid item xs={12}>
              <Button onClick={() => setCuisines('Gujarati')}>Refetch</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h6' fontWeight='bold'>
              Best Welcome Back Restaurants Near Me in Mumbai
              </Typography>
            </Grid>
            {isLoading ? "loading..." : data?.results?.map(restaurant => (
              <Grid item xs={12} sm={4} md={4} key={restaurant.id}>
                <Card {...restaurant} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Restaurants;
