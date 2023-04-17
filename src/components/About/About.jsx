import React,{useState} from 'react'
import './About.css'
import { data } from '../../assets/index'
import Contacto from '../Contacto/Contacto'
function About({english}) {
  return (
    <div className='about'>
        <div className="t-about">
            <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <h1 className='title'>{!english && "Sobre Nosotros."}{english && "About Us."}</h1>
            <span>{!english && 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis saepe explicabo quo consectetur error asperiores. Praesentium natus maiores inventore officia fugiat ea. Similique asperiores quam praesentium soluta nulla? Voluptatibus!'}
                  {english && 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur reiciendis saepe explicabo quo consectetur error asperiores. Praesentium natus maiores inventore officia fugiat ea. Similique asperiores quam praesentium soluta nulla? Voluptatibus!'}
            </span>
            </div>
        </div>
        <div className='cambio-p'></div>
        <div className='cambio-s'></div>
        <div className='tp-about'><h1 className='title tp'>Staff</h1></div>
        <div className="p-about">
          <div className='i-container'>
        {data.map((e, i) => (
            <div className='i-about' key={i} data-aos={`${(i==3||i==4||i==5) ? "fade-up" : "fade-down"}`}>
                <img src={e.img} alt="" />
                <h2>{e.nombre}</h2>
                <h4>{e.especialidad}</h4>
                <span>{e.matricula}</span>
            </div>
        ))}
        </div>
        </div>
        <Contacto />
    </div>
  )
}

export default About