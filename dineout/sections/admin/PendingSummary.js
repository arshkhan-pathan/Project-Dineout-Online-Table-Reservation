import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Widget from "../Widget";
import TodayIcon from "@mui/icons-material/Today";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
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

function PendingSummary() {
  return (
    <>
      {" "}
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Widget
              title={"Todays Bookings"}
              amount="100"
              icon={<TodayIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Widget
              title={"Upcoming Bookings"}
              amount="100"
              icon={<UpcomingIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Widget
              title={"Bookings this Month"}
              amount="100"
              icon={<CalendarMonthIcon />}
            />
          </Grid>
        </Grid>
        {""}
        <Box sx={{ height: 400, width: "100%" }}>
          <Typography>Pending Restaurants</Typography>
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
      </Box>
    </>
  );
}

export default PendingSummary;
