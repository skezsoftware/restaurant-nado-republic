import pastas from '../../mocks/pastasLunch.json'

export default function AppetizersDinner() {

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