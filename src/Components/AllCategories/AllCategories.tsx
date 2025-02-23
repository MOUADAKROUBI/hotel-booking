import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import data from "../../Data/data.json";
import { Link } from "react-router-dom";
import {
  BalconyOutlined,
  HotTubOutlined,
  PoolOutlined,
  ShowerOutlined,
  WifiOutlined,
} from "@mui/icons-material";
import MeetingRoomIconOutlined from "@mui/icons-material/MeetingRoom";
import { useLanguage } from "../../Contexts/LanguageContext";
import { Helmet } from "react-helmet";
import { motion, Variants } from "framer-motion";

export default function AllCategories({ category }: { category: string }) {
  const { language } = useLanguage();
  const dataImported = data[language][0][category];

  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [category]);

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 30,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>{dataImported[0].name_1 + " " + dataImported[0].name_2}</title>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Rentals" />
        <meta name="description" content={dataImported[0].description} />
      </Helmet>
      <Box
        ref={sectionRef}
        className="all-categories"
        sx={{
          pt: "212px",
          pb: "100px",
        }}
      >
        <Container
          className="category-title"
          sx={{
            textAlign: "center",
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
            <h1>{dataImported[0].name_1 + " " + dataImported[0].name_2}</h1>
          </motion.div>
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
            <Typography
              component="p"
              sx={{
                mb: "18px",
                margin: "auto",
                maxWidth: "800px",
              }}
              dangerouslySetInnerHTML={{ __html: dataImported[0].description }}
            />
          </motion.div>
        </Container>

        <Container className="category-items">
          <Box className="w-dyn-list">
            <Box
              className="list"
              sx={{
                display: "grid",
                gridColumnGap: "24px",
                gridRowGap: { xs: "40px", sm: "56px" },
                marginTop: { xs: "20px", sm: "40px", md: "", lg: "55px" },
                gridTemplateRows: "auto",
                gridTemplateColumns: { xs: "1fr", lg: "50% 50%" },
                gridAutoColumns: "1fr",
                mx: "auto",
                maxWidth: { xs: "530px", lg: "100%" },
              }}
            >
              {dataImported[0].data.filter((data) => data.id != 4).map((item) => (
                <motion.div
                  key={item}
                  className="card-container"
                  initial="offscreen"
                  whileInView="onscreen"
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <motion.div className="card" variants={cardVariants}>
                    <Link className="image-wrapper" to={`${item.id}`}>
                      <Box
                        component="img"
                        src={item.images[0].url}
                        alt={item.name + " image"}
                        sx={{
                          maxHeight: "400px",
                          width: "100vw",
                          objectFit: "cover",
                          objectPosition: "0% 50%",
                        }}
                      />
                    </Link>
                    <Box
                      className="card-centent"
                      sx={{
                        marginTop: { xs: "-65px", sm: "-80px", md: "-96px" },
                        marginRight: { sm: "20px", md: "33px" },
                        padding: {
                          xs: "30px",
                          sm: "0 40px 0 40px",
                          md: "57px 33px",
                        },
                        position: "relative",
                        backgroundColor: "white",
                      }}
                    >
                      <Box
                        className="dash-accent"
                        sx={{
                          width: "40px",
                          height: "1px",
                          backgroundColor: "#060606",
                          marginBottom: "18px",
                        }}
                      />
                      <Link to={`${item.id}`}>
                        <Typography
                          component="h2"
                          variant="h2"
                          sx={{
                            fontSize: "32px",
                            transition: "color 0.35s",
                          }}
                        >
                          {item.name}
                        </Typography>
                      </Link>
                      <Box className="item-description"
                        sx= {{
                          mb: "18px",
                          height: category != 'car hire' ? "100px" : "auto",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: category != 'car hire' ? 4 : 0,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        <Typography
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      </Box>
                      <Divider sx={{ mb: 2 }} />
                      <Box
                        className="about-room"
                        sx={{
                          marginBottom: { xs: "20px", lg: "40px" },
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "auto auto",
                            md: "auto auto auto",
                          },
                          gridTemplateRows: "auto",
                          gridColumnGap: "24px",
                          gridRowGap: "24px",
                        }}
                      >
                        {item.rooms && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mr: 4,
                            }}
                          >
                            <MeetingRoomIconOutlined fontSize="large" />
                            <Typography
                              variant="body2"
                              sx={{
                                ml: 1,
                                letterSpacing: "normal",
                                whiteSpace: "nowrap",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "1em",
                              }}
                            >
                              {item.rooms}
                              {language === "en" ? " Rooms" : " غرف"}
                            </Typography>
                          </Box>
                        )}
                        {item.bathrooms && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mr: 4,
                            }}
                          >
                            <ShowerOutlined fontSize="large" />
                            <Typography
                              variant="body2"
                              sx={{
                                ml: 1,
                                letterSpacing: "normal",
                                whiteSpace: "nowrap",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "1em",
                              }}
                            >
                              {item.bathrooms}
                              {language === "en" ? " Bathrooms" : " حمامات"}
                            </Typography>
                          </Box>
                        )}
                        {item.privetePool && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <PoolOutlined fontSize="large" />
                            <Typography
                              variant="body2"
                              sx={{
                                ml: 1,
                                letterSpacing: "normal",
                                whiteSpace: "nowrap",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "1em",
                              }}
                            >
                              {language === "en"
                                ? "Private Pool"
                                : "حمام سباحة خاص"}
                            </Typography>
                          </Box>
                        )}
                        {item.pool && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mr: 4,
                            }}
                          >
                            <PoolOutlined fontSize="large" />
                            <Typography
                              variant="body2"
                              sx={{
                                ml: 1,
                                letterSpacing: "normal",
                                whiteSpace: "nowrap",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "1em",
                              }}
                            >
                              {language === "en" ? "Pool" : "حمام سباحة"}
                            </Typography>
                          </Box>
                        )}
                        {item.wifi && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              mr: 4,
                            }}
                          >
                            <WifiOutlined fontSize="large" />
                            <Typography
                              variant="body2"
                              sx={{
                                ml: 1,
                                letterSpacing: "normal",
                                whiteSpace: "nowrap",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "1em",
                              }}
                            >
                              {language === "en" ? "Wifi" : "واي فاي"}
                            </Typography>
                          </Box>
                        )}
                        {item.balcony && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <BalconyOutlined fontSize="large" />
                            <Typography
                              variant="body2"
                              sx={{
                                ml: 1,
                                letterSpacing: "normal",
                                whiteSpace: "nowrap",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "1em",
                              }}
                            >
                              {language === "en" ? "Balcony" : "شرفة"}
                            </Typography>
                          </Box>
                        )}
                        {item.jacuzzi && (
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <HotTubOutlined fontSize="large" />
                            <Typography
                              variant="body2"
                              sx={{
                                ml: 1,
                                letterSpacing: "normal",
                                whiteSpace: "nowrap",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "1em",
                              }}
                            >
                              {language === "en" ? "Jacuzzi" : "جاكوزي"}
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Divider sx={{}} />
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                      >
                        <Link to={`${item.id}`}>
                          <Typography
                            sx={{
                              bgcolor: "black",
                              color: "white",
                              textAlign: "center",
                              borderRadius: 0,
                              fontWeight: { xs: 500, md: 700 },
                              letterSpacing: language === "en" ? ".1rem" : "0",
                              px: { xs: 2, md: 4 },
                              py: 2,
                              textTransform: "uppercase",
                              fontSize: { xs: "14px", md: "16px" },
                              "&:hover": {
                                bgcolor: "white",
                                color: "black",
                                border: "1.5px solid black",
                                boxShadow: "none",
                              },
                            }}
                          >
                            {language === "en"
                              ? "View more information"
                              : "عرض المزيد من المعلومات"}
                          </Typography>
                        </Link>
                      </motion.div>
                    </Box>
                  </motion.div>
                </motion.div>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
