import Pappardelle from "../../assets/pappardelle.jpeg";
import "../MenuFolder/Dinner-Menu.css";
import AddOns from "./AddOns";
import AppetizersDinner from "./AppetizersDinner";
import MeatsAndFishDinner from "./MeatsAndFish";
import PastasDinner from "./PastasDinner";
import PizzasDinner from "./PizzasDinner";
import SaladsDinner from "./SaladsDinner";

export default function Menu() {
  return (
    <>
      <image>
        <img src={Pappardelle} alt="menu" id="dinner-menu-image" />
      </image>
      <div>
        <header className="menu-page-header">
          <h1>DINNER MENU</h1>
        </header>
        <hr className="line-across-menu"></hr>
        <div className="dinner-menu-container">
          <AppetizersDinner />
          <SaladsDinner />
          <PizzasDinner />
          <PastasDinner />
          <MeatsAndFishDinner />
          <AddOns />
        </div>
      </div>
    </>
  );
}
