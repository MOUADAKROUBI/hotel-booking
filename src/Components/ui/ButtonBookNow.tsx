import { Box, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "../../Contexts/LanguageContext";

export default function ButtonBookNow({ texten, textar }: { texten: string, textar: string }) {
  const { language } = useLanguage();
  return (
    <Box
      sx= {{
        textAlign: "center"
      }}
    >
      <a href="https://wa.me/message/7EKHM7JVJBYZB1" target="__black" className="btn-book-now">
        <Typography
          component="span"
          sx={{
            backgroundColor: "#060606",
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: language === 'en' ? ".08em": 0,
            textTransform: "uppercase",
            padding: { xs: "22px 30px", sm: "22px" },
            fontSize: "20px",
            lineHeight: "1.125em",
            border: "1px solid #060606",
            borderRadius: "5px",
          }}
        >
          <span>
            {
              language === "en" ? texten : textar
            }
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
        </Typography>
      </a>
    </Box>
  );
}
