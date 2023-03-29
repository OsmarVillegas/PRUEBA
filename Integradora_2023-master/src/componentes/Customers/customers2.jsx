import React from 'react'
import '../../estilos/Customers/customers2.css'
import {Cuadros1, Cuadros2} from './cuadros.jsx'

 export function Customers2 () {
  return (
    <div className='customers-clientes'>
      <div className='contenedor-azul'>
        <p className='customers-texto'>Through our experience as certified Jeppesen/Boeing consultants, we contribute to the support of the configuration and customization of state-of-the-art optimization software for several key airlines in the aeronautical sector at an international level.</p>
        <Cuadros1
        imagen1='logo1'
        imagen2='logo2'
        imagen3='logo3'
        imagen4='logo4'
        imagen5='logo5'
        imagen6='logo6'
        imagen7='logo7'
        imagen8='logo8'/>
    </div>
    </div>
  )
}

export function Customers3(){
  return(
  <div className='customers-clientes'>
  <div className='contenedor-azul'>
  <p className='customers-texto'>Through our experience as certified Jeppesen/Boeing consultants, we contribute to the support of the configuration and customization of state-of-the-art optimization software for several key airlines in the aeronautical sector at an international level.</p>
  <Cuadros2
  imagen1='socio1'
  imagen2='socio2'
  imagen3='socio3'
  imagen4='socio4'
  imagen5='socio5'
  imagen6='socio6'
  imagen7='socio7'
  imagen8='socio8'/>
  
  </div>
  </div>
  );
}
