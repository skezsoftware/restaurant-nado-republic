import "../MenuFolder/Dinner-Menu.css";
import RavioliCacioEPepe from "../../assets/caciopepe.jpg";
import AddOns from "./AddOns";
import StartersLunch from "./StartersLunch";
import PizzasLunch from "./PizzasLunch";
import PastasLunch from "./PastasLunch";
import MeatsAndFishLunch from "./MeatsAndFishLunch";

export default function Menu() {
  return (
    <>
      <image>
        <img src={RavioliCacioEPepe} alt="menu" id="dinner-menu-image" />
      </image>
      <div>
        <header className="menu-page-header">
          <h1>LUNCH MENU</h1>
        </header>
        <hr className="line-across-menu"></hr>
        <div className="dinner-menu-container">
          <StartersLunch />
          <PizzasLunch />
          <PastasLunch />
          <MeatsAndFishLunch />
          <AddOns />
        </div>
      </div>
    </>
  );
}
