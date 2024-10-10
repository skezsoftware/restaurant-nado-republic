import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ChefImage from "../../assets/chef-image.jpg";
import Lasanga from "../../assets/lasanga.jpg";
import RedAndWhiteWine from "../../assets/red-white-wine.jpg";
import RavioliAndSpaghetti from "../../assets/ravioli-spaghetti.jpg";
import LobsterRisotto from "../../assets/lobster-risotto.jpg";
import NadoBottle from "../../assets/nado-bottle.jpg";
import PatioFlowers from "../../assets/patio-flowers.jpg";
import Burrata from "../../assets/burrata.jpg";
import Cotoletta from "../../assets/cotoletta.jpg";
import CacioPepe from "../../assets/caciopepe.jpg";
import Bar from "../../assets/bar.jpg";
import SpaghettiPesto from "../../assets/spaghetti-pesto.jpg";

export default function WovenImageList() {
  return (
    <ImageList variant="woven" cols={3} gap={8} style={{ marginBottom: "3em" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
            style={{ borderRadius: "5px" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: ChefImage,
    title: "Chef Image",
  },
  {
    img: Lasanga,
    title: "Lasanga",
  },
  {
    img: RedAndWhiteWine,
    title: "Pouring wine",
  },
  {
    img: CacioPepe,
    title: "Cacio Pepe",
  },
  {
    img: NadoBottle,
    title: "Bottle of wine",
  },
  {
    img: Burrata,
    title: "Burrata",
  },
  {
    img: RavioliAndSpaghetti,
    title: "Ravioli and spaghetti",
  },
  {
    img: PatioFlowers,
    title: "Flowers on patio",
  },
  {
    img: SpaghettiPesto,
    title: "Spaghetti pesto",
  },
  {
    img: Cotoletta,
    title: "Cotoletta",
  },
  {
    img: Bar,
    title: "Bar",
  },
  {
    img: LobsterRisotto,
    title: "Lobster risotto",
  },
];
