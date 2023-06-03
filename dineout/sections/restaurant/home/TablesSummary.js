import { Grid, Box } from "@mui/material";

import { DataGrid } from "@mui/x-data-grid";
// packages
import { TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// components
import { useCreateTableMutation } from "@/store/api/restaurant";
import { selectCurrentUser } from "@/store/slices/auth";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";

// store

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

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "table_number",
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

const TablesSummary = () => {
  const [data, setData] = useState();
  const user = useSelector(selectCurrentUser);
  const [createTable] = useCreateTableMutation();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/restaurant/restaurants/${user?.id}/tables/all`
        );

        setData(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [user?.id]);
  console.log(data);

  const onSubmit = async (values) => {
    // console.log(values);

    const tableData = {
      table_number: values.table_number,
      capacity: values.capacity,
    };
    console.log(tableData);
    // const data = await createTable(4, tableData);

    try {
      await axios.post(
        `http://localhost:8000/api/restaurant/restaurants/${user.id}/tables/`,
        tableData
      );
      // After successful submission, fetch the updated table data
      const response = await axios.get(
        `http://localhost:8000/api/restaurant/restaurants/${user?.id}/tables/all`
      );
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      {" "}
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
                        name="table_number"
                        label="Table Number"
                        size="small"
                        as={TextField}
                        helperText={<ErrorMessage name="table_capacity" />}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <Field
                        name="capacity"
                        label="Capacity"
                        size="small"
                        type="number"
                        as={TextField}
                        helperText={<ErrorMessage name="capacity" />}
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

export default TablesSummary;
