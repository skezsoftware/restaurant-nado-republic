// import { useEffect, useState } from "react";
import addOns from '../../mocks/addOns.json'

export default function AddOns() {
  //const [addOns, setAddOns] = useState([]);

  // async function fetchAddOns() {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/addons");
  //     const data = await response.json();
  //     console.log(data);
  //     setAddOns(data); // Update state with fetched data
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   fetchAddOns();
  // }, []);

  return (
    <>
      <header className="manu-section-header">
        <h2>ADD-ONS</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {addOns.map((addOn, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{addOn.name.toUpperCase()}</p>
            {/* <p id="item-price">${addOn.price}</p> */}
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
