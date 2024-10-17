import pizzas from '../../mocks/pizzasLunch.json'

export default function AppetizersDinner() {

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