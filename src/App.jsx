import { HashRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/TopNavBar";
import LandingPage from "./components/HomePageFolder/LandingPage";
import SimpleBottomNavigation from "./components/BottomNavBar";
import AboutPage from "./components/AboutPageFolder/AboutPage";
import Menu from "./components/MenuFolder/DinnerMenu";
import OrderOnline from "./components/OrderOnlineFolder/OrderOnline";
import ScrollToTop from "./components/ScrollToTop";
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
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderonline" element={<OrderOnline />} />
      </Routes>
      <ScrollToTop />
      <SimpleBottomNavigation />
    </HashRouter>
  );
}

export default App;
