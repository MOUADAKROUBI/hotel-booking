import React, { useState } from "react";
import { Box, Container, CardMedia, Modal } from "@mui/material";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonBookNow from "../ui/ButtonBookNow";

export default function Gallery({ galleryRef, images }: { galleryRef: React.RefObject<HTMLDivElement>, images: any }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpen = (index) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const settings = {
    initialSlide: activeIndex,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    afterChange: current => setActiveIndex(current),
  };

  return (
    <>
      <Box
        className="section room-gallery"
        id="Gallery"
        sx={{ backgroundColor: "#f8f8f8" }}
      >
        <Container sx={{ textAlign: "center" }} maxWidth="sm">
          <Box
            ref={galleryRef}
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
            <div>03</div>
            <Box
              className="dash"
              sx={{
                width: "40px",
                height: "1px",
                backgroundColor: "#060606",
                mx: "20px",
              }}
            />
            <Box sx={{ textTransform: "uppercase" }}>gallery</Box>
          </Box>
          <h2>A carefully designed room just for you</h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Container>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Box className="w-dyn-list">
            <Box
              className="list"
              sx={{
                gridColumnGap: "20px",
                gridRowGap: "20px",
                gridTemplateRows: "auto",
                gridTemplateColumns: {xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)"},
                gridAutoColumns: "1fr",
                display: "grid",
                mb: "48px",
              }}
            >
              {images.map((image, index) => (
                <Box key={index} className="item-gallery">
                  <CardMedia
                    component="img"
                    key={index}
                    src={image.url}
                    alt={`Image ${index + 1}`}
                    sx={{ height: "300px", width: "100%", objectFit: "covere" }}
                    onClick={() => handleOpen(index)}
                  />
                </Box>
              ))}
            </Box>
            <ButtonBookNow />
          </Box>
        </Container>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            bgcolor: 'background.paper',
            boxShadow: "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff",
            outline: 'none',
          }}
        >
          <Slider {...settings} >
            {images.map((src, index) => (
              <Box key={index} sx={{  }}>
                <CardMedia
                  component="img"
                  src={src.url}
                  alt={`Carousel Image ${index + 1}`}
                  sx={{ width: '100%', maxHeight: '85vh' }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Modal>
    </>
  );
}
