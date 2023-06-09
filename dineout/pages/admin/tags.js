import AdminLayout from "@/layouts/admin";
import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TagsCuisineForm } from "@/sections/admin/TagsCusineForm";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 100,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

import * as Yup from "yup";

const cuisineInitialValues = {
  cuisine: "",
};

const typeInitialValues = {
  type: "",
};

const tagsInitialValues = {
  tag: "",
  image: "  ",
};

// Tags Validation Schema
const tagsValidationSchema = Yup.object().shape({
  tag: Yup.string().required("Required"),
  image: Yup.string().required("Required"),
});

// Type Validation Schema
const typeValidationSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
});

// Cuisine Validation Schema
const cuisineValidationSchema = Yup.object().shape({
  cuisine: Yup.string().required("Cuisine is required"),
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

  // Cusines Submit Handler

  const cusineSubmitHandler = async (values, action) => {
    const cusinesData = {
      cuisines: values.cuisine,
    };

    console.log(cusinesData);
    action.resetForm();
  };

  const tagsSubmitHandler = async (values, action) => {
    const tagData = {
      tag: values.tag,
      image: values.image,
    };

    console.log(tagData);
    action.resetForm();
  };

  const typesSubmitHandler = async (values, action) => {
    const typesData = {
      types: values.type,
    };

    console.log(typesData);
    action.resetForm();
  };
  return (
    <>
      <AdminLayout>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            Add Tags, Types and Cuisines
          </Typography>
          <Divider />
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} lg={12}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Types
            </Typography>
            <TagsCuisineForm
              initialValues={typeInitialValues}
              validationSchema={typeValidationSchema}
              onSubmit={typesSubmitHandler}
              label="Types"
              name="type"
              buttonText="Add"
              rows={rows}
              columns={columns}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={12}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Cuisines
            </Typography>
            <TagsCuisineForm
              initialValues={cuisineInitialValues}
              validationSchema={cuisineValidationSchema}
              onSubmit={cusineSubmitHandler}
              label="Cuisnes"
              name="cuisine"
              buttonText="Add"
              rows={rows}
              columns={columns}
            />
          </Grid>{" "}
          <Grid item xs={12} sm={12} lg={12}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
              Tags
            </Typography>
            <Formik
              initialValues={tagsInitialValues}
              validationSchema={tagsValidationSchema}
              onSubmit={tagsSubmitHandler}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Grid container rowSpacing={2} columnSpacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="tag"
                        label="Tag Name"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="tag" />}
                        fullWidth
                      />
                    </Grid>{" "}
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="image"
                        label="Image"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="name" />}
                        fullWidth
                      />
                    </Grid>{" "}
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary">
                        Add
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ height: 400, width: "100%" }}>
                        <DataGrid
                          rows={rows}
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
                      </Box>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </AdminLayout>
    </>
  );
}

export default tags;
