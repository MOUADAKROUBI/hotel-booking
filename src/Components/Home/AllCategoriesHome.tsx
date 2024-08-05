import React, { useRef, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { Link } from "react-router-dom";
import {
  Balcony,
  HotTubOutlined,
  Pool,
  Shower,
  Wifi,
} from "@mui/icons-material";
import data from "../../Data/data.json";
import { useLanguage } from "../../Contexts/LanguageContext";
import ButtonBookNow from "../ui/ButtonBookNow";
import { useInView } from "framer-motion";

export default function AllCategoriesHome({ category, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
  const pagesEnglish = Object.keys(data['en'][0]);
  const dataImported = data[language][0][category];

  const [currentSlide, setCurrentSlide] = useState(
    language === "ar" ? dataImported?.[0]?.data?.length - 1 : 0
  );

  const totalSlides = dataImported?.[0]?.data?.length;

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <Box
        ref={ref}
        className="section"
        sx={{
          mt: 4,
          textAlign: "center",
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Box
          className="subtitle-amenties"
          sx={{
            color: "#060606",
            letterSpacing: language === "en" ? ".1em" : "0",
            textTransform: "uppercase",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "32px",
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "1em",
            display: "flex",
          }}
        >
          <div>0{dataImported?.[0].id + 1}</div>
          <Box
            className="dash"
            sx={{
              width: "40px",
              height: "1px",
              backgroundColor: "#060606",
              mx: "20px",
            }}
          />
          <Box sx={{ textTransform: "capitalize" }}>{category}</Box>
        </Box>
        <h1>{dataImported?.[0].name_1}</h1>
        <h2>{dataImported?.[0].name_2}</h2>
        <Typography
          component="p"
          sx={{
            maxWidth: "700px",
            margin: "auto",
            mb: { xs: "40px", lg: "48px" },
            px: { xs: "20px", lg: 0 },
          }}
          dangerouslySetInnerHTML={{ __html: dataImported?.[0].description }}
        />

        <Box>
          <Box
            sx={{
              clear: "both",
              maxWidth: "1024px",
              width: "auto",
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
                  verticalAlign: "top",
                  width: "100%",
                  height: "100%",
                  whiteSpace: "normal",
                  textAlign: language === "en" ? "left" : "right",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <Box
                    className="list"
                    sx={{
                      display: "flex",
                      transition: "transform 0.5s ease",
                      transform: `translateX(${language === "ar" ? "" : "-"}${
                        currentSlide * 100
                      }%)`,
                      width: "100%",
                    }}
                  >
                    {dataImported?.[0].data.map((item) => (
                      <Box
                        key={item.id}
                        className="listItem"
                        sx={{
                          minWidth: "100%",
                          boxSizing: "border-box",
                        }}
                      >
                        <Box
                          sx={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            flexDirection: { xs: "column", lg: "row" },
                          }}
                        >
                          <div className="linkCate">
                            <Box
                              component="img"
                              src={item.images[0].url}
                              alt={item.name}
                              sx={{
                                height: {
                                  xs: "280px",
                                  sm: "380px",
                                  md: "450px",
                                  lg: "542px",
                                },
                                maxWidth: { xs: "none", lg: "454px" },
                                width: { xs: "100%", lg: "auto" },
                                objectFit: "cover",
                              }}
                            />
                          </div>
                          <Box
                            sx={{
                              maxWidth: { xs: "90%", lg: "570px" },
                              backgroundColor: "#f8f8f8",
                              padding: { xs: "48px 20px", md: "40px 48px" },
                              mt: {
                                xs: "-68px",
                                sm: "-68px",
                                md: "-121px",
                                lg: 0,
                              },
                              whiteSpace: "normal",
                              zIndex: 2,
                              flexDirection: { xs: "column", sm: "row" },
                              display: { xs: "flex", sm: "block" },
                              overflow: { xs: "hidden", sm: "visible" },
                            }}
                          >
                            <Box>
                              <h3>{item.name}</h3>
                              <Typography
                                component="p"
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              />

                              <Divider />

                              <Box
                                sx={{
                                  gridColumnGap: {
                                    xs: "15px",
                                    sm: "40px",
                                    md: "44px",
                                    lg: "2vw",
                                  },
                                  gridRowGap: "53px",
                                  gridTemplateRows: "auto auto auto",
                                  gridTemplateColumns: {
                                    xs: "auto auto",
                                    md: "auto auto auto",
                                  },
                                  gridAutoColumns: "1fr",
                                  justifyContent: { xs: "center", lg: "start" },
                                  display: "grid",
                                  mt: 2,
                                }}
                              >
                                {item.rooms && (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mr: 4,
                                    }}
                                  >
                                    <MeetingRoomIcon fontSize="large" />
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
                                      {item.rooms}
                                      {language === "en" ? " Rooms" : " غرف"}
                                    </Typography>
                                  </Box>
                                )}
                                {item.bathrooms && (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mr: 4,
                                    }}
                                  >
                                    <Shower fontSize="large" />
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
                                      {item.bathrooms}
                                      {language === "en"
                                        ? " Bathrooms"
                                        : " حمامات"}
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
                                    <Pool fontSize="large" />
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
                                      {language === "en"
                                        ? "Private Pool"
                                        : "حمام سباحة خاص"}
                                    </Typography>
                                  </Box>
                                )}
                                {item.pool && (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mr: 4,
                                    }}
                                  >
                                    <Pool fontSize="large" />
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
                                      {language === "en"
                                        ? "Pool"
                                        : "حمام سباحة"}
                                    </Typography>
                                  </Box>
                                )}
                                {item.wifi && (
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                      mr: 4,
                                    }}
                                  >
                                    <Wifi fontSize="large" />
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
                                      {language === "en" ? "Wifi" : "واي فاي"}
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
                                    <Balcony fontSize="large" />
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
                                      {language === "en" ? "Balcony" : "شرفة"}
                                    </Typography>
                                  </Box>
                                )}
                                {item.jacuzzi && (
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
                                      {language === "en" ? "Jacuzzi" : "جاكوزي"}
                                    </Typography>
                                  </Box>
                                )}
                              </Box>
                              <ButtonBookNow
                                texten="Book Now"
                                textar="احجز الان"
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
                {/* Navigation Controls */}
                <Box
                  sx={{
                    my: { xs: 0, sm: 1, md: 3, lg: 5 },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box
                      className="sectionLeftArrow"
                      onClick={goToPrevious}
                      sx={{
                        color: "#060606",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1em",
                        overflow: "visible",
                        zIndex: 4,
                        cursor: "pointer",
                        userSelect: "none",
                        flex: { xs: "50%", sm: "20%" },
                        order: { xs: 1, sm: 0 },
                      }}
                    >
                      <Box
                        className="textArrow"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Typography
                          className="arrow"
                          sx={{
                            transform:
                              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            fontFamily: "Icons Hotel Template, sans-serif",
                            fontSize: "16px",
                          }}
                        >
                          {language === "en" ? (
                            <ArrowBackIcon />
                          ) : (
                            <ArrowForwardIcon />
                          )}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      className="sectionRightArrow"
                      onClick={goToNext}
                      sx={{
                        color: "#060606",
                        letterSpacing: ".08em",
                        textTransform: "uppercase",
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "1em",
                        overflow: "visible",
                        zIndex: 4,
                        flex: { xs: "50%", sm: "20%" },
                        order: { xs: 2, sm: 3 },
                      }}
                    >
                      <Box
                        className="textArrow"
                        sx={{
                          alignItems: "center",
                          display: "flex",
                          cursor: "pointer",
                          justifyContent: "end",
                          userSelect: "none",
                        }}
                      >
                        <Typography
                          className="arrow"
                          sx={{
                            transform:
                              "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                            fontFamily: "Icons Hotel Template, sans-serif",
                            fontSize: "16px",
                          }}
                        >
                          {language === "en" ? (
                            <ArrowForwardIcon />
                          ) : (
                            <ArrowBackIcon />
                          )}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="slider-button"
                      sx={{
                        flex: { xs: "100%", sm: "60%" },
                        order: { xs: 3, sm: 2 },
                        mt: { xs: 3, sm: 0 },
                      }}
                    >
                      <Link
                        to={`/${language}/${pagesEnglish[index].replace(" ", "")}`}
                        className="button-slider"
                      >
                        <Typography
                          sx={{
                            bgcolor: "white",
                            color: "black",
                            borderRadius: 0,
                            fontWeight: 600,
                            letterSpacing: language === "en" ? ".1rem" : "0",
                            px: { xs: 2, md: 4 },
                            py: 2,
                            textTransform: "uppercase",
                            fontSize: { xs: "14px", md: "16px" },
                            textAlign: "center",
                            borderTop: "1.5px solid black",
                            borderBottom: "1.5px solid black",
                            "&:hover": {
                              bgcolor: "black",
                              color: "white",
                              boxShadow: "none",
                              zIndex: 1,
                            },
                          }}
                        >
                          {language === "en" ? "View All" : "عرض كل"} {category}
                        </Typography>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
