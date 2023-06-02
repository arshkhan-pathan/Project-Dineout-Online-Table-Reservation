import { Grid, Box } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
// packages
import { TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
// components
import Select from "@/components/Select";

// store

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "tableNo",
    headerName: "Table Number",
    width: 150,
    editable: false,
  },

  {
    field: "capacity",
    headerName: "Capacity",
    type: "number",
    width: 110,
    editable: false,
  },
];

const rows = [
  { id: 1, tableNo: "123", capacity: 24 },
  { id: 2, tableNo: "123", capacity: 24 },
  { id: 3, tableNo: "123", capacity: 24 },
  { id: 4, tableNo: "123", capacity: 24 },
  { id: 5, tableNo: "123", capacity: 25 },
  { id: 6, tableNo: "123", capacity: 24 },
  { id: 7, tableNo: "123", capacity: 24 },
  { id: 8, tableNo: "123", capacity: 24 },
  { id: 9, tableNo: "123", capacity: 24 },
];

const TablesSummary = () => {
  return (
    <>
      {" "}
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Formik
            // initialValues={initialValues}
            // validationSchema={validationSchema}
            // onSubmit={onSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="tableNo"
                        label="Table Number"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="name" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="capacity"
                        label="Capicity"
                        size="small"
                        type="number"
                        as={TextField}
                        helperText={<ErrorMessage name="locality" />}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary">
                      Add
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
          <Grid item xs={4}>
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
          </Grid>{" "}
        </Grid>
      </Box>
    </>
  );
};

export default TablesSummary;
