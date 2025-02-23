import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ReactWhatsapp from "react-whatsapp";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useLanguage } from "../Contexts/LanguageContext";
import { motion } from "framer-motion";

export default function Footer({
  categoriesEnglish,
  categoriesArabic,
}: {
  categoriesEnglish: string[];
  categoriesArabic: string[];
}) {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  return (
    <>
      <Box
        className="footer"
        component="footer"
        sx={{
          borderTop: "1px solid #cfcfcf",
          backgroundColor: "#fff",
          paddingTop: "72px",
        }}
      >
        <Container maxWidth="lg">
          <Box
            className="footer-top"
            sx={{
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", md: "flex-end" },
              flexDirection: { xs: "column", md: "row" },
              display: "flex",
            }}
          >
            <Box
              className="footer-top-left"
              sx={{
                maxWidth: "494px",
                flexDirection: "column",
                alignItems: "flex-start",
                mb: { xs: "32px", md: 0 },
                display: "flex",
              }}
            >
              <Box
                className="footer-top-left-logo"
                sx={{
                  marginBottom: "24px",
                  transitionProperty: "transform",
                }}
              >
                <Link to="/">
                  <Box
                    component="img"
                    src="/images/logo.png"
                    sx={{
                      width: "120px",
                    }}
                  />
                </Link>
              </Box>
              <p>
                {language === "en"
                  ? "Begin Your Adventure in the Heart of Morocco"
                  : "ابدأ مغامرتك في قلب المغرب"}
              </p>
            </Box>
            <Box className="footer-top-right">
              <Box
                className="footer-follow-us"
                sx={{
                  color: "#060606",
                  marginBottom: "25px",
                  fontWeight: 700,
                  lineHeight: "1em",
                  textTransform: "uppercase",
                }}
              >
                {language === "en" ? "Follow Us" : "تابعنا"}
              </Box>
              <Box
                className="footer-gap"
                sx={{
                  gridColumnGap: "26px",
                  gridTemplateRows: "auto",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gridAutoColumns: "1fr",
                  display: "grid",
                }}
              >
                <a
                  target="__black"
                  href="https://www.instagram.com/luxury_rentals_33/"
                >
                  <Box
                    className="footer-social-icon"
                    sx={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #060606",
                      backgroundColor: "#060606",
                      color: "white",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "Icons Hotel Template, sans-serif",
                      lineHeight: "1em",
                      textDecoration: "none",
                      transition: "color .35s, background-color .35s",
                      display: "flex",
                      "&:hover": {
                        backgroundColor: "#E0B006",
                        border: "none",
                      },
                    }}
                  >
                    <i className="fa fa-instagram"></i>
                  </Box>
                </a>
                <a target="__black" href="https://wa.me/message/7EKHM7JVJBYZB1">
                  <Box
                    className="footer-social-icon"
                    sx={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid #060606",
                      backgroundColor: "#060606",
                      color: "white",
                      justifyContent: "center",
                      alignItems: "center",
                      fontFamily: "Icons Hotel Template, sans-serif",
                      lineHeight: "1em",
                      textDecoration: "none",
                      transition: "color .35s, background-color .35s",
                      display: "flex",
                      "&:hover": {
                        backgroundColor: "#E0B006",
                        border: "none",
                      },
                    }}
                  >
                    <i className="fa fa-whatsapp"></i>
                  </Box>
                </a>
              </Box>
            </Box>
          </Box>

          <Divider
            sx={{
              mt: { xs: "40px", sm: "60px", md: "70px", lg: "72px" },
              mb: { xs: "40px", sm: "40px", md: "50px" },
            }}
          />

          <Box
            className="footer-buttom-meduim-to-big-screens"
            sx={{
              gridColumnGap: "2vw",
              gridTemplateRows: "auto",
              gridTemplateColumns: { xs: "auto", md: "auto auto" },
              marginBottom: { xs: "40px", sm: "60px", md: "80px", lg: "92px" },
              gridAutoColumns: "1fr",
              display: { xs: "none", md: "grid" },
            }}
          >
            <Box className="footer-pages" sx={{}}>
              <Box
                className="title"
                sx={{
                  mb: "32px",
                }}
              >
                <h3>{language === "en" ? "Pages" : "الصفحات"}</h3>
              </Box>
              {/* categories */}
              <Box
                component="nav"
                className="categories"
                sx={{
                  transition: "all",
                  transform: "translateX(0px) translateY(0px)",
                }}
              >
                <Box
                  component="ul"
                  className="categories-list"
                  sx={{
                    alignItems: "center",
                    listStyleType: "none",
                    display: "flex",
                  }}
                >
                  {(language === "en"
                    ? categoriesEnglish
                    : categoriesArabic
                  ).map((page, index) => (
                    <Box
                      key={index}
                      className="link-li"
                      component="li"
                      sx={{ mr: 2, mb: { xs: 2, md: 0 } }}
                    >
                      <Link
                        to={`/${language}/${(language === "en"
                          ? page
                          : categoriesEnglish[index]
                        ).replace(" ", "")}`}
                      >
                        <Typography
                          sx={{
                            color: "#626262",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            fontFamily: "Muli, sans-serif",
                            fontSize: "18px",
                            letterSpacing: language === "en" ? ".08em" : "0em",
                            lineHeight: "1em",
                            transition: "color .35s",
                            "&:hover": {
                              opacity: 0.7,
                            },
                          }}
                        >
                          {page}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="contact-us">
              <Box
                className="title"
                sx={{
                  mb: "32px",
                }}
              >
                <h3>{language === "en" ? "Contact US" : "اتصل بنا"}</h3>
              </Box>
              <Box>
                <Box
                  className="content links"
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box
                    component="ul"
                    className="list"
                    sx={{
                      marginBottom: 0,
                      paddingLeft: 0,
                    }}
                  >
                    <Box
                      component="li"
                      sx={{
                        alignItems: "center",
                        marginBottom: "15px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#626262",
                          whiteSpace: "nowrap",
                          fontSize: "18px",
                          lineHeight: "1.25em",
                          direction: "ltr",
                        }}
                      >
                        +212 605-231427
                      </Typography>
                    </Box>
                    <Box
                      component="li"
                      sx={{
                        alignItems: "center",
                        marginBottom: "15px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#626262",
                          whiteSpace: "nowrap",
                          fontSize: "18px",
                          lineHeight: "1.25em",
                        }}
                      >
                        contact@mafaman.com
                      </Typography>
                    </Box>
                    <Box
                      component="li"
                      sx={{
                        alignItems: "center",
                        marginBottom: "15px",
                        display: "flex",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#626262",
                          whiteSpace: "nowrap",
                          fontSize: "18px",
                          lineHeight: "1.25em",
                        }}
                      >
                        {language === "en"
                          ? "Founty Agadir, Morocco"
                          : "  فونتي، أكادير, المغرب"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            className="footer-buttom-small-screens"
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <h3>{language === "en" ? "Pages" : "الصفحات"}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  component="ul"
                  className="categories-list"
                  sx={{
                    listStyleType: "none",
                  }}
                >
                  {(language === "en"
                    ? categoriesEnglish
                    : categoriesArabic
                  ).map((page, index) => (
                    <Box
                      key={index}
                      component="li"
                      sx={{ mr: 2, mb: { xs: 2, md: 0 } }}
                    >
                      <Link
                        to={`/${language}/${(language === "en"
                          ? page
                          : categoriesEnglish[index]
                        ).replace(" ", "")}`}
                      >
                        <Typography
                          sx={{
                            color: "#626262",
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            fontFamily: "Muli, sans-serif",
                            fontSize: "18px",
                            letterSpacing: ".08em",
                            lineHeight: "1em",
                            transition: "color .35s",
                            "&:hover": {
                              opacity: 0.7,
                            },
                          }}
                        >
                          {page}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <h3>{language === "en" ? "Contact US" : "اتصل بنا"}</h3>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Box
                    className="content links"
                    sx={{
                      display: "flex",
                    }}
                  >
                    <Box
                      component="ul"
                      className="list"
                      sx={{
                        marginBottom: 0,
                        paddingLeft: 0,
                      }}
                    >
                      <Box
                        component="li"
                        sx={{
                          alignItems: "center",
                          marginBottom: "15px",
                          display: "flex",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#626262",
                            whiteSpace: "nowrap",
                            fontSize: "18px",
                            lineHeight: "1.25em",
                            direction: "ltr",
                          }}
                        >
                          +212 605-231427
                        </Typography>
                      </Box>
                      <Box
                        component="li"
                        sx={{
                          alignItems: "center",
                          marginBottom: "15px",
                          display: "flex",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#626262",
                            whiteSpace: "nowrap",
                            fontSize: "18px",
                            lineHeight: "1.25em",
                          }}
                        >
                          contact@mafaman.com
                        </Typography>
                      </Box>
                      <Box
                        component="li"
                        sx={{
                          alignItems: "center",
                          marginBottom: "15px",
                          display: "flex",
                        }}
                      >
                        <Typography
                          sx={{
                            color: "#626262",
                            whiteSpace: "nowrap",
                            fontSize: "18px",
                            lineHeight: "1.25em",
                          }}
                        >
                          {language === "en"
                            ? "Founty Agadir, Morocco"
                            : "  فونتي، أكادير, المغرب"}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
        <motion.div
          className="box"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            backgroundColor: "#060606",
            color: "#cfcfcf",
            textAlign: "center",
            padding: "23px 24px",
          }}
        >
          <Box
            className="content"
            sx={{
              textAlign: "center",
            }}
          >
            <p>
              {currentYear} ©{" "}
              {language === "en"
                ? "All Rights Reserved | Designed and Developed by"
                : "جميع الحقوق محفوظة | تصميم وتطوير"}
              <Typography
                component="span"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontFamily: "Muli, sans-serif",
                  cursor: "pointer",
                  ml: language === "ar" ? 0 : 1,
                  mr: language === "ar" ? 1 : 0,
                  transition: "color .35s",
                  "&:hover": { color: "#E0B006" },
                }}
              >
                <ReactWhatsapp
                  number="+212612738376"
                  message="hello..."
                  element="a"
                >
                  MOUAD AKROUBI
                </ReactWhatsapp>
              </Typography>
            </p>
          </Box>
        </motion.div>
      </Box>
    </>
  );
}
