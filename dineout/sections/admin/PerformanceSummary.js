import React from "react";
import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Widget from "../Widget";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import PeopleIcon from "@mui/icons-material/People";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

import {
  Box,
  Grid,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StarIcon from "@mui/icons-material/Star";
import { toast } from "react-hot-toast";

function PerformanceSummary({ data }) {
  const viewPerformance = (params) => {
    const rowData = params.row;

    const onViewPerformance = () => {
      console.log("Approve table for id: ", rowData.id);
    };

    return (
      <Tooltip title="Approve">
        <IconButton onClick={onViewPerformance}>
          <RemoveRedEyeIcon />
        </IconButton>
      </Tooltip>
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      editable: true,
    },
    {
      field: "locality",
      headerName: "Locality",
      width: 200,
      editable: true,
    },
    {
      field: "address",
      headerName: "Adress",
      width: 200,
      editable: true,
    },
    {
      field: "city",
      headerName: "City",
      width: 200,
      editable: true,
    },
    {
      field: "phone_number",
      headerName: "Phone",
      width: 200,
      editable: true,
    },
    {
      field: "view",
      headerName: "View Performance",
      width: 150,
      renderCell: viewPerformance,
    },
  ];

  return (
    <>
      <Box sx={{ height: 400, width: "100%", my: 3 }}>
        <DataGrid
          autoHeight
          rows={data || []}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          slots={{
            toolbar: GridToolbar,
          }}
          pageSizeOptions={[5]}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          disableRowSelectionOnClick
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
        />
      </Box>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="New Users This Week"
              amount={data?.new_users_count}
              icon={<PeopleIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Total Users Registered"
              amount={data?.total_users_count}
              icon={<GroupAddIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Total Restaurants"
              amount={data?.verified_restaurants_count}
              icon={<RestaurantIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Pending Restarurant"
              amount={data?.unverified_restaurants_count}
              icon={<HourglassEmptyIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <LineChart
              width={500}
              height={300}
              data={data?.bookings_graph_data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                name="Bookings Count"
              />
            </LineChart>
          </Grid>
          <Grid item xs={6}>
            <LineChart
              width={500}
              height={300}
              data={data?.new_users_graph_data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date_joined__date" />
              <YAxis></YAxis>
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="count"
                name="User Count"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default PerformanceSummary;
