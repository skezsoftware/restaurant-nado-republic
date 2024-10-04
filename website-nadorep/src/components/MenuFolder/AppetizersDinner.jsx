import { useEffect, useState } from "react";

export default function AppetizersDinner() {
  const [appetizers, setAppetizers] = useState([]);

  async function fetchAppetizers() {
    try {
      const response = await fetch("http://localhost:3000/api/appetizers");
      const data = await response.json();
      console.log(data);
      setAppetizers(data); // Update state with fetched data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchAppetizers();
  }, []);

  return (
    <>
      <header className="manu-section-header">
        <h2>APPETIZERS</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {appetizers.map((appetizer, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{appetizer.name.toUpperCase()}</p>
            <p id="item-description">{appetizer.description}</p>
          </div>
        ))}
        <hr
          className="line-across-menu"
          style={{ width: "100%", borderRadius: "35%", marginTop: "3em" }}
        ></hr>
      </div>
    </>
  );
}
