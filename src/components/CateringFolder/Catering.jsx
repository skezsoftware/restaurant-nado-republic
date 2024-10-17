import React from "react";

const CateringPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Catering Services</h1>
      <p style={styles.intro}>
        At our Italian restaurant, we take pride in delivering authentic,
        mouth-watering dishes right to your event. Whether you're hosting a
        corporate function, a family gathering, or a wedding, our catering
        services are designed to bring the flavors of Italy to your guests.<br />
        Contact us today to discuss your event details. Call us at
        (619)996-3271, or send us an email gm@nadorep.com
      </p>

      <h2 style={styles.subheader}>Why Choose Our Catering?</h2>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Authentic Italian Dishes:</strong> Enjoy the rich, traditional
          flavors of Italy, crafted by our expert chefs using fresh ingredients.
        </li>
        <li style={styles.listItem}>
          <strong>Customizable Menu:</strong> From appetizers to desserts, we
          offer a wide variety of dishes to suit every palate and dietary need.
        </li>
        <li style={styles.listItem}>
          <strong>Flexible Options:</strong> Whether you need full-service
          catering or simple drop-off, we cater to events of all sizes.
        </li>
        <li style={styles.listItem}>
          <strong>Exceptional Service:</strong> Our professional staff ensures
          your event runs smoothly, allowing you to relax and enjoy.
        </li>
      </ul>

      <h2 style={styles.subheader}>Our Menu Highlights</h2>
      <div style={styles.menu}>
        <div style={styles.menuItem}>
          <h3 style={styles.menuTitle}>STARTERS</h3>
          <p style={styles.menuDescription}>
            Meatballs, Caesar Salad, Calamari, Brussel Sprouts
          </p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.menuTitle}>PASTAS</h3>
          <p style={styles.menuDescription}>
            Rigatoni Bosciola, Spaghetti Cacio e Pepe, Ravioli Lobster
          </p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.menuTitle}>MAIN COURSES</h3>
          <p style={styles.menuDescription}>
            Cotoletta All Milanese, Veal Saltinbocca, Grilled Salmon
          </p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.menuTitle}>PIZZAS</h3>
          <p style={styles.menuDescription}>
            Marherita, Piccante, Broccolina, Funghi e Salciccia
          </p>
        </div>
      </div>

      <h2 style={styles.subheader}>Book Your Event Today!</h2>
      <p style={styles.outro}>
        Customize your menu, and let us handle the rest. We look forward to
        bringing the taste of Italy to your special occasion!
      </p>
      {/* <button style={styles.button}>Contact Us</button> */}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    color: "#beac74",
    textAlign: "center",
  },
  header: {
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  intro: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  subheader: {
    fontSize: "2rem",
    marginTop: "30px",
    marginBottom: "10px",
  },
  list: {
    textAlign: "left",
    margin: "0 auto 20px",
    padding: "0 20px",
  },
  listItem: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  menu: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
    marginBottom: "30px",
  },
  menuItem: {
    backgroundColor: "#7e2900",
    padding: "10px",
    borderRadius: "8px",
  },
  menuTitle: {
    fontSize: "1.5rem",
    marginBottom: "5px",
  },
  menuDescription: {
    fontSize: "1.1rem",
  },
  outro: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#E63946",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1.2rem",
  },
};

export default CateringPage;
