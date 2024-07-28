import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const pages = [
  { link: "HOME", url: "/" },
  { link: "VILLAS", url: "/villas" },
  { link: "APARTMENTS", url: "/apartments" },
  { link: "PENTHOUSES", url: "/penthouses" },
  { link: "CAR HIRE", url: "/car-hire" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      sx={{
        boxShadow: 0,
        maxWidth: "1176px",
        bgcolor: "white",
        marginTop: "32px",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: "10px",
        paddingBottom: "10px",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" className="logo">
            <Box
              sx={{ display: 'flex', alignItems: "center" }}
            >
              <Box
                component="img"
                src="../src/assets/logo.png"
                sx={{
                  width: "100px",
                  height: "100px",
                  mr: 1,
                }}
              />
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "black",
                }}
              >
                Luxury Rentals
              </Typography>
            </Box>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="nav menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx= {{
                fontSize: "20px",
                fontWeight: "bold",
                color: "black",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.link}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                >
                  <Link to={page.url}>
                    <Typography textAlign="center">{page.link}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem>
                <Link to="/contactUs">
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
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={page.url} key={page.link}>
                <Typography
                  key={page.link}
                  sx={{
                    ml: 2,
                    color: "#060606",
                    display: "block",
                    fontSize: "16px",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                >
                  {page.link}
                </Typography>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: {'xs': 'none', 'md': 'block'} }}>
            <Link to="/contactUs">
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
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
