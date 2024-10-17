import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import NadoLogo from "../assets/nado-logo.png";
import "./TopNavBar.css";
import BasicMenu from "./DifferentMenuDropDown";

const pages = [
  { title: "About", link: `/about` },
  { title: "Menu", link: "/menu" },
  { title: "Order Online", link: "/orderonline" },
  {
    title: "Reservations",
    link: "https://www.exploretock.com/nado-republic--coronado",
  },
  {
    title: "Gift Cards",
    link: "https://www.toasttab.com/nado-republic-1007-c-ave/giftcards",
  },
  { title: "Catering" },
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Special Elite",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={NadoLogo} alt="logo" id="fullscreen-logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) =>
                page.title === "Menu" ? (
                  <BasicMenu
                    fontWeight="600"
                    ml={1}
                    fontSize="1.6em"
                    color={"black"}
                    key={page.title}
                  >
                    {page.title}
                  </BasicMenu>
                ) : (
                  <MenuItem
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    as={Link}
                    to={page.link}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "black",
                        fontFamily: "'Courier New', Courier, monospace",
                        fontWeight: "600",
                        fontSize: "1.4em",
                        textTransform: "uppercase",
                        ":hover": { color: "#beac74" },
                      }}
                    >
                      {page.title}
                    </Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={NadoLogo} alt="logo" id="fullscreen-logo" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) =>
              page.title === "Menu" ? (
                <BasicMenu
                  fontWeight="550"
                  my={2}
                  fontSize="1.5em"
                  color="white"
                  key={page.title}
                >
                  {page.title}
                </BasicMenu>
              ) : (
                <Link
                  key={page.title}
                  to={page.link}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block" }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        color: "white",
                        fontFamily: "'Courier New', Courier, monospace",
                        fontWeight: "550",
                        fontSize: "1.5em",
                        ":hover": { color: "#beac74" },
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Button>
                </Link>
              )
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
