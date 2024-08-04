import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../Contexts/LanguageContext";

export default function Aboutus({ aboutusRef }: { aboutusRef: React.RefObject<HTMLDivElement> }) {
  const { language } = useLanguage();

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
                right: language === "en" ? "0" : "auto",
                left: language === "en" ? "auto" : "0",
                order: -1,
                bgcolor: "white",
              }}
            >
              <Box
                className="subtitle-amenties"
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
                <Box sx={{ textTransform: "capitalize" }}>
                  {language === "en" ? "About Us" : "نبذة عنا"}
                </Box>
              </Box>
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
                {
                  language === "en" ? "Discover the beauty of Agadir" : "اكتشف جمال أكادير"
                }
                <br />
                {
                  language === "en" ? "and reconnect with yourself" : "وأعد الاتصال بنفسك"
                }
              </Typography>
              <Typography variant="body1" component="div" sx={{ mb: {xs: "40px", lg: "48px"} }}>
                {
                  language === "en" ? "Experience the allure of Agadir with mafaman company. We offer luxurious villas, apartments, penthouses, and car hire. Relax and enjoy your stay; we prioritize your peace of mind." : "استمتع بجاذبية أكادير مع شركة مافامان. نحن نقدم فيلات فاخرة وشقق وبنتهاوسات وتأجير سيارات. استرخ واستمتع بإقامتك؛ نحن نولي أولوية لسلامتك."
                }
              </Typography>
              <Link to="#">
                <Typography
                  component="span"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    borderRadius: 0,
                    fontWeight: {xs: 500, md: 700},
                    letterSpacing: language === "en" ? ".1rem" : "0",
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
                  {
                    language === "en" ? "Explore more" : "استكشف المزيد"
                  }
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
