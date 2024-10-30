import { Box, Typography } from "@mui/material";
import React from "react";
import { useLanguage } from "../../Contexts/LanguageContext";
import { motion } from "framer-motion";

export default function ButtonBookNow({
  texten,
  textar,
}: {
  texten: string;
  textar: string;
}) {
  const { language } = useLanguage();

  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <a
        href="https://wa.me/message/7EKHM7JVJBYZB1"
        target="__black"
        className="btn-book-now"
      >
        <Box
          sx={{
            backgroundColor: "#25D366",
            color: "#ffffff",
            textAlign: "center",
            letterSpacing: language === "en" ? ".08em" : 0,
            textTransform: "uppercase",
            padding: { xs: "22px 30px", sm: "22px" },
            fontSize: "18px",
            lineHeight: "1.125em",
            border: "none",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <i className="fa fa-whatsapp"></i>
          <div>
            <span>{language === "en" ? texten : textar}</span>
            <Box
              sx={{
                fontSize: "10px",
              }}
            >
              via whatsapp
            </Box>
          </div>
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
              // transition: "ease-in-out .9s ",
              "&:hover": {
                display: "block",
                width: "100%",
                height: "62px",
              },
            }}
          />
        </Box>
      </a>
    </motion.div>
  );
}
