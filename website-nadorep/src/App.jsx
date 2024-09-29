import { useState } from 'react'
import ResponsiveAppBar from './components/TopNavBar'
import LandingPage from './components/LandingPage'
import MiddleHomePage from "./components/MiddleHomePage";
import WovenImageList from './components/ImageCollage'
import SimpleBottomNavigation from './components/BottomNavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ResponsiveAppBar />
     <LandingPage />
     <MiddleHomePage />
     <WovenImageList />
     <SimpleBottomNavigation />
    </>
  )
}

export default App
