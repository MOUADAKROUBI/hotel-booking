import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "../../Contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Hero({
  sectionRef,
  aboutusRef,
}: {
  sectionRef: React.RefObject<HTMLDivElement>;
  aboutusRef: React.RefObject<HTMLDivElement>;
}) {
  const { language } = useLanguage();

  return (
    <>
      <Box
        component="section"
        ref={sectionRef}
        className="hero"
        sx={{
          paddingTop: "200px",
          paddingBottom: { xs: "0px", lg: "60px" },
          height: { xs: "auto", lg: "100vh" },
          position: "relative",
        }}
      >
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
              sx={{
                maxWidth: { xs: "100%", lg: "70%" },
                marginBottom: "60px",
                transform:
                  "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                transformStyle: "preserve-3d",
                opacity: 1,
              }}
            >
              <Typography
                className="hero-title"
                component="h1"
                sx={{
                  fontSize: { xs: "49px", sm: "58px", md: "70px", lg: "84px" },
                  fontWeight: 400,
                  lineHeight: "1.095em",
                  fontFamily: "Playfair Display, sans-serif",
                  mb: { xs: "20px", lg: "32px" },
                  ml: "24px",
                }}
              >
                {language === "en"
                  ? "Embark on Your Journey in the Heart of Morocco"
                  : "إنطلق في رحلتك في قلب المغرب"}
              </Typography>
              <Typography
                component="p"
                sx={{
                  pl: "24px",
                  maxWidth: { xs: "100%", lg: "500px" },
                }}
              >
                {language === "en"
                  ? "Welcome to mafaman company, your gateway to a hassle-free vacation experience in Agadir."
                  : "مرحبًا بك في شركة مفمان، بوابتك إلى تجربة عطلة خالية من المتاعب في أكادير."}
              </Typography>
              <Box sx={{ mt: 5, ml: 3, cursor: "pointer" }}>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => {
                    aboutusRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      borderRadius: 0,
                      fontWeight: 700,
                      letterSpacing: language === "en" ? ".1rem" : "0",
                      px: 4,
                      py: 2,
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      "&:hover": {
                        bgcolor: "white",
                        color: "black",
                        border: "1.5px solid black",
                        boxShadow: "none",
                      },
                    }}
                  >
                    {language === "en" ? "Read More" : "نبذة عنا"}
                  </Typography>
                </motion.button>
              </Box>
            </Box>
          </Container>
        </motion.div>

        <Box
          sx={{
            zIndex: -1,
            width: { xs: "100%", lg: "46%" },
            opacity: 1,
            position: { xs: "static", lg: "absolute" },
            top: 0,
            bottom: 0,
            right: language === "en" ? 0 : "auto",
            left: language === "en" ? "auto" : 0,
          }}
        >
          <Box
            component="img"
            src="/images/hero.jpeg"
            alt="hero"
            sx={{
              height: { xs: "300px", sm: "400px", md: "500px", lg: "100vh" },
              width: "100%",
              objectFit: "cover",
              overflow: "hidden",
              opacity: 1,
            }}
          />
        </Box>
      </Box>
    </>
  );
}
