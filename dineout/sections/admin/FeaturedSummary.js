import React from "react";
import Widget from "../Widget";
import { TrackChanges } from "@mui/icons-material";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Grid, Typography, Button } from "@mui/material";
import Modal from "@/components/Modal";
import { Modal as MuiModal } from "@mui/material";
import Image from "next/image";

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
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedRestaurantId && (
          <Box mb={2}>
            <Typography variant="h4" component="h2" mb={2}>
              {`Restaurant Details:`}
            </Typography>
            <Typography variant="h5" component="h3">
              Restaurant Name:
              {data.find((item) => item.id === selectedRestaurantId)?.name}
            </Typography>
            <Typography variant="body1" component="h3">
              Manager Name:
              {
                data.find((item) => item.id === selectedRestaurantId)
                  ?.unit_charge
              }
              Rs
            </Typography>
            <Typography variant="body1" component="h3">
              Description:
              {
                data.find((item) => item.id === selectedRestaurantId)
                  ?.description
              }
            </Typography>
            <Typography variant="body1" component="h3">
              Average Cost:
              {data.find((item) => item.id === selectedRestaurantId)?.avg_cost}
            </Typography>
            <Typography variant="body1" component="h3">
              Opening Time :
              {
                data.find((item) => item.id === selectedRestaurantId)
                  ?.opening_time
              }
            </Typography>
            <Typography variant="body1" component="h3">
              Closing Time:
              {
                data.find((item) => item.id === selectedRestaurantId)
                  ?.closing_time
              }
            </Typography>
            <Typography variant="body1" component="h3">
              Per Person Charge:
              {
                data.find((item) => item.id === selectedRestaurantId)
                  ?.unit_charge
              }
              Rs
            </Typography>
            <Typography variant="body1" component="h3">
              Tags:
              {data
                .find((item) => item.id === selectedRestaurantId)
                ?.tags.map((tag) => tag.name)
                .join(", ")}
            </Typography>
            <Typography variant="body1" component="h3">
              Cuisines:
              {data
                .find((item) => item.id === selectedRestaurantId)
                ?.cuisines.map((cuisine) => cuisine.name)
                .join(", ")}
            </Typography>
            <Typography variant="body1" component="h3">
              Types:
              {data
                .find((item) => item.id === selectedRestaurantId)
                ?.types.map((type) => type.name)
                .join(", ")}
            </Typography>
            <Typography variant="body1" component="h3">
              Images:
            </Typography>
            <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
              {data
                .find((item) => item.id === selectedRestaurantId)
                ?.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.image}
                    alt={`Restaurant ${selectedRestaurantId} Image`}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      marginRight: 8,
                      marginBottom: 8,
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(image.image)}
                  />
                ))}
            </Box>
            <Typography variant="body1" component="h3">
              Menu Images:
            </Typography>
            <Box display="flex" justifyContent="flex-start" flexWrap="wrap">
              {data
                .find((item) => item.id === selectedRestaurantId)
                ?.menuImages.map((image) => (
                  <img
                    key={image.id}
                    src={image.image}
                    alt={`Restaurant ${selectedRestaurantId} Image`}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      marginRight: 8,
                      marginBottom: 8,
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(image.image)}
                  />
                ))}
            </Box>
          </Box>
        )}
        <Button onClick={() => setIsModalOpen(false)}>Close</Button>
      </Modal>
      <MuiModal
        open={isModalChildOpen}
        onClose={() => setIsModalChildOpen(false)}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            maxWidth: 500,
          }}
        >
          {selectedImage && (
            <Box mb={2}>
              <Typography variant="h4" component="h2" mb={2}>
                Image Preview
              </Typography>
              <Image
                src={selectedImage}
                alt="Selected Image"
                width="450"
                height="600"
              />
            </Box>
          )}
          <Button onClick={() => setIsModalChildOpen(false)}>Close</Button>
        </Box>
      </MuiModal>
    </Box>
  );
}

export default FeaturedSummary;
