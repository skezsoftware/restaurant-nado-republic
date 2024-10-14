import React, { useEffect } from "react"
import ReservationButton from "./ReservationButton";
import landingPageImage from "../../assets/nado-patio-image.jpg";
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
      </section>
      <MiddleHomePage />
      <ImageCollage />
    </>
  );
}
