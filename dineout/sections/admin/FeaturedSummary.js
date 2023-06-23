import React from "react";
import Widget from "../../components/Widget";
import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import {
  Box,
  Grid,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@mui/material";
import DataModals from "./DataModals";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CloseIcon from "@mui/icons-material/Close";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StarIcon from "@mui/icons-material/Star";
import {
  useApproveFeaturedRestaurantMutation,
  useDeleteFeaturedRestaurantMutation,
} from "@/store/api/admin";
import { toast } from "react-hot-toast";

function FeaturedSummary({ data, allRestaurants, stats }) {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = (restaurantId) => {
    setSelectedRestaurantId(restaurantId);
    setIsModalOpen(true);
  };

  const renderButtonCell = (params) => {
    const restaurantId = params.row.id;
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleButtonClick(restaurantId)}
      >
        View Details
      </Button>
    );
  };

  const removeFeatured = (params) => {
    const [deleteFeaturedRestaurant] = useDeleteFeaturedRestaurantMutation();
    const onRemoveFeatured = () => {
      console.log("Delete table for id: ", params.row.id);
      deleteFeaturedRestaurant(params.row.id);
      toast.success("Removed Restaurant from Featured Successfully");
    };

    return (
      <Tooltip title="Delete">
        <IconButton onClick={onRemoveFeatured}>
          <CloseIcon sx={{ color: "red " }} />
        </IconButton>
      </Tooltip>
    );
  };

  const approveTable = (params) => {
    const [approveFeaturedRestaurant] = useApproveFeaturedRestaurantMutation();
    const rowData = params.row;

    const onApproveTable = () => {
      console.log("Approve table for id: ", rowData.id);
      toast.success("Added Restaurant To Featured Successfully");
      approveFeaturedRestaurant(rowData.id);
    };

    if (rowData.is_featured) {
      return (
        <Tooltip title="Already Added" disableHoverListener>
          <IconButton
            onClick={() =>
              toast("Restaurant Is Already Added in Feautured List!")
            }
          >
            <CheckBoxIcon sx={{ color: "grey" }} />
          </IconButton>
        </Tooltip>
      );
    }

    return (
      <Tooltip title="Approve">
        <IconButton onClick={onApproveTable}>
          <CheckBoxIcon sx={{ color: "green" }} />
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
      field: "actionss",
      headerName: "Details",
      width: 150,
      renderCell: renderButtonCell,
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      renderCell: removeFeatured,
    },
  ];

  const columns1 = [
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
      field: "actionss",
      headerName: "Details",
      width: 150,
      renderCell: renderButtonCell,
    },
    {
      field: "Add",
      headerName: "Add",
      width: 150,
      renderCell: approveTable,
    },
  ];
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Widget
            title="Total Restaurants"
            amount={stats?.total_restaurants}
            icon={<StorefrontIcon />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Widget
            title="Total Featured Restaurants"
            amount={stats?.total_featured}
            icon={<StarIcon />}
          />
        </Grid>
      </Grid>
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
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
      <DataModals
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedRestaurantId={selectedRestaurantId}
        data={allRestaurants}
      ></DataModals>

      <Box sx={{ height: 200, width: "100%" }}>
        <Typography gutterBottom fontWeight="bold">
          All Restaurants
        </Typography>
        <DataGrid
          autoHeight
          slots={{
            toolbar: GridToolbar,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          rows={allRestaurants || []}
          columns={columns1}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
}

export default FeaturedSummary;
