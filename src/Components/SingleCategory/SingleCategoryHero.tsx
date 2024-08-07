import React, { useRef } from "react";
import {
  BalconyOutlined,
  HotTubOutlined,
  PoolOutlined,
  ShowerOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import MeetingRoomIconOutlined from "@mui/icons-material/MeetingRoom";
import { Box, Container, Typography } from "@mui/material";
import ButtonBookNow from "../ui/ButtonBookNow";
import { useLanguage } from "../../Contexts/LanguageContext";
import { motion } from "framer-motion";

export default function SingleCategoryHero({
  galleryRef,
  data,
}: {
  galleryRef: React.RefObject<HTMLDivElement>;
  data: any;
}) {
  const { language } = useLanguage();

  return (
    <>
      <Container>
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          <Box
            component="section"
            className="section book-now"
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
                      mr: 4,
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
                      {data.rooms}
                      {language === "en" ? " Rooms" : " غرف"}
                    </Typography>
                  </Box>
                )}
                {data.bathrooms && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mr: 4,
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
                      {data.bathrooms}
                      {language === "en" ? " Bathrooms" : " حمامات"}
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
                      {language === "en" ? "Private Pool" : "حمام سباحة خاص"}
                    </Typography>
                  </Box>
                )}
                {data.pool && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mr: 4,
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
                      {language === "en" ? "Pool" : "حمام سباحة"}
                    </Typography>
                  </Box>
                )}
                {data.wifi && (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mr: 4,
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
                      {language === "en" ? "Wifi" : "واي فاي"}
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
                      {language === "en" ? "Balcony" : "شرفة"}
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
                      {language === "en" ? "Jacuzzi" : "جاكوزي"}
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
                  onClick={() =>
                    galleryRef.current?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Box
                      component="a"
                      href="#Gallery"
                      sx={{
                        border: "1px solid #060606",
                        color: "#060606",
                        mr: language === "en" ? 2 : 0,
                        ml: language === "en" ? 0 : 2,
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
                      <span>
                        {language === "en" ? "View Gallery" : "عرض الصور"}
                      </span>
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
                  </motion.div>
                </Box>

                <ButtonBookNow texten="Book Now" textar="احجز الان" />
              </Box>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </>
  );
}
