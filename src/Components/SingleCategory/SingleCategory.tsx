import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import data from "../../Data/data.json";
import SingleCategoryHero from "./SingleCategoryHero";
import SingleCategoryAbout from "./SingleCategoryAbout";
import SingleCategoryAmenities from "./SingleCategoryAmenities";
import Gallery from "./Gallery";
import NotFound from "../NotFound";
import { useLanguage } from "../../Contexts/LanguageContext";
import { Helmet } from "react-helmet";

export default function SingleCategory({ category }: { category: string }) {
  const { id } = useParams();
  const { language } = useLanguage();
  const dataImported = data[language][0][category];

  const singleData = dataImported?.[0].data.find(
    (singleData: any) => singleData.id == id
  );
  const galleryRef = useRef<HTMLDivElement>(null);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [id]);

  if (!singleData) return <NotFound />;

  return (
    <>
      <Helmet>
        <title>
          {language === "en"
            ? `Luxury Rentals | ${singleData.name}`
            : `تأجيرات فاخرة | ${singleData.name}`}
        </title>
        <meta
          name="keywords"
          content="Luxury, Rentals, Items, Rent, Home, Categories, About Us"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Rentals" />
        <meta
          name="description"
          content="Luxury Rentals is a website that offers a wide range of luxury items for rent"
        />
      </Helmet>
      <Box
        component="section"
        ref={sectionRef}
        className="single-category"
        sx={{
          paddingTop: {xs: "246px", sm: "320px", md: "349px", lg: "563px"},
          paddingBottom: 0,
          position: "relative",
        }}
      >
        <Box
          className="image-wrapper"
          sx={{
            maxHeight: {xs: "320px", sm: "450px", md: "550px", lg: "679px"},
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={`${(category === 'car hire' || category === 'استئجار السيارات') ? '/images/rangerover.jpeg' : 'https://assets-global.website-files.com/5f28567562c2bb18b4a14f33/5f32cfe2e9e05b64cefc0521_image-room-01-hotel-template.jpg'}`}
            alt={id}
            sx={{
              width: "100%",
              height: {xs: "320px", sm: "450px", md: "550px", lg: "679px"},
              objectFit: "cover",
            }}
          />
        </Box>

        <SingleCategoryHero galleryRef= {galleryRef} data= {singleData} />
        <SingleCategoryAbout data={singleData} />
        <SingleCategoryAmenities data={singleData} />
        <Gallery galleryRef= {galleryRef} images={singleData.images} />
      </Box>
    </>
  );
}
