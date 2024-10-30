import React, { useRef, useState } from "react";
import { Box, Typography, Divider, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import data from "../Data/data.json";
import { useLanguage } from "../Contexts/LanguageContext";
import ButtonBookNow from "./ui/ButtonBookNow";
import { motion, useInView } from "framer-motion";

export default function FeedBack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
  const dataImported = data[language][1].feedback;

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = dataImported?.length;

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
        className="section feedback-section"
        sx={{
          mt: 4,
          textAlign: "center",
          transform: isInView
            ? "none"
            : `${
                language === "en" ? "translateX(-200px)" : "translateX(200px)"
              }`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Box className="feedback-container">
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
            <div>05</div>
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
              {language === "en" ? "Testimonials" : "الشهادات"}
            </Box>
          </Box>
          <h1>
            {language === "en"
              ? "Hear what our past guests have to say"
              : "استمع إلى ما قاله ضيوفنا السابقون"}
          </h1>
          <Typography
            component="p"
            sx={{
              maxWidth: "700px",
              margin: "auto",
              mb: { xs: "40px", lg: "48px" },
              px: { xs: "20px", lg: 0 },
            }}
          >
            {language === "en"
              ? "Discover genuine testimonials and heartfelt reviews from our previous guests. Their experiences and stories highlight the exceptional service, unforgettable moments, and unique experiences that await you."
              : "اكتشف شهادات صادقة ومراجعات معبرة من ضيوفنا السابقين. تجاربهم وقصصهم تسلط الضوء على الخدمة الاستثنائية واللحظات التي لا تُنسى والتجارب الفريدة التي تنتظرك."}
          </Typography>
        </Box>
        <Container
          sx={{
            overflow: "hidden",
            pb: "20px",
          }}
        >
          <Box
            className="testimonials-grid"
            sx={{
              display: "flex",
              transition: "transform 0.5s ease",
              transform: {
                xs: `translateX(${language === "ar" ? "" : "-"}${
                  currentSlide * 105
                }%)`,
                md: `translateX(${language === "ar" ? "" : "-"}${
                  currentSlide * 50
                }%)`,
              },
              width: "100%",
              flexWrap: "nowrap",
              gap: "20px",
              mb: { xs: "40px", lg: "48px" },
            }}
          >
            {dataImported.map((item, index) => (
              <Box
                key={index}
                className="card-testimonial"
                sx={{
                  minWidth: { xs: "100%", md: "50%" },
                  borderStyle: "solid",
                  borderWidth: "4px 1px 1px",
                  borderColor: "#060606 #cfcfcf #cfcfcf",
                  px: { xs: "30px", sm: "40px", md: "20px", lg: "40px" },
                  padding: "32px 40px",
                  backgroundColor: "#fff",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }}
              >
                <Box className="content"
                  sx= {{
                    height: "100px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  <p>{item["feedback-content"]}</p>
                </Box>
                <Divider sx={{ margin: "24px 0" }} />
                <Box
                  className="testimonial-about-wrapper"
                  sx={{
                    justifyContent: "space-between",
                    alignItems: {
                      xs: "flex-start",
                      sm: "flex-end",
                      lg: "center",
                    },
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  <Box
                    className="testimonial-about"
                    sx={{
                      display: "flex",
                      textAlign: "start",
                      alignItems: { xs: "flex-start", lg: "center" },
                      flexDirection: { xs: "column", lg: "row" },
                      mb: { xs: "10px", sm: 0 },
                    }}
                  >
                    <Box
                      component="img"
                      src={item["flag-country"]}
                      alt="testimonial-avatar"
                      sx={{
                        width: "56px",
                        height: "56px", 
                      }}
                    />
                    <Box
                      className="testimonial-content"
                      sx={{
                        mt: { xs: "18px", lg: 0 },
                        ml: language === "en" ? { xs: 0, lg: "18px" } : 0,
                        mr: language === "ar" ? { xs: 0, lg: "18px" } : 0,
                      }}
                    >
                      <Box
                        className="testimonial-name"
                        sx={{
                          color: "#060606",
                          letterSpacing: language === "en" ? ".08em" : "0",
                          textTransform: "uppercase",
                          marginBottom: "6px",
                          fontWeight: 700,
                          lineHeight: "1.111em",
                        }}
                      >
                        {item.name}
                      </Box>
                      <Box
                        className="testimonial-title"
                        sx={{
                          lineHeight: "1em",
                        }}
                      >
                        {item.location}, {item.country}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    component="img"
                    src="https://assets-global.website-files.com/5f28567562c2bb7095a14f34/5f28a8e7449cb86f750623f2_stars-testimonial-hotel-template.svg"
                    alt="5 stars"
                    sx={{
                      maxWidth: "100%",
                      display: "inline-block",
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
          {/* buttons navigations */}
          <Box
            className="testimonial-buttons"
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              mb: "40px",
            }}
          >
            {/* show the previous arrow if the current silder is greth than 0 */}
            <motion.button
              onClick={goToPrevious}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              {
                // if language is arabic, show arrow pointing right
                language === "ar" ? (
                  <ArrowForwardIcon
                    sx={{
                      color: "#060606",
                      cursor: "pointer",
                      fontSize: "40px",
                    }}
                  />
                ) : (
                  // else, show arrow pointing left
                  <ArrowBackIcon
                    sx={{
                      color: "#060606",
                      cursor: "pointer",
                      fontSize: "40px",
                    }}
                  />
                )
              }
            </motion.button>

            <motion.button
              onClick={goToNext}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              {
                // if language is arabic, show arrow pointing left
                language === "ar" ? (
                  <ArrowBackIcon
                    sx={{
                      color: "#060606",
                      cursor: "pointer",
                      fontSize: "40px",
                    }}
                  />
                ) : (
                  // else, show arrow pointing right
                  <ArrowForwardIcon
                    sx={{
                      color: "#060606",
                      cursor: "pointer",
                      fontSize: "40px",
                    }}
                  />
                )
              }
            </motion.button>
          </Box>
          <ButtonBookNow texten="book now " textar="احجز الأن" />
        </Container>
      </Box>
    </>
  );
}
