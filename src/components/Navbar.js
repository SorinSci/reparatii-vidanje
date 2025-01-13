import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleAcasa = () => {};
  const handleServicii = () => {};
  const handleTransporturi = () => {};
  const handleContact = () => {};

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "rgb(30,31,36)", minHeight: "80px" }}>
          <Toolbar style={{ justifyContent: "space-between", minHeight: "80px" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button style={{ color: "white", borderRadius: "60px", padding: "5px 20px", fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }} >
                <Typography style={{ color: "rgb(209, 77, 6)", fontSize: isSmallScreen ? "18px" : "25px", fontWeight: "bold", fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}> ECO SUN CRIS SRL - oferā servicii de reparații utilaje şi vidanje </Typography>
              </Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", color: "rgb(209, 77, 6)", flexDirection: isSmallScreen ? "column" : "row" }}>
              {menuOpen && 	!isSmallScreen && (
                <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "rgb(30,31,36)" }}>
                  <MenuItem onClick={handleAcasa} sx={{ color: "rgb(209, 77, 6)" }}>Acasā</MenuItem>
                  <MenuItem onClick={handleServicii} sx={{ color: "rgb(209, 77, 6)" }}>Servicii</MenuItem>
                  <MenuItem onClick={handleServicii} sx={{ color: "rgb(209, 77, 6)" }}>Transporturi</MenuItem>
                  <MenuItem onClick={handleContact} sx={{ color: "rgb(209, 77, 6)" }}>Contact</MenuItem>
                </Box>
              )}
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuToggle}
                sx={{ margin: isSmallScreen ? "10px 0" : "0 10px" }}

              >
                <MenuIcon />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="call"
                href="tel:+40730318915"
                sx={{ margin: isSmallScreen ? "10px 0" : "0 10px" }}

              >
                <PhoneIcon />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="email"
                href="mailto:example@example.com"
                sx={{ margin: isSmallScreen ? "10px 0" : "0 10px" }}

              >
                <MailIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {menuOpen && isSmallScreen && (
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", backgroundColor: "rgb(30,31,36)" }}>
            <MenuItem onClick={handleAcasa} sx={{ color: "rgb(209, 77, 6)" }}>Acasā</MenuItem>
            <MenuItem onClick={handleServicii} sx={{ color: "rgb(209, 77, 6)" }}>Servicii</MenuItem>
            <MenuItem onClick={handleTransporturi} sx={{ color: "rgb(209, 77, 6)" }}>Transporturi</MenuItem>
            <MenuItem onClick={handleContact} sx={{ color: "rgb(209, 77, 6)" }}>Contact</MenuItem>
          </Box>
        )}
      </Box>
    </div>
  );
}