import React, { useRef, useState } from "react";
import { Box, Container, CardMedia, Modal } from "@mui/material";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ButtonBookNow from "../ui/ButtonBookNow";
import { useLanguage } from "../../Contexts/LanguageContext";
import { useInView } from "framer-motion";

export default function Gallery({ galleryRef, images }: { galleryRef: React.RefObject<HTMLDivElement>, images: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true });
  const { language } = useLanguage();
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
            <Box sx={{ textTransform: "uppercase" }}>
              {language === "en" ? "Gallery" : "الصور"}
            </Box>
          </Box>
          <h2>
            {language === "en"? "A carefully designed room just for you" : "غرفة مصممة بعناية خاصة لك"}
          </h2>
          <p>
            {language === "en"
              ? "A thoughtfully crafted space tailored to meet your needs, combining modern amenities with elegant design for a perfect stay."
              : "غرفة مصممة بعناية لتلبي احتياجاتك، تجمع بين وسائل الراحة الحديثة والتصميم الأنيق لإقامة مثالية."}
          </p>
        </Container>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Box className="w-dyn-list">
            <Box
              ref={ref}
              className="list"
              sx={{
                gridColumnGap: "20px",
                gridRowGap: "20px",
                gridTemplateRows: "auto",
                gridTemplateColumns: {xs: "1fr", md: "1fr 1fr", lg: "repeat(3, 1fr)"},
                gridAutoColumns: "1fr",
                display: "grid",
                mb: "48px",
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
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
            <ButtonBookNow texten="Book Now" textar="احجز الان" /> 
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
