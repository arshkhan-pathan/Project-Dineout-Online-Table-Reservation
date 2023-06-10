import AdminLayout from "@/layouts/admin";
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Divider,
  Tooltip,
  IconButton,
} from "@mui/material";
import { TextField, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import { TagsCuisineForm } from "@/sections/admin/TagsCusineForm";
import {
  useCreateCuisineMutation,
  useCreateTagsMutation,
  useCreateTypesMutation,
  useDeleteCuisineMutation,
  useDeleteTagsMutation,
  useDeleteTypesMutation,
  useGetTagTypeCuisineQuery,
} from "@/store/api/admin";
import * as Yup from "yup";

export const DeleteTypes = (params) => {
  const [deleteTypes] = useDeleteTypesMutation();
  const onDeleteTypes = () => {
    console.log("delete table for id: ", params.row.id);
    deleteTypes(params.row.id);
  };

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onDeleteTypes}>
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
    </Tooltip>
  );
};

export const DeleteCuisines = (params) => {
  const [deleteCuisine] = useDeleteCuisineMutation();
  const onDeleteCuisines = () => {
    console.log("delete table for id: ", params.row.id);
    console.log(params.row.id);
    deleteCuisine(params.row.id);
  };

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onDeleteCuisines}>
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
    </Tooltip>
  );
};

export const DeleteTags = (params) => {
  const [deleteTags] = useDeleteTagsMutation();
  const onDeleteTags = () => {
    console.log("delete table for id: ", params.row.id);
    console.log(params.row.id);
    deleteTags(params.row.id);
  };

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onDeleteTags}>
        <DeleteIcon sx={{ color: "red" }} />
      </IconButton>
    </Tooltip>
  );
};

const columnsTypes = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "Types",
    width: 300,
    editable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 300,
    renderCell: DeleteTypes,
  },
];
const columnsCusinies = [
  { field: "id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "Cuisnies",
    width: 300,
    editable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 300,
    renderCell: DeleteCuisines,
  },
];
const columnsTags = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Tags",
    width: 250,
    editable: false,
  },
  {
    field: "image",
    headerName: "Image Url",
    width: 600,
    editable: false,
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: DeleteTags,
  },
];

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
  // Cusines Submit Handler
  const { data } = useGetTagTypeCuisineQuery("s", {
    refetchOnMountOrArgChange: true,
  });

  const [createTypes] = useCreateTypesMutation();
  const [createCuisine] = useCreateCuisineMutation();
  const [createTag] = useCreateTagsMutation();

  const cusineSubmitHandler = async (values, action) => {
    const cusinesData = {
      name: values.cuisine,
    };

    console.log(cusinesData);
    createCuisine(cusinesData);
    action.resetForm();
  };

  const tagsSubmitHandler = async (values, action) => {
    const tagData = {
      name: values.tag,
      image: values.image,
    };

    console.log(tagData);
    createTag(tagData);
    action.resetForm();
  };

  const typesSubmitHandler = async (values, action) => {
    const typesData = {
      name: values.type,
    };

    console.log(typesData, "Types");
    createTypes(typesData);
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
              rows={data?.types || []}
              columns={columnsTypes}
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
              rows={data?.cuisines || []}
              columns={columnsCusinies}
            />
          </Grid>
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
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="image"
                        label="Image"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="name" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary">
                        Add
                      </Button>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ height: 400, width: "100%" }}>
                        <DataGrid
                          rows={data?.tags || []}
                          columns={columnsTags}
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
