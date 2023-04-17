import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Ubicacion from './components/Ubicacion/Ubicacion'
import About from './components/About/About'
import Services from './components/Services/Services'
function Pages() {
  const [english, setEnglish] = useState(false)
  return (
    <>
        <Navbar english={english} setEnglish={setEnglish} />
        <Routes>
        <Route exact path='/' element={<Hero english={english} />} />
        <Route exact  path='/donde' element={<Ubicacion english={english} />} />
        <Route exact path='/about' element={<About english={english} />} />
        <Route exact path="/service" element={<Services english={english} />} />
        </Routes>
    </>
  )
}

export default Pages