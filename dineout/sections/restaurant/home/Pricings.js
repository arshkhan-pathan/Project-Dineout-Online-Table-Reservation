import { Grid, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import { DataGrid } from "@mui/x-data-grid";
import * as Yup from "yup";

import axios from "axios";
// packages
import { TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
// components
import Select from "@/components/Select";

// store

const columns = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "day_of_week",
    headerName: "Day",
    width: 150,
    editable: false,
    // valueGetter: (params) =>
    //   `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "start_time",
    headerName: "Start Time",
    width: 110,
    editable: true,
  },
  {
    field: "end_time",
    headerName: "End Time",
    sortable: true,
    width: 160,
  },
  {
    field: "price_multiplier",
    headerName: "Price Multiplier",
    sortable: false,
    width: 160,
  },
  {
    field: "price_offset",
    headerName: "Price Offset",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
];

const initialValues = {
  price_multiplier: "",
  price_offset: "",
};

// validation schema
const validationSchema = Yup.object({
  price_offset: Yup.number()
    .required("Enter Price Offset")
    .positive()
    .integer(),
  price_multiplier: Yup.number()
    .required("Enter Price Multiplier")
    .positive()
    .integer(),
});

const Pricing = () => {
  const [data, setData] = useState();
  const user = useSelector(selectCurrentUser);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/restaurant/restaurants/${user?.id}/pricingrules/all`
        );

        setData(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [user?.id]);

  const onSubmit = async (values, action) => {
    const pricingData = {
      price_offset: values.price_offset,
      day_of_week: values.day,
      price_multiplier: values.price_multiplier,
      end_time: values.endTime,
      start_time: values.startTime,
    };
    console.log(pricingData);

    try {
      await axios.post(
        `http://127.0.0.1:8000/api/restaurant/restaurants/${user?.id}/pricingrules/`,
        pricingData
      );

      const response = await axios.get(
        `http://127.0.0.1:8000/api/restaurant/restaurants/${user?.id}/pricingrules/all`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
      action.resetForm();
    }
  };
  console.log(data);
  return (
    <>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
                        name="startTime"
                        label="Start Time"
                        type="time"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="name" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="endTime"
                        label="End Time"
                        size="small"
                        type="time"
                        as={TextField}
                        helperText={<ErrorMessage name="locality" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="price_multiplier"
                        label="Multiplier"
                        type="number"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="address" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="price_offset"
                        type="number"
                        label="Offset"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="city" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="day"
                        label="Day"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="city" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary">
                        Add
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              rows={data || []}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 5,
                  },
                },
              }}
              pageSizeOptions={[5]}
              disableRowSelectionOnClick
            />
          </Grid>{" "}
        </Grid>
      </Box>
    </>
  );
};

export default Pricing;
