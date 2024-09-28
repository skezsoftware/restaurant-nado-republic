import { useState } from 'react'
import ResponsiveAppBar from './components/TopNavBar'
import LandingPage from './components/LandingPage'
import SimpleBottomNavigation from './components/BottomNavBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ResponsiveAppBar />
     <LandingPage />
     <SimpleBottomNavigation />
    </>
  )
}

export default App
