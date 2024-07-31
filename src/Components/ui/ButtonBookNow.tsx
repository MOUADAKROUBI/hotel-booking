import { Box, Typography } from "@mui/material";
import React from "react";
import ReactWhatsapp from "react-whatsapp";

export default function ButtonBookNow() {
  return (
    <>
      <Box className="btn-book-now">
        <ReactWhatsapp number="+212680-844679" message="hi..." element="button" className="w-full">
          <Typography
            component="span"
            sx={{
              backgroundColor: "#060606",
              color: "#ffffff",
              textAlign: "center",
              letterSpacing: ".08em",
              textTransform: "uppercase",
              padding: {xs: "22px 30px", sm: "22px 46px"},
              fontSize: "16px",
              lineHeight: "1.125em",
              border: "1px solid #060606",
            }}
          >
            <span>Book Now</span>
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
        </ReactWhatsapp>
      </Box>
    </>
  );
}
