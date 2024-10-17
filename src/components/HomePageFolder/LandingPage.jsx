import React, { useEffect } from "react"
import ReservationButton from "./ReservationButton";
import landingPageImage from "../../assets/nado-patio-image.jpg";
import mobileVideo from "../../assets/mobile-video.mp4"; // Import your video file
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
      <section>
        <img
          className="landing-page-image"
          src={landingPageImage}
          alt="restaurant patio"
        />
        <ReservationButton />
        <video
          className="mobile-video"
          src={mobileVideo}
          autoPlay
          muted
          loop
        />
      </section>
      <MiddleHomePage />
      <ImageCollage />
    </>
  );
}
