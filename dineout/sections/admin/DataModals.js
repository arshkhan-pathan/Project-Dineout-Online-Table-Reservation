import React from "react";

import { Box, Typography, Button } from "@mui/material";
import Modal from "@/components/Modal";
import { Modal as MuiModal } from "@mui/material";
import Image from "next/image";

function DataModals({
  isModalOpen,
  setIsModalOpen,
  selectedRestaurantId,
  data,
  selectedImage,
  handleImageClick,
  setIsModalChildOpen,
  isModalChildOpen,
}) {
  return (
    <>
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
    </>
  );
}

export default DataModals;
