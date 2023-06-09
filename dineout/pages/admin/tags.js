import AdminLayout from "@/layouts/admin";
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button } from "@mui/material";

import * as Yup from "yup";

const initialValues = {
  table_number: "",
  capacity: "",
};

const validationSchema = Yup.object().shape({
  table_number: Yup.string().required("Table number is required"),
  capacity: Yup.number()
    .required("Capacity is required")
    .positive("Capacity must be a positive number")
    .integer("Capacity must be an integer"),
});

function tags() {
  const onSubmit = async (values, action) => {
    // console.log(values);

    const tableData = {
      table_number: values.table_number,
      capacity: values.capacity,
    };

    const payload = { id: user?.id, tableData: tableData };
    console.log(payload, "payload");
    try {
      const data = await createTable(payload);

      // After successful submission, fetch the updated table data
    } catch (error) {
      console.error(error);
    }
    action.resetForm();
  };
  return (
    <>
      <AdminLayout>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Add Tags, Types and Cuisines
          </Typography>
          <Divider></Divider>
        </Box>

        <Box>
          <Grid container>
            <Grid item xs={6} lg={6}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <Grid container rowSpacing={2} columnSpacing={3}>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Field
                          name="table_number"
                          label="Table Number"
                          size="small"
                          as={TextField}
                          helperText={<ErrorMessage name="table_capacity" />}
                          fullWidth
                        />
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
            </Grid>
            <Grid item xs={6} lg={6}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form>
                    <Grid container rowSpacing={2} columnSpacing={3}>
                      <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Field
                          name="table_number"
                          label="Table Number"
                          size="small"
                          as={TextField}
                          helperText={<ErrorMessage name="table_capacity" />}
                          fullWidth
                        />
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
            </Grid>
          </Grid>
        </Box>
      </AdminLayout>
    </>
  );
}

export default tags;
