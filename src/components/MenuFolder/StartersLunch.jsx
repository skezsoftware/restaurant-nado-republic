import starters from '../../mocks/startersLunch.json'

export default function AppetizersDinner() {

  return (
    <>
      <header className="manu-section-header">
        <h2>STARTERS</h2>
      </header>
      <hr className="line-across-menu"></hr>
      <div>
        {starters.map((starter, index) => (
          <div key={index} id="dinner-item">
            <p id="item-title">{starter.name.toUpperCase()}</p>
            <p id="item-description">{starter.description}</p>
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