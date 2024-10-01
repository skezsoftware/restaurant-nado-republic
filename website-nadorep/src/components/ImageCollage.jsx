import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ChefImage from '../assets/chef-image.jpg';
import Lasanga from '../assets/lasanga.jpg';
import RedAndWhiteWine from '../assets/red-white-wine.jpg';
import Cocktails from '../assets/cocktails.jpg';
import Birthday from '../assets/birthday.jpg';
import RavioliAndSpaghetti from '../assets/ravioli-spaghetti.jpg';
import LobsterRisotto from '../assets/lobster-risotto.jpg';
import NadoBottle from '../assets/nado-bottle.jpg';
import PatioFlowers from '../assets/patio-flowers.jpg';
import MarilynTable from '../assets/marilyn-table.jpg';
import FourWineGlasses from '../assets/four-glasses.jpg';
import Burrata from '../assets/burrata.jpg';
import Cotoletta from '../assets/cotoletta.jpg';
import CacioPepe from '../assets/caciopepe.jpg';
import Bar from '../assets/bar.jpg';
import ItalianFlag from '../assets/italian-flag.jpg';

export default function WovenImageList() {
  return (
    <ImageList variant="woven" cols={3} gap={8} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: ChefImage,
    title: 'Bed',
  },
  {
    img: Lasanga,
    title: 'Kitchen',
  },
  {
    img: RedAndWhiteWine,
    title: 'Sink',
  },
  {
    img: CacioPepe,
    title: 'Books',
  },
  {
    img: NadoBottle,
    title: 'Chairs',
  },
  {
    img: Burrata,
    title: 'Candle',
  },
  {
    img: RavioliAndSpaghetti,
    title: 'Laptop',
  },
  {
    img: PatioFlowers,
    title: 'Doors',
  },
  {
    img: Cotoletta,
    title: 'Coffee',
  },
  {
    img: ItalianFlag,
    title: 'Storage',
  },
  {
    img: Bar,
    title: 'Coffee table',
  },
  {
    img: LobsterRisotto,
    title: 'Blinds',
  },
];