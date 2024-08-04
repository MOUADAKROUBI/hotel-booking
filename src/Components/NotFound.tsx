import React from 'react'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useLanguage } from '../Contexts/LanguageContext';

export default function NotFound() {
  const { language } = useLanguage();

  return (
    <>
      <Box
        component="section"
        className="not-found"
        sx={{
          maxHeight: "100%",
          backgroundColor: "#060606",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px 24px",
          display: "flex",
          height: "100%",
          backgroundImage: "linear-gradient(to bottom, #060606 70%, white 70%)",
          pt: {xs: "28px", lg: "84px"},
          pb: {xs: "211px", lg: "230px"},
        }}
      >
        <Box
          className="not-found__content"
          sx={{
            backgroundColor: "white",
            width: "820px",
            border: "1px solid #cfcfcf",
            mb: 0,
            padding: "40px",
            position: "relative",
            bottom: "-126px",
          }}
        >
          <Box 
            className="text-center"
            sx={{
              textAlign: "center",
            }}
          >
            <Box
              className="not-found__title"
              sx= {{
                color: "#060606",
                mb: "7px",
                fontSize: {xs: "92px", sm: "144px", md: "170px", lg: "180px"},
                fontWeight: 400,
                lineHeight: {xs: "120px", lg: "160px"},
              }}
            >
              404
            </Box>
            <h1>
              <span className="not-found__title">
                {
                  language === "en" ? "Oops!" : "عذرًا!"
                }
              </span>
            </h1>
            <Box
              className="not-found__text"
              sx= {{
                maxWidth: "380px",
                mb: "30px",
                ml: "auto",
                mr: "auto",
              }}
            >
              {
                language === "en" ? "The page you are looking for might have been removed, had its name changed or is temporarily unavailable." : "الصفحة التي تبحث عنها قد تمت إزالتها أو تغيير اسمها أو غير متاحة مؤقتًا."
              }
            </Box>
            <Link to="/home" className="button-slider">
              <Typography
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: 0,
                  fontWeight: 600,
                  letterSpacing: language === "en" ? ".1rem" : "0",
                  px: { xs: 2, md: 4 },
                  py: 2,
                  textTransform: "uppercase",
                  fontSize: { xs: "14px", md: "16px" },
                  textAlign: "center",
                  border: "1.5px solid black",
                  "&:hover": {
                    bgcolor: "white",
                    color: "black",
                    boxShadow: "none",
                    zIndex: 1,
                  },
                }}
              >
                {
                  language === "en" ? "Go to Home" : "العودة للصفحة الرئيسية"
                }
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  )
}
