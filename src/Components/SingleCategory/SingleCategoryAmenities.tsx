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
import { useLanguage } from "../../Contexts/LanguageContext";
import { motion } from "framer-motion";

export default function SingleCategoryAmenities({ data }) {
  const { language } = useLanguage();

  return (
    <>
      <Box className="section">
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
                    letterSpacing: language === "en" ? ".1rem" : "0",
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
                  <Box sx={{ textTransform: "capitalize" }}>
                    {language === "en" ? "Amenities" : "وسائل الراحة"}
                  </Box>
                </Box>
                <Box
                  sx={{
                    textAlign: language === "en" ? "left" : "right",
                  }}
                >
                  <h2>
                    {language === "en"
                      ? ""
                      : "الوسائل التي تساعدك على الاستمتاع كما لم تفعل من قبل"}
                  </h2>
                  <Typography component="p" sx={{ mb: 4 }}>
                    {language === "en"
                      ? "Our luxurious properties come equipped with a range of top-notch amenities to ensure your comfort and convenience. Enjoy our high-speed Wi-Fi, modern fitness center, refreshing swimming pool, and secure parking. Each unit is designed with your needs in mind, featuring fully equipped kitchens, comfortable living spaces, and elegant bathrooms. Whether you're staying for business or leisure, our amenities are tailored to enhance your experience and make you feel at home."
                      : "تأتي عقاراتنا الفاخرة مجهزة بمجموعة متنوعة من الخدمات عالية الجودة لضمان راحتك وراحتك. استمتع بخدمة الواي فاي السريعة، ومركز اللياقة البدنية الحديث، وحمام السباحة المنعش، ومواقف السيارات الآمنة. تم تصميم كل وحدة لتلبية احتياجاتك، وتتميز بمطابخ مجهزة بالكامل ومساحات معيشة مريحة وحمامات أنيقة. سواء كنت تقيم لأغراض العمل أو الترفيه، فإن خدماتنا مصممة لتعزيز تجربتك وجعلك تشعر وكأنك في المنزل."}
                  </Typography>
                </Box>
                <Box sx={{ mb: 4, width: "100%" }}>
                  <ButtonBookNow texten="book now " textar="احجز الان" />
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
                  gridTemplateColumns: {
                    xs: "auto auto",
                    sm: "auto auto auto",
                  },
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
            </Box>
          </Container>
        </motion.div>
      </Box>
    </>
  );
}
