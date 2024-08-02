import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import data from "../../Data/data.json";
import { Link } from "react-router-dom";
import { BalconyOutlined, HotTubOutlined, PoolOutlined, ShowerOutlined, WifiOutlined } from "@mui/icons-material";
import MeetingRoomIconOutlined from "@mui/icons-material/MeetingRoom";

export default function AllCategories({ category }: { category: string }) {
  const dataImported = data.data[0][category];
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Box
        ref={sectionRef}
        className="all-categories"
        sx={{
          pt: "212px",
          pb: "100px",
        }}
      >
        <Container
          className="category-title"
          sx={{
            textAlign: "center",
          }}
        >
          <h1>{dataImported[0].name_1 + " " + dataImported[0].name_2}</h1>
          <Typography
            component="p"
            sx={{
              mb: "18px",
              margin: "auto",
              maxWidth: "800px",
            }}
            dangerouslySetInnerHTML={{ __html: dataImported[0].description }}
          />
        </Container>

        <Container
          className="category-items"
        >
          <Box className="w-dyn-list">
            <Box
              className="list"
              sx={{
                display: "grid",
                gridColumnGap: "24px",
                gridRowGap: {xs: "40px", sm: "56px"},
                marginTop: {xs: "20px", sm: "40px", md: "", lg: "55px"},
                gridTemplateRows: "auto",
                gridTemplateColumns: {xs: "1fr", lg: "50% 50%"},
                gridAutoColumns: "1fr",
                mx: "auto",
                maxWidth: {xs: "530px", lg: "100%"},
              }}
            >
              {dataImported[0].data.map((item) => (
                <Box 
                    className="item"
                    sx={{}}
                    key={item.id}
                >
                  <Box sx={{}}>
                    <Link className="image-wrapper" to={`${item.id}`}>
                      <Box
                        component="img"
                        src={item.images[0].url}
                        alt={item.name + " image"}
                        sx={{
                          maxHeight: "400px",
                          width: "100%",
                          objectFit: "cover",
                          objectPosition: "0% 50%",
                        }}
                      />
                    </Link>
                    <Box
                      className="card-centent"
                      sx={{
                        marginTop: {xs: "-65px", sm: "-80px", md: "-96px"},
                        marginRight: {sm: "20px", md: "33px"},
                        padding: {xs: "30px", sm: "0 40px 0 40px", md: "57px 33px"},
                        position: "relative",
                        backgroundColor: "white",
                      }}
                    >
                      <Box
                        className="dash-accent"
                        sx={{
                          width: "40px",
                          height: "1px",
                          backgroundColor: "#060606",
                          marginBottom: "18px",
                        }}
                      />
                      <Link to={`${item.id}`}>
                        <Typography
                          component="h2"
                          variant="h2"
                          sx={{
                            fontSize: "32px",
                            transition: "color 0.35s",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                      <Typography
                        sx={{
                          mb: "18px",
                        }}
                        dangerouslySetInnerHTML={{
                          __html: dataImported[0].description,
                        }}
                      />
                      <Divider sx={{mb: 2}} />
                      <Box
                        className="about-room"
                        sx={{
                          marginBottom: {xs: "20px", lg: "40px"},
                          display: "grid",
                          gridTemplateColumns: {xs: "auto auto", md: "auto auto auto"},
                          gridTemplateRows: "auto",
                          gridColumnGap: "24px",
                          gridRowGap: "24px",
                        }}
                      >
                        {item.rooms && (
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
                              {item.rooms} Rooms
                            </Typography>
                          </Box>
                        )}
                        {item.bathrooms && (
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
                              {item.bathrooms} BathRooms
                            </Typography>
                          </Box>
                        )}
                        {item.privetePool && (
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
                        {item.pool && (
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
                        {item.wifi && (
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
                        {item.balcony && (
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
                        {
                          item.jacuzzi && (
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
                          )
                        }
                      </Box>
                      <Divider sx={{}} />
                      <Link to={`${item.id}`}>
                        <Typography
                          sx={{
                            bgcolor: "black",
                            color: "white",
                            textAlign: "center",
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
                          more information
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
