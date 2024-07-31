import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";

export default function SingleCategoryAbout({
  data,
}: {
  data: any;
}) {
  return (
    <>
      <Box
        component="section"
        sx={{
          paddingTop: { xs: "80px", sm: "100px", md: "120px", lg: "140px" },
          paddingBottom: {
            xs: "80px",
            sm: "100px",
            md: "120px",
            lg: "140px",
          },
          overflow: { xs: "hidden", lg: "visible" },
        }}
      >
        <Box
          sx={{
            maxWidth: "1224px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: { xs: "16px", lg: "24px" },
            paddingRight: { xs: "16px", lg: "24px" },
          }}
        >
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              position: "relative",
              flexDirection: { xs: "column", lg: "row" },
              justifyContent: { xs: "center", lg: "normal" },
            }}
          >
            <Box
              sx={{
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
                width: { xs: "115%", sm: "110%" },
                height: { xs: "500px", sm: "600px", md: "700px", lg: "auto" },
                marginTop: {
                  xs: "-251px",
                  sm: "-310px",
                  md: "-362px",
                  lg: "auto",
                },
                maxWidth: { xs: "none", lg: "776px" },
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={data.images[0].url}
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
                textAlign: { xs: "left", lg: "center" },
                padding: {
                  xs: "40px 30px",
                  sm: "70px 60px",
                  md: "96px 80px",
                },
                pt: { md: "80px", lg: "auto" },
                pb: { md: "80px", lg: "auto" },
                position: { xs: "static", lg: "absolute" },
                right: 0,
                order: -1,
                bgcolor: "white",
              }}
            >
              <Box
                className="subtitle-amenties"
                sx={{
                  color: "#060606",
                  "letter-spacing": ".1em",
                  "text-transform": "uppercase",
                  "justify-content": "center",
                  "align-items": "center",
                  "margin-bottom": "32px",
                  "font-size": "14px",
                  "font-weight": 600,
                  "line-height": "1em",
                  display: "flex",
                }}
              >
                <div>1</div>
                <Box
                  className="dash"
                  sx={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "#060606",
                    mx: "20px",
                  }}
                />
                <Box sx={{ textTransform: "capitalize" }}>learn more</Box>
              </Box>
              <Typography
                variant="h2"
                sx={{
                  color: "#060606",
                  marginTop: 0,
                  marginBottom: "16px",
                  fontFamily: "Playfair Display, sans-serif",
                  fontSize: {
                    xs: "29.5px",
                    sm: "33px",
                    md: "37px",
                    lg: "42px",
                  },
                  fontWeight: 400,
                  lineHeight: "1.286em",
                }}
              >
                about the {data.name}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{ mb: { xs: "40px", lg: "48px" } }}
              >
                Experience the allure of Agadir with Luxury Rentals. We offer
                luxurious villas, apartments, penthouses, and car hire. Relax
                and enjoy your stay; we prioritize your peace of mind.
              </Typography>
              <ReactWhatsapp
                number="+212680-844679"
                message="hi..."
                element="button"
              >
                <Link to="#">
                  <Typography
                    component="span"
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      borderRadius: 0,
                      fontWeight: { xs: 500, md: 700 },
                      letterSpacing: ".1rem",
                      px: { xs: 2, md: 4 },
                      py: 2,
                      textTransform: "uppercase",
                      fontSize: { xs: "14px", md: "16px" },
                      "&:hover": {
                        bgcolor: "white",
                        color: "black",
                        border: "1.5px solid black",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Book Now
                  </Typography>
                </Link>
              </ReactWhatsapp>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
