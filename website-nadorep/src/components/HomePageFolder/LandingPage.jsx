import ReservationButton from "./ReservationButton";
import landingPageImage from "../../assets/nado-patio-image.jpg";
import MiddleHomePage from "./MiddleHomePage";
import ImageCollage from "./ImageCollage";

export default function LandingPage() {
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
