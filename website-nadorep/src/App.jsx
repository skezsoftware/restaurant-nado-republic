import { useState } from "react";
import ResponsiveAppBar from "./components/TopNavBar";
import LandingPage from "./components/LandingPage";
import MiddleHomePage from "./components/MiddleHomePage";
import WovenImageList from "./components/ImageCollage";
import SimpleBottomNavigation from "./components/BottomNavBar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import Menu from "./components/MenuFolder/DinnerMenu";
import OrderOnline from "./components/OrderOnline";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <MiddleHomePage />
              <WovenImageList />
            </>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/orderonline" element={<OrderOnline />} />
      </Routes>

      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
