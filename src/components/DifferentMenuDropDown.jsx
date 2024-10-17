import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function BasicMenu({
  children,
  color,
  fontWeight,
  fontSize,
  my = 0,
  ml = 0,
  onClose,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    if (onClose) onClose(); // Call the onClose function passed as a prop
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ my: my, display: "block", ml: ml }}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: color,
            fontFamily: "'Courier New', Courier, monospace",
            fontWeight: fontWeight,
            fontSize: fontSize,
            letterSpacing: ".1rem",
            ":hover": { color: "#beac74" },
          }}
        >
          {children}
        </Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem component={Link} to="/dinner" onClick={handleClose}>
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "700",
              fontSize: "1.5em",
              letterSpacing: ".1rem",
              ":hover": { color: "#beac74" },
            }}
          >
            Dinner
          </Typography>
        </MenuItem>
        <MenuItem component={Link} to="/lunch" onClick={handleClose}>
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "700",
              fontSize: "1.5em",
              letterSpacing: ".3rem",
              ":hover": { color: "#beac74" },
            }}
          >
            Lunch
          </Typography>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontFamily: "'Courier New', Courier, monospace",
              fontWeight: "550",
              fontSize: "1.5em",
              ":hover": { color: "#beac74" },
            }}
          >
            Logout
          </Typography>
        </MenuItem> */}
      </Menu>
    </div>
  );
}
