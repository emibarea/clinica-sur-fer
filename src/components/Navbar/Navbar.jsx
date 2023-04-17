import React, {useEffect, useState} from 'react'
import logo from '../../assets/images/logo.png'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import {MdGTranslate} from 'react-icons/md'
import {BiMenu} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
function Navbar({english, setEnglish}) {
  const [Navbar, setNavbar] = useState(false)
  const [Navbefore, setNavbefore] = useState(false)
  const [screen, setscreen] = useState(false)
  useEffect(()=> {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100){
          setNavbefore(true)
      } else {
          setNavbefore(false)
      }  
  })
  }, [])

  return (
    <div className={`navbar ${Navbar && 'nav'} ${Navbefore && 'navbefore'}`}>
    <div className='l-nav'>
    <img src={logo} alt='' />
    </div>
    <div className='r-nav'>
      <ul>
          <li><Link onClick={() => setNavbar(false)} to="/">{!english && "Inicio"}{english && "Home"}</Link></li>
          <li><Link onClick={() => setNavbar(false)} to="/about">{!english && "Sobre Nosotros"}{english && "About Us"}</Link></li>
          <li><Link onClick={() => setNavbar(false)} to="/service">{!english && "Servicios"}{english && "Services"}</Link></li>
          <li><Link onClick={() => setNavbar(true)} to="/donde">{!english && "Ubicacion"}{english && "Location"}</Link></li>
          <li className='eng' onClick={() => setEnglish(!english)} >{!english && "English"}{english && "Spanish"}<MdGTranslate /></li>
        </ul> 
        <BiMenu className='menu' onClick={() => setscreen(true)} />
        {screen && <div className="menu-container">
        <div className='filter'>
        <div className="pop-up">
          <AiFillCloseCircle className='close-m' onClick={() => setscreen(false)} />
        <ul>
          <li><Link onClick={() => setscreen(false)} to="/">{!english && "Inicio"}{english && "Home"}</Link></li>
          <li><Link onClick={() => setscreen(false)} to="/about">{!english && "Sobre Nosotros"}{english && "About Us"}</Link></li>
          <li><Link onClick={() => setscreen(false)} to="/service">{!english && "Servicios"}{english && "Services"}</Link></li>
          <li><Link onClick={() => setscreen(false)} to="/donde">{!english && "Ubicacion"}{english && "Location"}</Link></li>
          <li className='eng' onClick={() => setEnglish(!english)} >{!english && "English"}{english && "Spanish"}<MdGTranslate /></li>
        </ul> 
        </div>
        </div>
        </div>}
        
    </div>
    <div className='a-nav'>
        <button>{!english && "Pedi turno"}{english && "MAKE APPOINTMENT"}</button>
    </div>
    </div>
  )
}

export default Navbar