import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ChefImage from "../../assets/chef-image.jpg";
import Lasanga from "../../assets/lasanga.jpg";
import RedAndWhiteWine from "../../assets/red-white-wine.jpg";
import RavioliAndSpaghetti from "../../assets/ravioli-spaghetti.jpg";
import LobsterRisotto from "../../assets/lobster-risotto.jpg";
import EatingIce from "../../assets/eating-ice.jpg";
import ElsaEating from "../../assets/elsa-eating.jpg";
import Burrata from "../../assets/burrata.jpg";
import Brothers from "../../assets/brothers.jpg";
import Cotoletta from "../../assets/cotoletta.jpg";
import CacioPepe from "../../assets/caciopepe.jpg";
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
    img: ElsaEating,
    title: "Eating pizza",
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
    img: Brothers,
    title: "Brothers",
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
    img: EatingIce,
    title: "Eating Ice",
  },
  {
    img: LobsterRisotto,
    title: "Lobster risotto",
  },
];
