import { useState } from 'react'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Partners from './components/Partners.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import SixCSection from './components/SixCs.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <HowItWorks />
      <SixCSection />
      <Footer />
    </>
  )
}

export default App
