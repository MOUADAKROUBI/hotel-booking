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
import data from '../Data/data.json';

function Header() {
  const [categories, setCategories] = React.useState<string[]>([]);

  React.useEffect(() => {
    const categoryNames = Object.keys(data.data[0]);
    setCategories(["home", ...categoryNames]);
  }, []);

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
              {categories.map((page) => (
                <MenuItem
                  key={page}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "10px",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                >
                  <Link to={page.replace(' ', '')}>
                    <Typography textAlign="center">{page}</Typography>
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
            {categories.map((page) => (
              <Link to={page.replace(' ', '')} key={page}>
                <Typography
                  sx={{
                    ml: 2,
                    color: "#060606",
                    display: "block",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    fontSize: "16px",
                    fontFamily: "monospace",
                    "&:hover": {
                      opacity: 0.7,
                    },
                  }}
                >
                  {page}
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
