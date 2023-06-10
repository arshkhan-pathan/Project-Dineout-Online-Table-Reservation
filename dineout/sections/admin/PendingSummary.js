import React from "react";
import { Box, Grid, Typography, Tooltip, IconButton } from "@mui/material";
import Widget from "../Widget";
import TodayIcon from "@mui/icons-material/Today";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DataGrid } from "@mui/x-data-grid";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CloseIcon from "@mui/icons-material/Close";
import {
  useApprovePendingRestaurantMutation,
  useDeletePendingRestaurantMutation,
} from "@/store/api/admin";

export const approveTable = (params) => {
  const [approvePendingRestaurant] = useApprovePendingRestaurantMutation();
  const onApproveTable = () => {
    console.log("Approve table for id: ", params.row.id);
    approvePendingRestaurant(params.row.id);
  };

  return (
    <Tooltip title="Approve">
      <IconButton onClick={onApproveTable}>
        <CheckBoxIcon sx={{ color: "green" }} />
      </IconButton>
    </Tooltip>
  );
};

export const deleteTable = (params) => {
  const [deletePendingRestaurant] = useDeletePendingRestaurantMutation();
  const onDeleteTable = () => {
    console.log("Delete table for id: ", params.row.id);
    deletePendingRestaurant(params.row.id);
  };

  return (
    <Tooltip title="Delete">
      <IconButton onClick={onDeleteTable}>
        <CloseIcon sx={{ color: "red " }} />
      </IconButton>
    </Tooltip>
  );
};
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "locality",
    headerName: "Locality",
    width: 150,
    editable: true,
  },
  {
    field: "address",
    headerName: "Adress",
    width: 110,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 110,
    editable: true,
  },
  {
    field: "phone_number",
    headerName: "Phone",
    width: 110,
    editable: true,
  },
  {
    field: "actions",
    headerName: "Approve",
    width: 150,
    renderCell: approveTable,
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 150,
    renderCell: deleteTable,
  },
];

function PendingSummary({ data }) {
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
        </Box>
      </Box>
    </>
  );
}

export default PendingSummary;
