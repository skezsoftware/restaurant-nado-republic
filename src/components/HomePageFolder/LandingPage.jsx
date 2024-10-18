import React, { useEffect, useState } from "react";
import ReservationButton from "./ReservationButton";
import landingPageImage from "../../assets/birthday.jpg";
import DesktopVideo from "../../assets/desktop-video.mp4"; // Import your video file
import MiddleHomePage from "./MiddleHomePage";
import ImageCollage from "./ImageCollage";

export default function LandingPage() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("fade-in");
    return () => {
      document.body.classList.remove("fade-in");
    };
  }, []);

  return (
    <>
      <section className="center-content">
        {isDesktop && (
          <video
            className="desktop-only"
            src={DesktopVideo}
            autoPlay
            muted
            loop
          />
        )}
        {!isDesktop && (
          <img
            className="mobile-only landing-page-image"
            src={landingPageImage}
            alt="restaurant patio"
          />
        )}
        <ReservationButton />
      </section>
      <MiddleHomePage />
      <ImageCollage />
    </>
  );
}
