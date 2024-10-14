import { useEffect, useState } from "react";

export default function MeatsAndFishDinner() {
  const [meatsAndFish, setMeatsAndFish] = useState([]);

  async function fetchMeatsAndFishDinner() {
    try {
      const response = await fetch("http://localhost:3000/api/meatsandfish");
      const data = await response.json();
      console.log(data);
      setMeatsAndFish(data); // Update state with fetched data
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchMeatsAndFishDinner();
  }, []);

  return (
    <>
      <header className="manu-section-header">
        <h2>MEATS & FISH</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {meatsAndFish.map((meatAndFish, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{meatAndFish.name.toUpperCase()}</p>
            <p id="item-description">{meatAndFish.description}</p>
            {/* <p id="item-price">${meatAndFish.price}</p> */}
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
