// import styled from "styled-components";
import Image from "next/image";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";

// styles
const StyedWrapper = styled(Box)({
  padding: "16px 24px 24px",
  borderRadius: "4px",
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
  return (
    <>
      <StyedWrapper>
        <Stack direction="column" spacing={2}>
          <Typography
            variant="h6"
            gutterBottom
            id="AboutUs"
            sx={{ fontSize: "18px", fontWeight: "bold" }}
          >
            Menu
          </Typography>
          <Box>
            <Grid container>
              {menu &&
                menu.map((image) => {
                  return (
                    <Grid item xs={2} key={image.image}>
                      <PhotoProvider>
                        <PhotoView key={image.image} src={image.image}>
                          <Image
                            src={image.image}
                            height={100}
                            width={100}
                            alt="Image"
                            style={{ objectFit: "cover" }}
                          />
                        </PhotoView>
                      </PhotoProvider>
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
