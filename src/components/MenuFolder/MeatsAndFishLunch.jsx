import meatsAndFishies from '../../mocks/meatsAndFishLunch.json'

export default function AppetizersDinner() {

  return (
    <>
      <header className="manu-section-header">
        <h2>MEATS & FISH</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {meatsAndFishies.map((meatsAndFish, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{meatsAndFish.name.toUpperCase()}</p>
            <p id="item-description">{meatsAndFish.description}</p>
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