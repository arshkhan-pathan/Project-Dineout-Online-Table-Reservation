// import styled from "styled-components";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Image from "next/image";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";

// styles
const StyedWrapper = styled(Box)({
  padding: '16px 24px 24px',
  borderRadius: '4px'
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "0px solid #000",
  boxShadow: 5,
  p: 4,
};

const FoodMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <StyedWrapper>
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" gutterBottom id="AboutUs" sx={{fontSize: '18px', fontWeight: 'bold'}}>
            Menu
          </Typography>
          <Box>
            <Grid container>
              {menu &&
                menu.map((image) => {
                  return (
                    <Grid item xs={2} key={image.image}>
                      <Image
                        src={image.image}
                        height={100}
                        width={100}
                        alt="Image"
                        onClick={handleOpen}
                        style={{ objectFit: 'cover' }}
                      />

                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        sx={{
                          "& img": {
                            width: '100%',
                            height: '80vh'
                          }
                        }}
                      >
                        <Box sx={style}>
                          <Image
                            src={image.image}
                            height={550}
                            width={500}
                            alt="Image"
                            onClick={handleOpen}
                            
                          />
                        </Box>
                      </Modal>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Stack>
      </StyedWrapper>
    </>
  );
};

export default FoodMenu;
