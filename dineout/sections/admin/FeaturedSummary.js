import React from "react";
import Widget from "../Widget";
import { TrackChanges } from "@mui/icons-material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid, Typography, Button } from "@mui/material";
import DataModals from "./DataModals";

function FeaturedSummary({ data }) {
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalChildOpen, setIsModalChildOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalChildOpen(true);
  };

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
  ];
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Widget
            title="Total Restaurants"
            amount={100}
            icon={<TrackChanges />}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3} xl={3}>
          <Widget
            title="Total Featured Restaurants"
            amount={100}
            icon={<TrackChanges />}
          />
        </Grid>
      </Grid>
      <Box sx={{ height: 400, width: "100%" }}>
        <Typography>Featured Restaurants</Typography>
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
      <DataModals
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        selectedRestaurantId={selectedRestaurantId}
        data={data}
        selectedImage={selectedImage}
        handleImageClick={handleImageClick}
        setIsModalChildOpen={setIsModalChildOpen}
        isModalChildOpen={isModalChildOpen}
      ></DataModals>
    </Box>
  );
}

export default FeaturedSummary;
