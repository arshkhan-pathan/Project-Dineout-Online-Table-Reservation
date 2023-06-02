import { Grid, Box } from "@mui/material";
import Widget from "../../Widget";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "@/store/slices/auth";
import axios from "axios";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];
const columns1 = [
  { field: "id", headerName: "ID", width: 90 },

  {
    field: "customer_name",
    headerName: "Customer Name",
    width: 150,
    editable: false,
  },
  {
    field: "customer_id",
    headerName: "Customer Id",
    width: 150,
    editable: false,
  },
  {
    field: "amount",
    headerName: "Amount",
    type: "number",
    width: 150,
    editable: false,
  },
  {
    field: "start_time",
    headerName: "Time",

    width: 150,
    editable: false,
  },
  {
    field: "date",
    headerName: "Date",

    width: 150,
    editable: false,
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

const BookingSummary = () => {
  const user = useSelector(selectCurrentUser);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/restaurant/restaurants/${user?.id}/bookings/data`
        );

        setData(response.data);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [user?.id]);

  console.log(data?.today_bookings_data);
  return (
    <>
      {" "}
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title={"Todays Bookings"} amount={data?.today_bookings} />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Upcoming Bookings"}
              amount={data?.upcoming_bookings}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title={"Bookings this Month"}
              amount={data?.bookings_this_month}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget title={"Past Bookings"} amount={data?.past_bookings} />
          </Grid>
          <Grid item xs={12}>
            <DataGrid
              rows={data?.today_bookings_data || rows}
              columns={columns1}
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
          <Grid item xs={12}>
            <DataGrid
              rows={data?.upcoming_bookings_data || rows}
              columns={columns1}
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
          <Grid item xs={12}>
            <DataGrid
              rows={data?.past_bookings_data || rows}
              columns={columns1}
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
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default BookingSummary;
