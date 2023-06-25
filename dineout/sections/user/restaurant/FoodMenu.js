// import styled from "styled-components";
import Image from "next/image";
import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";

// styles
const StyedWrapper = styled(Box)({
  padding: "16px 24px 24px",
  borderRadius: "4px",
});

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
              <PhotoProvider>
                {menu &&
                  menu.map((image) => {
                    return (
                      <Grid item xs={2} key={image.image}>
                        <PhotoView key={image.image} src={image.image}>
                          <Image
                            src={image.image}
                            height={100}
                            width={100}
                            alt="Image"
                            style={{ objectFit: "cover" }}
                          />
                        </PhotoView>
                      </Grid>
                    );
                  })}
              </PhotoProvider>
            </Grid>
          </Box>
        </Stack>
      </StyedWrapper>
    </>
  );
};

export default FoodMenu;
