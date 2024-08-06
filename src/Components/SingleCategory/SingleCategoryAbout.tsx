import { Box, Container, Typography } from "@mui/material";
import React, { useRef } from "react";
import { useLanguage } from "../../Contexts/LanguageContext";
import ButtonBookNow from "../ui/ButtonBookNow";
import { useInView } from "framer-motion";

export default function SingleCategoryAbout({
  data,
}: {
  data: any;
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });

  const { language } = useLanguage();
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
        <Container>
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
              ref={ref}
              sx={{
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
                right: language === "en" ? 0 : "auto",
                left: language === "ar" ? 0 : "auto",
                order: -1,
                bgcolor: "white",
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
              }}
            >
              <Box
                className="subtitle-amenties"
                sx={{
                  color: "#060606",
                  letterSpacing: language === "en" ? ".1em" : 0,
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
                  {
                    language === "en" ? 'explore more': 'اكتشف المزيد' 
                  }
                </Box>
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
                {
                  language === "en"
                  ? "About the " + data.name
                  : "حول " + data.name
                }
              </Typography>
              <Typography
                variant="body1"
                component="div"
                sx={{ mb: { xs: "40px", lg: "48px", textTransform: 'capitlize' } }}
              >
                <Typography
                  sx={{
                    mb: "18px",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: data.description,
                  }}
                />
              </Typography>
              
              <ButtonBookNow texten="Book Now" textar="احجز الان" /> 
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
