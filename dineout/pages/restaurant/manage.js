// packages
import {
  Container,
  Box,
  Typography,
  TextField,
  Grid,
  Button,
} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
// layouts
import RestaurantLayout from '@/layouts/restaurant';
// components
import Select from '@/components/Select';
import Dropzone from '@/components/Dropzone';
// store
import {
  useCreateRestaurantMutation,
  useGetTagsQuery,
  useGetCuisinesQuery,
  useGetTypesQuery,
} from '@/store/api/restaurant';


// initial values
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
  restaurantImages: [],
  menuImages: [],
};

// validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2)
    .max(25)
    .required('Please enter your restaurant name'),
  locality: Yup.string().min(2).max(50).required('Please enter your locality'),
  address: Yup.string().min(2).max(70).required('Please enter your address'),
  city: Yup.string().min(2).max(15).required('Please enter your city'),
  avgCost: Yup.number().required('Enter average cost').positive().integer(),
  coordinates: Yup.string().min(2).required('Enter Your location link'),
  phoneNumber: Yup.string()
    .matches(/^\d{10,}$/, 'Invalid phone number')
    .required('Enter your phone number'),
  description: Yup.string()
    .min(2)
    .max(100)
    .required('Please enter description'),
  unitCharge: Yup.number().required('Enter charges').positive().integer(),
});

const Manage = () => {
  const [imageUrls, setImageUrls] = useState([]);

  const addData = (newData) => {
    setImageUrls([...imageUrls, newData]);
  };

  const [createRestaurant] = useCreateRestaurantMutation();
  const { data: tagOptions } = useGetTagsQuery();
  const { data: cuisineOptions } = useGetCuisinesQuery();
  const { data: typeOptions } = useGetTypesQuery();

  const uploadOnCloudinary = async (files) => {
    const listSecureUrl = await files?.map(async (file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "tags",
        "codeinfuse, medium, gist"
      );
      formData.append("upload_preset", "dineout");
      formData.append("api_key", "257987867351426");
      formData.append(
        "timestamp",
        (Date.now() / 1000) | 0
      );

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dhe9hmzbn/image/upload", 
        formData,
        { headers: {"X-Requested-With": "XMLHttpRequest"}}
        );

        const secure_url = response?.data?.secure_url;

        return secure_url;
    });

    return listSecureUrl;
  }

  const onSubmit = async (values) => {
    /**
     *  Note:
     * 
     *  1. It gives an error while uploading images to the cloudinary :Unsupported source URL: [object Object]
     *  2. It gives an error while creating an new restaurant using createRestaurant mutation: Unsupported media type \"application/json\" in request.
     * 
     *  As soon as you fix these errors then your add restaurant functionality will be completed.
     * 
     */


    // upload images to cloudinary
    const uploaded_images = await uploadOnCloudinary(values?.restaurantImages);
    const uploaded_menuImages = await uploadOnCloudinary(values?.menuImages);

    // formate fields accordingly
    const formatedValues = {
      name: values.name,
      locality: values.locality,
      city: values.city,
      address: values.address,
      description: values.description,
      coordinates: values.coordinates,
      phone_number: values.phoneNumber,
      avg_cost: values.avgCost,
      opening_time: values.openingTime,
      closing_time: values.closingTime,
      tag_list: values.tags.map(tag => tag.id),
      types_list: values.types.map(type => type.id),
      cuisines_list: values.cuisines.map(cuisine => cuisine.id),
      unit_charge: values.unitCharge,
      manager: 2,
      uploaded_images,
      uploaded_menuImages,
    };

    // create an new restaurant
    createRestaurant(formatedValues);
  };

  return (
    <RestaurantLayout>
      <Box sx={{ my: 5 }}>
        <Container maxWidth="xl">
          <Box>
            <Box>
              <Typography variant="h5" gutterBottom>
                Add Restaurant
              </Typography>
            </Box>

            <Box>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, setFieldValue }) => (
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
                          options={tagOptions}
                          value={values.tags}
                          onChange={(values) => setFieldValue("tags", values)}
                          placeholder="Tags"

                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Select
                          options={cuisineOptions}
                          value={values.cuisines}
                          onChange={(values) =>
                            setFieldValue("cuisines", values)
                          }
                          placeholder="Cuisines"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Select
                          options={typeOptions}
                          value={values.types}
                          onChange={(values) => setFieldValue("types", values)}
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
                          size="small"
                          type="time"
                          as={TextField}
                          helperText={<ErrorMessage name="closingTime" />}
                          fullWidth
                        />
                      </Grid>
                      <Grid container item xs={12} spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <Dropzone
                            title="restaurant"
                            allFiles={values.restaurantImages}
                            handleDrop={(acceptedFiles) => {
                              const newFiles = acceptedFiles.map((file) => ({
                                file,
                                preview: URL.createObjectURL(file),
                              }));
                              setFieldValue("restaurantImages", [
                                ...values.restaurantImages,
                                ...newFiles,
                              ]);
                            }}
                            handleDelete={(index) => {
                              const newFiles = [...values.restaurantImages];
                              newFiles.splice(index, 1);
                              setFieldValue("restaurantImages", newFiles);
                            }}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                          <Dropzone
                            title="menu"
                            allFiles={values.menuImages}
                            handleDrop={(acceptedFiles) => {
                              const newFiles = acceptedFiles.map((file) => ({
                                file,
                                preview: URL.createObjectURL(file),
                              }));
                              setFieldValue("menuImages", [
                                ...values.menuImages,
                                ...newFiles,
                              ]);
                            }}
                            handleDelete={(index) => {
                              const newFiles = [...values.menuImages];
                              newFiles.splice(index, 1);
                              setFieldValue("menuImages", newFiles);
                            }}
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          Add
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Container>
      </Box>
    </RestaurantLayout>
  );
};

export default Manage;
