import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "@/layouts/restaurant/Navbar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Error() {
  const router = useRouter();
  console.log(router);
  return (
    <>
      <Head>
        {router.asPath == "/forbidden" ? "Forbidden" : "404 Page Not Found"}
      </Head>
      <Navbar></Navbar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container maxWidth="md">
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="h1">404</Typography>
              {router.asPath == "/forbidden" ? (
                <Typography variant="h6">
                  Sorry Your Role doesn’t allow you to use this Page
                </Typography>
              ) : (
                <Typography variant="h6">
                  The page you’re looking for doesn’t exist.
                </Typography>
              )}
            </Grid>
            <Grid xs={6}>
              <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
                alt=""
                width={500}
                height={250}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer></Footer>
    </>
  );
}
