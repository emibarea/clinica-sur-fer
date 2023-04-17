import React from 'react'
import "./Ubicacion.css"
import Contacto from '../Contacto/Contacto'
function Ubicacion() {
  return (
    <>
    <div id='ubicacion'><iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13397.53136195415!2d-68.8601533604492!3d-32.914482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09658e94bef7%3A0xadaf9d9b4df5971!2sCL%C3%8DNICA%20Odontologica%20Dental%20SUR!5e0!3m2!1ses!2sar!4v1669604419885!5m2!1ses!2sar" style={{border:"0"}} ></iframe></div>
    <Contacto />
    </>
  )
}

export default Ubicacion