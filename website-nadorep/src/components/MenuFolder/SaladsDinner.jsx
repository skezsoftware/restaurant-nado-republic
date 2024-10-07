import { useEffect, useState } from "react";

export default function SaladsDinner() {
  const [salads, setSalads] = useState([]);

  async function fetchSalads() {
    try {
      const response = await fetch("http://localhost:3000/api/salads");
      const data = await response.json();
      console.log(data);
      setSalads(data); // Update state with fetched data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchSalads();
  }, []);

  return (
    <>
      <header className="manu-section-header">
        <h2>SALADS</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {salads.map((salad, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{salad.name.toUpperCase()}</p>
            <p id="item-description">{salad.description}</p>
            <p id="item-price">${salad.price}</p>
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
