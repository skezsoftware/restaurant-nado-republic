// import { useEffect, useState } from "react";
import pizzas from '../../mocks/pizzas.json'
export default function PizzasDinner() {
  // const [pizzas, setPizzas] = useState([]);

  // async function fetchPizzas() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/pizzas");
  //     const data = await response.json();
  //     console.log(data);
  //     setPizzas(data); // Update state with fetched data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchPizzas();
  // }, []);

  return (
    <>
      <header className="manu-section-header">
        <h2>PIZZAS</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {pizzas.map((pizza, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{pizza.name.toUpperCase()}</p>
            <p id="item-description">{pizza.description}</p>
            {/* <p id="item-price">${pizza.price}</p> */}
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
