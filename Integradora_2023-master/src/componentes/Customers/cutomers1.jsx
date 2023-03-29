import React from 'react';
import '../../estilos/Customers/customers1.css';
import {Customers2, Customers3} from './customers2.jsx'




 function Customers1() {
  return (
    <div className="header-contenido ">
        <img className="header-img col-12" src={require('../imagenes/optimenv.png')} alt="Imagen principal de un avión" />
    <div className='uno'>
      <strong><h1 className='titulo-texto1'>Our Customers</h1></strong>
      <hr style={{ border: 'none', borderTop: '2px solid rgb(0, 0, 1)', margin: '20px auto', maxWidth: '70%' }} />
    <Customers2/>
    </div>
   <div className='dos'>
    <h1 className='titulo-texto2'>Our Project Experience</h1>
    <hr style={{ border: 'none', borderTop: '2px solid rgb(0, 0, 1)', margin: '20px auto', maxWidth: '70%' }} />
   <Customers3/>
   </div>
    
    </div>
  )
}
export default Customers1;
