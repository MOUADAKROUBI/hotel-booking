import React from "react";
import { Grid, Box, Typography, Button, Container, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import { Link } from "react-router-dom";
import { Pool, Shower } from "@mui/icons-material";
import ReactWhatsapp from "react-whatsapp";

export default function Villas() {
  return (
    <>
      <Box maxWidth="lg" sx={{ textAlign: "center", mt: 4 }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            color: "#060606",
            letterSpacing: ".1em",
            textTransform: "uppercase",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "1em",
            display: "flex",
          }}
        >
          02 &mdash; VILLAS
        </Typography>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            color: "#060606",
            marginTop: 0,
            marginBottom: "16px",
            fontFamily: "Playfair Display, sans-serif",
            fontSize: { xs: "29.5px", sm: "33px", md: "37px", lg: "42px" },
            fontWeight: 400,
            lineHeight: "1.286em",
          }}
        >
          Exclusive
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            color: "#060606",
            marginTop: 0,
            marginBottom: "16px",
            fontFamily: "Playfair Display, sans-serif",
            fontSize: { xs: "29.5px", sm: "33px", md: "37px", lg: "42px" },
            fontWeight: "bold",
            lineHeight: "1.286em",
          }}
        >
          Agadir Villas
        </Typography>
        <Typography
          variant="body1"
          sx={{
            maxWidth: "600px",
            margin: "auto",
            mb: { xs: "40px", lg: "48px" },
          }}
        >
          Experience luxury living at{" "}
          <strong>Agadir Concierge's handpicked villas</strong>, nestled in
          stunning Agadir, Morocco. Whether seeking a tranquil retreat or lavish
          escape, our villas promise an unforgettable experience tailored to
          exceed expectations.
        </Typography>

        <Container>
          <Box
            sx={{
              transform:
                "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: "preserve-3d",
              opacity: 1,
              height: "660px",
              maxWidth: "1024px",
              backgroundColor: "rgba(0, 0, 0, 0)",
              justifyContent: "center",
              marginTop: "40px",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
            }}
          >
            <Box
              sx={{
                zIndex: 1,
                height: "100%",
                whiteSpace: "nowrap",
                display: "block",
                position: "relative",
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  transition: "all",
                  transform: "translateX(0px)",
                  opacity: 1,
                  verticalAlign: "top",
                  width: "100%",
                  height: "100%",
                  whiteSpace: "normal",
                  textAlign: "left",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <Box sx={{}}>
                  <Box className="list">
                    <Box className="listItem">
                      <Box
                        sx={{
                          justifyContent: "center",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Link to="" className="linkCate">
                          <Box
                            component="img"
                            src="https://cdn.prod.website-files.com/65d886c725c69624ce3df5d6/65d886c725c69624ce3df7f2_Main%20Image.jpeg"
                            alt="villa image"
                            sx={{
                              height: "542px",
                              maxWidth: "454px",
                              objectFit: "cover",
                            }}
                          />
                        </Link>
                        <Box
                          sx={{
                            maxWidth: "570px",
                            backgroundColor: "#f8f8f8",
                            padding: "40px 48px",
                            whiteSpace: "normal",
                          }}
                        >
                          <Box sx={{ textAlign: "left", p: 2 }}>
                            <Typography
                              variant="h3"
                              sx={{ 
                                fontSize: "32px",
                                transition: "color .35s",
                              }}
                            >
                              5 Bedroom Villa
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                              Immerse Yourself in Opulence: Discover the epitome
                              of luxury in our 5-bedroom villa. Boasting
                              expansive interiors, breathtaking vistas, and
                              top-tier amenities, this villa is the perfect
                              sanctuary for families or groups seeking an
                              extraordinary retreat.
                            </Typography>

                            <Divider />

                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                alignItems: "center",
                                mt: 2,
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mr: 4,
                                }}
                              >
                                <MeetingRoomIcon fontSize="large" />
                                <Typography variant="body2" sx={{
                                    ml: 1,
                                    letterSpacing: "normal",
                                    whiteSpace: "nowrap",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "1em",
                                 }}>
                                  5 Rooms
                                </Typography>
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Shower fontSize="large" />
                                <Typography variant="body2" sx={{
                                    ml: 1,
                                    letterSpacing: "normal",
                                    whiteSpace: "nowrap",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "1em",
                                 }}>
                                  3 BathRooms
                                </Typography>
                              </Box>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Pool fontSize="large" />
                                <Typography variant="body2" sx={{
                                    ml: 1,
                                    letterSpacing: "normal",
                                    whiteSpace: "nowrap",
                                    fontSize: "14px",
                                    fontWeight: 600,
                                    lineHeight: "1em",
                                 }}>
                                    Private Pool
                                </Typography>
                              </Box>
                            </Box>
                            <Divider sx= {{my:2}} />
                            <ReactWhatsapp number="+212680-844679" message="hi..." element="button" >
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
                                        Book Now
                                    </Typography>
                                </Link>
                            </ReactWhatsapp>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                {/* Navigation Controls */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 4,
                    }}
                  >
                    <Button startIcon={<ArrowBackIcon />} variant="text">
                      PREV
                    </Button>
                    <Button variant="outlined">BROWSE ALL ROOMS</Button>
                    <Button endIcon={<ArrowForwardIcon />} variant="text">
                      NEXT
                    </Button>
                  </Box>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
