import React, { useEffect } from "react"
import ReservationButton from "./ReservationButton";
import landingPageImage from "../../assets/birthday.jpg";
import DesktopVideo from "../../assets/desktop-video.mp4"; // Import your video file
import MiddleHomePage from "./MiddleHomePage";
import ImageCollage from "./ImageCollage";

export default function LandingPage() {

  useEffect(() => {
    document.body.classList.add("fade-in");
    return () => {
      document.body.classList.remove("fade-in");
    };
  }, []);

  return (
    <>
      <section className="center-content">
      <video
          className="desktop-only"
          src={DesktopVideo}
          autoPlay
          muted
          loop
        />
        <img
          className="mobile-only landing-page-image"
          src={landingPageImage}
          alt="restaurant patio"
        />
        <ReservationButton />
        
      </section>
      <MiddleHomePage />
      <ImageCollage />
    </>
  );
}
