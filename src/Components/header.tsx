import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Dialog,
  List,
  ListItemButton,
  ListItemText,
  Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import { useLanguage } from "../Contexts/LanguageContext";
import ButtonBookNow from "./ui/ButtonBookNow";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header({ categoriesEnglish, categoriesArabic }: { categoriesEnglish: string[], categoriesArabic: string[] }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickCategory = (categoryName) => {
    if (language === "en") {
      navigate("/"+language +"/" + categoryName.target.innerText.replace(" ", "").toLowerCase());
    } else {
      const index = categoriesArabic.indexOf(categoryName.target.innerText);
      navigate("/"+language +"/" + categoriesEnglish[index].replace(" ", "").toLowerCase());
    }

    setOpen(false);
  };

  const { language, changeLanguage } = useLanguage();
  
  const handleLanguageChange = (newLang: string) => {
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", newLang);
    
    changeLanguage(newLang);
    const currentPath = location.pathname;
    const newPath = currentPath.replace(/^\/(en|ar)/, `/${newLang}`);
    navigate(newPath);
  };
  
  return (
    <Box
      component="header"
      className="header"
      sx={{
        maxWidth: "1176px",
        backgroundColor: "white",
        marginTop: { xs: 0, lg: "32px" },
        pt: { xs: 2, lg: 0 },
        marginLeft: "auto",
        marginRight: "auto",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: "16px", sm: "32px" },
        }}
      >
        <Box
          className="header-left"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* categories */}
          <Box
            component="nav"
            className="categories"
            sx={{
              order: 2,
              transition: "all",
              transform: "translateX(0px) translateY(0px)",
              display: { xs: "none", md: "block" },
              float: "right",
              position: "relative",
            }}
          >
            <Box
              component="ul"
              className="categories-list"
              sx={{
                justifyContent: "flex-end",
                alignItems: "center",
                marginBottom: 0,
                marginRight: language === "en" ? 20 : "auto",
                paddingLeft: 0,
                listStyleType: "none",
                display: "flex",
              }}
            >
              {(language === 'en' ? categoriesEnglish : categoriesArabic).map((page, index) => (
                <Box key={index} component="li" sx={{ 
                  mr: language === "en" ? 0 : 2,
                  ml: language === "en" ? 2 : 0,
                }}>
                  <Link to={`/${language}/${(language === 'en' ? page : categoriesEnglish[index]).replace(" ", "")}`}>
                    <Typography
                      sx={{
                        color: "#060606",
                        textTransform: "uppercase",
                        fontFamily: "Muli, sans-serif",
                        fontSize: "16px",
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
          </Box>
          {/* logo */}
          <Box
            className="brand"
            sx={{
              order: 1,
              float: "right",
              position: "relative",
            }}
          >
            <Link to="/" className="logo">
              <Box
                component="img"
                src="../src/assets/logo.png"
                sx={{
                  width: "100px",
                  maxWidth: "none",
                }}
              />
            </Link>
          </Box>
        </Box>
        <Box
          className="header-right"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box className="switch-launguge">
            <Button
              sx= {{
                color: "#060606",
                textTransform: "uppercase",
                fontFamily: "Muli, sans-serif",
                fontSize: "20px",
                // letterSpacing: ".08em",
                transition: "color .35s",
                p: 1,
                mr: language === "en" ? 2 : 0,
                ml: language === "ar" ? 2 : 0,
                "&:hover": {
                  opacity: 0.7,
                }
              }}
              onClick={() => handleLanguageChange(language === "en" ? "ar" : "en")}
            >
              {
                language === "en" ? "English" : "العربية"
              }
            </Button>
          </Box>
          {/* contact us */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              whiteSpace: "nowrap",
            }}
          >
            <ButtonBookNow texten="Contact US" textar="تواصل معنا" />
          </Box>

          {/* menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Box
              className="btn-menu"
              onClick={handleClickOpen}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box
                className="line-one"
                sx={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "black",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  transition: "all 0.3s",
                  transform: open
                    ? "rotate(45deg) translate(5px, 5px)"
                    : "none",
                }}
              />
              <Box
                className="line-two"
                sx={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "black",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  transition: "all 0.3s",
                  opacity: open ? 0 : 1,
                }}
              />
              <Box
                className="line-three"
                sx={{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "black",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  transition: "all 0.3s",
                  transform: open
                    ? "rotate(-45deg) translate(7px, -6px)"
                    : "none",
                }}
              />
            </Box>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",    
                  alignItems: "center",
                  borderBottom: "1px solid #e0e0e0",
                  padding: "24px 16px",
                }}
              >
                <Box className="section-logo">
                  <h3>
                    {
                      language === "en" ? "Mafaman Company" : "شركة مفامن"
                    }
                  </h3>
                </Box>
                <Box className="section-close-icon">
                  <Box
                    className="btn-menu"
                    onClick={handleClose}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <Box
                      className="line-one"
                      sx={{
                        width: "40px",
                        height: "3px",
                        backgroundColor: "black",
                        marginBottom: "8px",
                        borderRadius: "5px",
                        transition: "all 0.3s",
                        transform: open
                          ? "rotate(45deg) translate(10px, 8px)"
                          : "none",
                      }}
                    />
                    <Box
                      className="line-two"
                      sx={{
                        width: "40px",
                        height: "3px",
                        backgroundColor: "black",
                        marginBottom: "8px",
                        borderRadius: "5px",
                        transition: "all 0.3s",
                        opacity: open ? 0 : 1,
                      }}
                    />
                    <Box
                      className="line-three"
                      sx={{
                        width: "40px",
                        height: "3px",
                        backgroundColor: "black",
                        marginBottom: "8px",
                        borderRadius: "5px",
                        transition: "all 0.3s",
                        transform: open
                          ? "rotate(-45deg) translate(7px, -6px)"
                          : "none",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
              <List>
                {(language === 'en' ? categoriesEnglish : categoriesArabic).map((page, index) => (
                  <ListItemButton
                    key={index}
                    onClick={(page) => handleClickCategory(page)}
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: ".1rem",
                    }}
                  >
                    <ListItemText primary={page} />
                  </ListItemButton>
                ))}
                <ButtonBookNow texten="Contact US" textar="تواصل معنا" />
              </List>
            </Dialog>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
