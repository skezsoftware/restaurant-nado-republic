import appetizers from '../../mocks/appetizers.json'

export default function AppetizersDinner() {

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
            {/* <p id="item-price">${appetizer.price}</p> */}
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
