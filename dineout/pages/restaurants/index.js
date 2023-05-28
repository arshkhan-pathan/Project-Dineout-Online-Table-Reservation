// packages
import {
  Container,
  Grid,
} from '@mui/material';
// layouts
import Navbar from '@/layouts/restaurant/Navbar';
// components
import Card from '@/components/Card';

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
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 5 }}>
        <Grid container spacing={2}>
          {_mock.map(restaurant => (
            <Grid item xs={12} sm={4} md={3} key={restaurant.id}>
              <Card {...restaurant}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Restaurants;
