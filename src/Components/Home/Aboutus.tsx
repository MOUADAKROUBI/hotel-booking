import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Aboutus({ aboutusRef }: { aboutusRef: React.RefObject<HTMLDivElement> }) {
  return (
    <>
      <Box
        component="section"
        sx={{
          backgroundColor: "#f8f8f8",
          paddingTop: {xs: "80px", sm: "100px", md: "120px", lg: "140px"},
          paddingBottom: {xs: "80px", sm: "100px", md: "120px", lg: "140px"},
          overflow: {xs: "hidden", lg: "visible"},
        }}
      >
        <Box
          sx={{
            maxWidth: "1224px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: {xs: "16px", lg: "24px"},
            paddingRight: {xs: "16px", lg: "24px"},
          }}
        >
          <Box
            ref={aboutusRef}
            sx={{
              alignItems: "center",
              display: "flex",
              position: "relative",
              flexDirection: {xs: "column", lg: "row"},
              justifyContent: {xs: "center", lg: "normal"},
            }}
          >
            <Box
              sx={{
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
                width: {xs: "115%", sm: '110%'},
                height: {xs: "500px", sm: "600px", md: "700px", lg: "auto"},
                marginTop: {xs: "-251px", sm: "-310px", md: "-362px", lg: "auto"},
                maxWidth: {xs: "none", lg: "776px"},
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="https://assets-global.website-files.com/5f28567562c2bb7095a14f34/5f32c12d2ffe390a4b9e01a2_image-about-section-hotel-template-p-1080.jpeg"
                alt="Scenic view"
                sx={{
                  maxWidth: "100%",
                }}
              />
            </Box>
            <Box
              sx={{
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
                zIndex: 1,
                maxWidth: "663px",
                textAlign: {xs: "left", lg: "center"},
                padding: {xs: "40px 30px", sm: "70px 60px", md: "96px 80px"},
                pt: {md: '80px', lg: "auto"},
                pb: {md: '80px', lg: "auto"},
                position: {xs: "static", lg: "absolute"},
                right: 0,
                order: -1,
                bgcolor: "white",
              }}
            >
              <Typography variant="h6" component="div" sx={{ 
                color: "#060606",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "1em",
                mb: 2
               }}>
                01 &mdash; ABOUT
              </Typography>
              <Typography
                variant="h2"
                sx={{ 
                  color: "#060606",
                  marginTop: 0,
                  marginBottom: "16px",
                  fontFamily: "Playfair Display, sans-serif",
                  fontSize: {xs: "29.5px", sm: "33px", md: "37px", lg: "42px"},
                  fontWeight: 400,
                  lineHeight: "1.286em",
                 }}
              >
                Visit our natural services
                <br />
                and reconnect with yourself
              </Typography>
              <Typography variant="body1" component="div" sx={{ mb: {xs: "40px", lg: "48px"} }}>
                Experience the allure of Agadir with Luxury Rentals. We offer luxurious villas, apartments, penthouses, and car hire. Relax and enjoy your stay; we prioritize your peace of mind.
              </Typography>
              <Link to="#">
                <Typography
                  component="span"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    borderRadius: 0,
                    fontWeight: {xs: 500, md: 700},
                    letterSpacing: ".1rem",
                    px: {xs: 2, md: 4},
                    py: 2,
                    textTransform: "uppercase",
                    fontSize: {xs: "14px", md:"16px"},
                    "&:hover": {
                      bgcolor: "white",
                      color: "black",
                      border: "1.5px solid black",
                      boxShadow: "none",
                    },
                  }}
                >
                  Explore more
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
