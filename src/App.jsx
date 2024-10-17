import { HashRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/TopNavBar";
import LandingPage from "./components/HomePageFolder/LandingPage";
import SimpleBottomNavigation from "./components/BottomNavBar";
import AboutPage from "./components/AboutPageFolder/AboutPage";
import DinnerMenu from "./components/MenuFolder/DinnerMenu";
import LunchMenu from "./components/MenuFolder/LunchMenu";
import OrderOnline from "./components/OrderOnlineFolder/OrderOnline";
import ScrollToTop from "./components/ScrollToTop";
import Catering from "./components/CateringFolder/Catering";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dinner" element={<DinnerMenu />} />
        <Route path="/lunch" element={<LunchMenu />} />
        <Route path="/orderonline" element={<OrderOnline />} />
        <Route path="/catering" element={<Catering />} />
      </Routes>
      <ScrollToTop />
      <SimpleBottomNavigation />
    </HashRouter>
  );
}

export default App;
