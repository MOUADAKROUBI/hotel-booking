import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Dialog,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Header({ categories }) {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickCategory = (categoryName) => {
    navigate(
      "/" + categoryName.target.innerText.replace(" ", "").toLowerCase()
    );
    setOpen(false);
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
                marginRight: 20,
                paddingLeft: 0,
                listStyleType: "none",
                display: "flex",
              }}
            >
              {categories.map((page) => (
                <Box key={page} component="li" sx={{ ml: 2 }}>
                  <Link to={page.replace(" ", "")}>
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
          {/* contact us */}
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              whiteSpace: "nowrap",
            }}
          >
            <Link to="/contactUs">
              <Typography
                component="span"
                sx={{
                  bgcolor: "black",
                  color: "white",
                  borderRadius: 0,
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  textTransform: "uppercase",
                  fontSize: "1rem",
                  padding: "18px 2vw",
                  "&:hover": {
                    bgcolor: "white",
                    color: "black",
                    border: "1.5px solid black",
                    boxShadow: "none",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Link>
          </Box>

          {/* menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <Box
              className="btn-menu"
              onClick={handleClickOpen}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "transparent"
                }
              }}
            >
              <Box
                className="line-one"
                sx= {{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "black",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  transition: "all 0.3s",
                  transform: open ? "rotate(45deg) translate(5px, 5px)" : "none",
                }}
              />
              <Box
                className="line-two"
                sx= {{
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
                sx= {{
                  width: "40px",
                  height: "3px",
                  backgroundColor: "black",
                  marginBottom: "8px",
                  borderRadius: "5px",
                  transition: "all 0.3s",
                  transform: open ? "rotate(-45deg) translate(7px, -6px)" : "none",
                }}
              />

            </Box>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
              <AppBar
                sx={{
                  position: "relative",
                  backgroundColor: "transparent",
                  color: "black",
                  boxShadow: "none",
                }}
              >
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Mafaman Company
                  </Typography>
                </Toolbar>
              </AppBar>
              <List>
                {categories.map((page) => (
                  <ListItemButton
                    key={page}
                    onClick={(page) => handleClickCategory(page)}
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: ".1rem",
                    }}
                  >
                    <ListItemText primary={page} />
                  </ListItemButton>
                ))}
                <ListItemButton
                  onClick={() => {
                    navigate("/contactUs");
                    setOpen(false);
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      bgcolor: "black",
                      color: "white",
                      borderRadius: 0,
                      fontWeight: 700,
                      letterSpacing: ".1rem",
                      px: 4,
                      py: 2,
                      textTransform: "uppercase",
                      fontSize: "1rem",
                      "&:hover": {
                        bgcolor: "white",
                        color: "black",
                        border: "1.5px solid black",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Contact Us
                  </Typography>
                </ListItemButton>
              </List>
            </Dialog>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Header;
