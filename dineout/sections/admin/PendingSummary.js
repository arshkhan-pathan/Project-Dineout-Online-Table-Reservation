import React from "react";
import { Box, Grid, Typography, Tooltip, IconButton } from "@mui/material";
import Widget from "../Widget";
import TodayIcon from "@mui/icons-material/Today";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DataGrid } from "@mui/x-data-grid";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Button } from "@mui/material";
import Modal from "@/components/Modal";
import { Modal as MuiModal } from "@mui/material";

import {
  useApprovePendingRestaurantMutation,
  useDeletePendingRestaurantMutation,
} from "@/store/api/admin";
import Image from "next/image";

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

function PendingSummary({ data, stats }) {
  console.log(stats, "stats");
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
    {
      field: "actionss",
      headerName: "Details",
      width: 150,
      renderCell: renderButtonCell,
    },
  ];
  return (
    <>
      <Box>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Widget
              title={"Total Pending Restaurants"}
              amount={stats?.total_pending_restaurants}
              icon={<TodayIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Widget
              title={"New Restaurants Request"}
              amount={stats?.new_restaurants_today}
              icon={<UpcomingIcon />}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4} xl={4}>
            <Widget
              title={"Total Verified Restaurants"}
              amount={stats?.total_verified_restaurants}
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
                }{" "}
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
                {
                  data.find((item) => item.id === selectedRestaurantId)
                    ?.avg_cost
                }
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
                }{" "}
                Rs
              </Typography>{" "}
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
    </>
  );
}

export default PendingSummary;
