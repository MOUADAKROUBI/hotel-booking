import React from "react";
import {
  BalconyOutlined,
  PoolOutlined,
  ShowerOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import MeetingRoomIconOutlined from "@mui/icons-material/MeetingRoom";
import { Box, Container, Typography } from "@mui/material";
import ButtonBookNow from "../ui/ButtonBookNow";

export default function SingleCategoryHero({ galleryRef, data }: { galleryRef: React.RefObject<HTMLDivElement> ,data: any }) {
  return (
    <>
      <Container>
        <Box
          className="book-now"
          sx={{
            backgroundColor: "white",
            pt: { sm: "50px" },
            pb: { sm: "48px" },
            px: { md: "40px" },
            padding: { xs: "40px 30px 20px", lg: "57px 100px 38px" },
            position: "relative",
          }}
        >
          <Box
            className="room-left"
            sx={{
              textAlign: "center",
            }}
          >
            <Box className="room-title" sx={{}}>
              <h1>{data.name}</h1>
            </Box>
            <Typography
              component="p"
              sx={{
                marginBottom: "32px",
              }}
              dangerouslySetInnerHTML={{
                __html: data.description,
              }}
            />
            <Box
              className="about-room"
              sx={{
                marginBottom: { xs: "20px", lg: "40px" },
                display: "grid",
                gridTemplateColumns: {
                  xs: "auto auto",
                  md: "auto auto auto",
                },
                gridTemplateRows: "auto",
                gridColumnGap: "24px",
                gridRowGap: "24px",
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
            </Box>
            <Box
              className="room-buttons"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box 
                className="btn-gallery" 
                sx={{ mb: { xs: "50px", sm: 0 } }}
                onClick={() => galleryRef.current?.scrollIntoView({ behavior: "smooth" })}
              >
                <Box
                  component="a"
                  href="#Gallery"
                  sx={{
                    border: "1px solid #060606",
                    color: "#060606",
                    mr: 1,
                    mb: { xs: "40px", sm: 0 },
                    textAlign: "center",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    padding: { xs: "22px 30px", sm: "22px 46px" },
                    fontSize: "16px",
                    lineHeight: "1.125em",
                    textDecoration: "none",
                  }}
                >
                  <span>View Gallery</span>
                  <Box
                    sx={{
                      display: "none",
                      width: "0px",
                      height: "62px",
                      backgroundColor: "#060606",
                      position: "absolute",
                      top: "0%",
                      bottom: "0%",
                      left: "0%",
                      right: "0%",
                      "&:hover": {
                        display: "block",
                        width: "100%",
                        height: "62px",
                      },
                    }}
                  />
                </Box>
              </Box>

              <ButtonBookNow />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
