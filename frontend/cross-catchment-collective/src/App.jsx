import { useState } from 'react'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar.jsx'
import Homepage from './pages/Homepage.jsx'
import Footer from './components/Footer.jsx'
import AboutPage from './pages/Aboutpage.jsx'
import ResourcesPage from './pages/Resourcespage.jsx'
import NewsPage from  './pages/Newspage.jsx'
import ContactPage from './pages/Contactpage.jsx'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useSearchParams,
} from "react-router-dom";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/cross-catchment-collective">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/resource-hub" element={<ResourcesPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
      {/* <Navbar />
      <Homepage />
      <AboutPage />
      <Footer /> */}
    </>
  )
}

export default App
