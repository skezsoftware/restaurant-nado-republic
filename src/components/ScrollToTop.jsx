// import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "../../src/index.css";
import { useState, useEffect } from "react";

export default function FloatingActionButtonSize() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {isVisible && (
        <Fab
          color="secondary"
          aria-label="up"
          id="to-top-button"
          onClick={handleScrollToTop}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      )}
    </Box>
  );
}
