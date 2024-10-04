import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-nav-bar">
      <Box sx={{ width: 500, padding: 5 }}>
        <BottomNavigation
          showLabels
          style={{ backgroundColor: "#beac74" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <a href="https://www.instagram.com/nadorepublic/">
            <BottomNavigationAction
              label="Instagram"
              icon={<InstagramIcon sx={{ fontSize: 50 }} />}
            />
          </a>
          <a href="https://www.facebook.com/NADOrepublic">
            <BottomNavigationAction
              label="Facebook"
              icon={<FacebookIcon sx={{ fontSize: 50 }} />}
            />
          </a>
        </BottomNavigation>
        <div className="footer-contact-info">
          <p>(619)996-3271</p>
          <p>gm@nadorep.com</p>
        </div>
      </Box>
    </div>
  );
}
