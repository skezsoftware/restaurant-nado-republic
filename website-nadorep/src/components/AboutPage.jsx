import AboutImage from "../assets/about-page-image.jpg";
import "../components/AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <header className="about-header">
        <h1>OUR STORY</h1>
      </header>
      <hr className="line-across-aboutpg"></hr>
      <section className="about-content">
        <img src={AboutImage} alt="table" id="about-image" />
        <div className="description-about">
          <p>
            Ciao! Welcome to Nado Republic, where we invite you to immerse
            yourself in one of the coziest atmospheres in town and indulge in
            incredible Italian cuisine prepared by our talented chef, Giorgio
            Corletti. Hailing from Rome, Chef Giorgio brings a fresh wave of
            authentic Italian flavors to our kitchen. With a career shaped by
            working alongside renowned Michelin-starred chefs across Italy, his
            culinary journey began as a celebrated pizza chef.
          </p>
          <p>
            Five years ago, Chef Giorgio brought his expertise to San Francisco,
            launching several acclaimed Italian restaurants. Now, his love for
            Coronado has led him to San Diego, where he has joined Nado Republic
            as a business partner, with the vision of creating one of the finest
            Italian dining experiences in the city.
          </p>{" "}
          <br />
          <p>
            At Nado Republic, our menu and atmosphere are constantly evolving,
            ensuring there is always something new and exciting for our guests
            to enjoy. Whether you’re here for a quick bite or a long, leisurely
            dinner, you’ll find a unique blend of experience and delicious food
            waiting for you.
          </p>
          <br />
          <p>
            Join us on this culinary journey and discover why Nado Republic is
            becoming a cornerstone of Italian cuisine in San Diego.
          </p>
        </div>
      </section>
    </>
  );
}
