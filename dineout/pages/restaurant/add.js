// packages
import { Container, Box, Typography, TextField, Grid } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
// layouts
import RestaurantLayout from '@/layouts/restaurant';


// _mock api data
const apiTags = [
    {
        id: '1',
        name: 'Tag 1',
        image: 'http://localhost:8000/api/images/image1.png',
    },
    {
        id: '2',
        name: 'Tag 2',
        image: 'http://localhost:8000/api/images/image2.png',
    },
    {
        id: '3',
        name: 'Tag 3',
        image: 'http://localhost:8000/api/images/image3.png',
    },
    {
        id: '4',
        name: 'Tag 4',
        image: 'http://localhost:8000/api/images/image4.png',
    },
    {
        id: '5',
        name: 'Tag 5',
        image: 'http://localhost:8000/api/images/image5.png',
    },
];

const apiCuisines = [
    {
        id: '1',
        name: 'Cuisines 1'
    },
    {
        id: '2',
        name: 'Cuisines 2'
    },
    {
        id: '3',
        name: 'Cuisines 3'
    },
    {
        id: '4',
        name: 'Cuisines 4'
    },
    {
        id: '5',
        name: 'Cuisines 5'
    },
];

const apiTypes = [
    {
        id: '1',
        name: 'Veg',
    },
    {
        id: '2',
        name: 'Egg',
    },
    {
        id: '3',
        name: 'Non Veg',
    },
];

const initialValues = {
    name: '',
    locality: '',
    address: '',
    city: '',
    avgCost: '',
    coordinates: '',
    phoneNumber: '',
    description: '',
    tags: [],
    cuisines: [],
    types: [],

    openingTime: '',
    closingTime: '',
    unitCharge: '',
};

const validationSchema = Yup.object({});

const Add = () => {
    return (
        <RestaurantLayout>
            <Box sx={{ my: 5 }}>
                <Container maxWidth="xl">
                    <Box>
                        <Box>
                            <Typography variant="h5" gutterBottom>Add Restaurant</Typography>
                        </Box>

                        <Box>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={(values) => console.log(values)}
                            >
                                <Form>
                                    <Grid container rowSpacing={3} columnSpacing={3}>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="name"
                                                label="Name"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="name" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="locality"
                                                label="Locality"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="locality" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="address"
                                                label="Address"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="address" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="city"
                                                label="City"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="city" />}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="avgCost"
                                                label="Average Cost"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="avgCost" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="coordinates"
                                                label="Coordinates"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="coordinates" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="phoneNumber"
                                                label="Phone Number"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="phoneNumber" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="description"
                                                label="Description"
                                                size="small"
                                                as={TextField}
                                                helperText={<ErrorMessage name="description" />}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Select 
                                                options={apiTags}
                                                getOptionLabel={option => option.name}
                                                getOptionValue={option => option.id}
                                                isMulti
                                                placeholder="Tags"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Select 
                                                options={apiCuisines}
                                                getOptionLabel={option => option.name}
                                                getOptionValue={option => option.id}
                                                isMulti
                                                placeholder="Cuisines"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Select 
                                                options={apiTypes}
                                                getOptionLabel={option => option.name}
                                                getOptionValue={option => option.id}
                                                isMulti
                                                placeholder="Types"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="unitCharge"
                                                label="Unit Charge"
                                                size="small"
                                                type="number"
                                                as={TextField}
                                                helperText={<ErrorMessage name="unitCharge" />}
                                                fullWidth
                                            />
                                        </Grid>

                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="openingTime"
                                                // label="Opening Time"
                                                size="small"
                                                type="time"
                                                as={TextField}
                                                helperText={<ErrorMessage name="openingTime" />}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <Field
                                                name="closingTime"
                                                // label="Closing Time"
                                                size="small"
                                                type="time"
                                                as={TextField}
                                                helperText={<ErrorMessage name="closingTime" />}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </Form>
                            </Formik>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </RestaurantLayout>
    );
};

export default Add;
