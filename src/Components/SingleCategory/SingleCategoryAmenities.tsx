import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import ButtonBookNow from "../ui/ButtonBookNow";
import {
  BalconyOutlined,
  HotTubOutlined,
  PoolOutlined,
  ShowerOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import MeetingRoomIconOutlined from "@mui/icons-material/MeetingRoom";

export default function SingleCategoryAmenities({ data }) {
  return (
    <>
      <Box className="section">
        <Container>
          <Box
            className="amenties-page-wrapper"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", lg: "row" },
              alignItems: "center",
            }}
          >
            <Box
              className="amenities-page-left"
              sx={{
                maxWidth: { xs: "513px", lg: "44%" },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <Box
                className="subtitle-amenties"
                sx={{
                  color: "#060606",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  justifyContent: { xs: "center", lg: "flex-start" },
                  alignItems: "center",
                  marginBottom: { xs: "20px", lg: "32px" },
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "1em",
                  display: "flex",
                }}
              >
                <div>2</div>
                <Box
                  className="dash"
                  sx={{
                    width: "40px",
                    height: "1px",
                    backgroundColor: "#060606",
                    mx: "20px",
                  }}
                />
                <Box sx={{ textTransform: "capitalize" }}>amenities</Box>
              </Box>
              <h2>Amenities to help you enjoy like never before</h2>
              <Typography component="p" sx={{ mb: 4 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate, soluta harum quos perspiciatis blanditiis magnam!
                Aperiam velit sint quo non iure natus expedita, sapiente quidem
                eligendi inventore porro fugit error?
              </Typography>
              <Box sx={{ mb: 4, width: "100%" }}>
                <ButtonBookNow />
              </Box>
            </Box>

            <Divider
              orientation="vertical"
              flexItem
              sx={{ display: { xs: "none", lg: "block" }, mx: "5vw" }}
            />
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ display: { xs: "block", lg: "none" }, my: "40px" }}
            />

            <Box
              className="amenities-page-right"
              sx={{
                gridColumnGap: {
                  xs: "20px",
                  sm: "60px",
                  md: "64px",
                  lg: "4vw",
                },
                gridRowGap: "53px",
                gridTemplateRows: "auto auto auto",
                gridTemplateColumns: { xs: "auto auto", sm: "auto auto auto" },
                gridAutoColumns: "1fr",
                justifyContent: { xs: "center", lg: "start" },
                display: "grid",
              }}
            >
              {data.rooms && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <MeetingRoomIconOutlined fontSize="large" />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      letterSpacing: "normal",
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1em",
                    }}
                  >
                    {data.rooms} Rooms
                  </Typography>
                </Box>
              )}
              {data.bathrooms && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ShowerOutlined fontSize="large" />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      letterSpacing: "normal",
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1em",
                    }}
                  >
                    {data.bathrooms} BathRooms
                  </Typography>
                </Box>
              )}
              {data.privetePool && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PoolOutlined fontSize="large" />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      letterSpacing: "normal",
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1em",
                    }}
                  >
                    Private Pool
                  </Typography>
                </Box>
              )}
              {data.pool && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PoolOutlined fontSize="large" />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      letterSpacing: "normal",
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1em",
                    }}
                  >
                    Pool
                  </Typography>
                </Box>
              )}
              {data.wifi && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <WifiOutlined fontSize="large" />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      letterSpacing: "normal",
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1em",
                    }}
                  >
                    Wifi
                  </Typography>
                </Box>
              )}
              {data.balcony && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BalconyOutlined fontSize="large" />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      letterSpacing: "normal",
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1em",
                    }}
                  >
                    Balcony
                  </Typography>
                </Box>
              )}
              {data.jacuzzi && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <HotTubOutlined fontSize="large" />
                  <Typography
                    variant="body2"
                    sx={{
                      ml: 1,
                      letterSpacing: "normal",
                      whiteSpace: "nowrap",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "1em",
                    }}
                  >
                    Jacuzzi
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
