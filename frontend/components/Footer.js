import React from "react";
import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import Image from "next/image";
import logo from "../assets/images/logo.svg";
import youtube from "../assets/images/Youtube.png";
import facebook from "../assets/images/Facebook.png";
import twitter from "../assets/images/Twitter.png";
import insta from "../assets/images/Instagram.png";
import google from "../assets/images/Google.png";

const footerLinks = {
  Explore: ["Home", "Restaurants", "Book a Table", "Featured"],
  Company: ["About Us", "Careers", "Press", "Blog"],
  Support: ["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"],
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid rgba(201, 79, 53, 0.10)",
        pt: { xs: 6, md: 8 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 5 }}>
          {/* Brand column */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ mb: 2 }}>
              <Image src={logo} alt="Dineout" width={90} height={30} />
            </Box>
            <Typography
              sx={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                lineHeight: 1.75,
                color: "#9A8878",
                maxWidth: 260,
                mb: 3,
              }}
            >
              Find the best restaurants, discounts, deals, and offers around you.
            </Typography>
            {/* Social icons */}
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
              {[youtube, twitter, facebook, insta, google].map((src, i) => (
                <Box
                  key={i}
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid rgba(201, 79, 53, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.18s",
                    "&:hover": {
                      backgroundColor: "#C94F35",
                      borderColor: "#C94F35",
                      transform: "translateY(-2px)",
                    },
                    "&:hover img": {
                      filter: "brightness(10)",
                    },
                  }}
                >
                  <Image src={src} alt="" width={16} height={16} />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <Grid item xs={6} sm={4} md={8 / 3} key={section}>
              <Typography
                sx={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#C94F35",
                  mb: 2,
                }}
              >
                {section}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.25 }}>
                {links.map((link) => (
                  <Typography
                    key={link}
                    sx={{
                      fontFamily: "var(--font-body)",
                      fontSize: "15px",
                      color: "#9A8878",
                      cursor: "pointer",
                      transition: "color 0.15s",
                      "&:hover": { color: "#C94F35" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "rgba(201, 79, 53, 0.10)", mb: 3 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "#C2B5AA",
            }}
          >
            © 2024 Dineout.co — All Rights Reserved
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "#C2B5AA",
            }}
          >
            +91 70434 92728
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
