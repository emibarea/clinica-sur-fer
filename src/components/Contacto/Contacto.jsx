import React from 'react'
import './Contacto.css'
import logo from '../../assets/images/logo.png'
import {BsTelephone, BsInstagram} from 'react-icons/bs'
import {TfiLocationPin} from 'react-icons/tfi'
import {AiFillFacebook} from 'react-icons/ai'
function Footer({english}) {
  return (
    <div className='footer' id='contacto'>
                <div className='b-container'>
        <img src={logo} alt='' />
        </div>
        <div className='t-container'>
            <div className="f-item">
                <div><BsTelephone /></div>
                <h3>Tel</h3>
                <p>+54 2613607756</p>
            </div>
            <div className="f-item">
                <div><TfiLocationPin /></div>
                <h3>{!english && "Direccion"}{english && "Addres"}</h3>
                <p>Belgrano 940</p>
            </div>
            <div className="f-item">
                <div><BsInstagram /></div>
                <h3>Instagram</h3>
                <p>Clinica Sur</p>
            </div>
            <div className="f-item">
                <div><AiFillFacebook /></div>
                <h3>Facebook</h3>
                <p>Clinica Sur</p>
            </div>
        </div>

    </div>
  )
}

export default Footer