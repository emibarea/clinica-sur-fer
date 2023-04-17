import React, {useState} from 'react'
import './Services.css'
import {info} from '../../assets/index'
import {BiRightArrow, BiLeftArrow} from 'react-icons/bi'
import Contacto from '../Contacto/Contacto'
function Services(english) {
  const [selected, setSelected] = useState(0)

  return (
    <>
    <div className='services'>
      <div className="left" onClick={() => setTimeout(setSelected, 100, selected == 0 ? info.length - 1 : selected - 1)}><BiLeftArrow className='icon' /></div>
      <img src={info[selected].img} alt='' />
      <div className="right" onClick={() => setTimeout(setSelected, 100, selected == (info.length - 1) ? 0 : selected + 1)}><BiRightArrow className='icon' /></div>
      <div className='service-container' data-aos="zoom-in" >
        <h1>{info[selected].title}</h1>
        <span>{info[selected].info}</span>
      </div>
</div>
      <Contacto english={english} />
    </>

  )
}

export default Services