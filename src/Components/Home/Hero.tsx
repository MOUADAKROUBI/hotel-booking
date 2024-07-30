import { Box, Typography } from "@mui/material";
import React from "react";

export default function Hero({ aboutusRef }: { aboutusRef: React.RefObject<HTMLDivElement> }) {
  return (
    <>
      <Box
        component="section"
        className="hero"
        sx={{
          paddingTop: "200px",
          paddingBottom: { xs: "0px", lg: "60px" },
          position: "relative",
        }}
      >
        <Box
          sx= {{
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <Box
            sx= {{
              maxWidth: {xs: '100%', lg: "70%"},
              marginBottom: "60px",
              transform: "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
              transformStyle: 'preserve-3d',
              opacity: 1,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: "black",
                fontSize: { xs: "49px", sm: "58px", md: "70px", lg: "84px" },
                fontWeight: 400,
                lineHeight: "1.095em",
                fontFamily: "Playfair Display, sans-serif",
                mb: { xs: "20px", lg: "32px" },
                ml: "24px",
              }}
            >
              Embark on Your Journey in the Heart of Morocco
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#626262",
                pl: "24px",
                maxWidth: { xs: "100%", lg: "500px" },
              }}
            >
              Welcome to Agadir Concierge, your gateway to a hassle-free vacation experience in Agadir.
            </Typography>
            <Box sx={{ mt: 5, ml: 3, cursor: "pointer" }}>
              <Box
                onClick={() => {aboutusRef.current?.scrollIntoView({ behavior: "smooth" })}}
              >
                <Typography
                  component="span"
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    borderRadius: 0,
                    fontWeight: 700,
                    letterSpacing: ".1rem",
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
                  About Us
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            zIndex: -1,
            width: { xs: "100%", lg: "46%" },
            opacity: 1,
            position: { xs: "static", lg: "absolute" },
            top: 0,
            bottom: 0,
            right: 0,
          }}
        >
          <Box
            component="img"
            src="../src/assets/hero.jpeg"
            alt="hero"
            sx={{
              height: {xs: '300px', sm: '400px', md: '500px', lg: '800px'},
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
