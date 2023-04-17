import React from 'react'
import Contacto from '../Contacto/Contacto'
import "./Hero.css"
function Hero({english}) {
  return (
    <>   
    <div className='hero'>
      <div className='p-hero' data-aos="fade-right" data-aos-offset="400" data-aos-easing="ease-in-sine">        
<h1 className='title'>{!english && "PERMÍTANOS HACER SU SONRISA MÁS BRILLANTE."}{english && "ALLOW US TO MAKE YOUR SMILE BRIGHTER."}</h1>
<p className='s-hero'>
{!english && "Clinica Sur puede ayudarlo a obtener la sonrisa que siempre ha deseado. Ofrecemos odontología cosmética, terapia de conducto radicular, inspecciones de caries y más."}{english && "Clinica Sur Can Help You Get The Smile You've Always Wanted. We Offer Cosmetic Dentistry, Root Canal Therapy, Cavity Inspections, And More."}
</p>
<div className='t-btn'>
        <button>{!english && "Pedi turno"}{english && "MAKE APPOINTMENT"}</button>
    </div>
      </div>
    </div>
      <Contacto english={english} />
    </>
  )
}

export default Hero