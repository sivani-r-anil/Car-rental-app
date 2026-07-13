import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ViewCars from './components/ViewCars'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      
      <ViewCars/>
      <NavigationBar/>
    </>
  )
}

export default App
