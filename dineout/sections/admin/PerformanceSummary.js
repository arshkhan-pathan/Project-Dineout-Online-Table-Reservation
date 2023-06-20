import React from "react";
import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Widget from "../../components/Widget";
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
import { useDispatch } from "react-redux";
import baseApi from "@/store/api/base";

function PerformanceSummary({ data }) {
  const dispatch = useDispatch();
  const [performanceData, setPerformanceData] = useState("");

  const viewPerformance = (params) => {
    const rowData = params.row;

    const onViewPerformance = async () => {
      console.log("Approve table for id: ", rowData.id);
      const { status, data, error, refetch } = await dispatch(
        baseApi.endpoints.restaurantDataStats.initiate(rowData.id)
      );
      setPerformanceData(data);
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
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Todays Earning"
              amount={performanceData?.today_earnings || 0}
              icon={<PeopleIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Past Week Earning"
              amount={performanceData?.last_week_earnings || 0}
              icon={<GroupAddIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Last Month Earnings"
              amount={performanceData?.last_month_earnings || 0}
              icon={<RestaurantIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3} xl={3}>
            <Widget
              title="Bookings this Week"
              amount={100}
              icon={<HourglassEmptyIcon />}
            />
          </Grid>
          <Grid item xs={6}>
            <LineChart
              width={500}
              height={300}
              data={performanceData?.earnings_graph}
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
                dataKey="total_bookings"
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
              data={performanceData?.earnings_graph}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis></YAxis>
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="total_earnings"
                name="Total Earnings"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </Grid>
        </Grid>
      </Box>
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
    </>
  );
}

export default PerformanceSummary;
