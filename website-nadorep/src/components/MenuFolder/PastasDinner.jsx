import { useEffect, useState } from "react";

export default function PastasDinner() {
  const [pastas, setPastas] = useState([]);

  async function fetchPastas() {
    try {
      const response = await fetch("http://localhost:3000/api/pastas");
      const data = await response.json();
      console.log(data);
      setPastas(data); // Update state with fetched data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPastas();
  }, []);

  return (
    <>
      <header className="manu-section-header">
        <h2>PASTAS</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {pastas.map((pasta, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{pasta.name.toUpperCase()}</p>
            <p id="item-description">{pasta.description}</p>
            <p id="item-price">${pasta.price}</p>
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
