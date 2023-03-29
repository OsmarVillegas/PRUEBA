import React from 'react'
import '../../estilos/Customers/customers2.css'


export  function Cuadros1(props) {
  return (
    <div class="contenedor">
    <div class="cuadro">
        <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen1}.png`)}
      alt='Optimen' />
    </div>
    <div class="cuadro">
    <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen2}.png`)}
      alt='Optimen' />
    </div>
    <div class="cuadro">
    <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen3}.png`)}
      alt='Optimen' />
    </div>
    <div class="cuadro">
    <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen4}.png`)}
      alt='Optimen' />
    </div>
    <div class="cuadro">
    <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen5}.png`)}
      alt='Optimen' />
    </div>
    <div class="cuadro">
    <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen6}.png`)}
      alt='Optimen' />
    </div>
    <div class="cuadro">
    <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen7}.png`)}
      alt='Optimen' />
    </div>
    <div class="cuadro">
    <img className='imagen' 
      src={require(`../../imagenes/uno/${props.imagen8}.png`)}
      alt='Optimen' />
    </div>
</div>
  );
}

export  function Cuadros2(props) {
    return (
      <div class="contenedor">
      <div class="cuadro">
          <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen1}.png`)}
        alt='Optimen' />
      </div>
      <div class="cuadro">
      <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen2}.png`)}
        alt='Optimen' />
      </div>
      <div class="cuadro">
      <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen3}.png`)}
        alt='Optimen' />
      </div>
      <div class="cuadro">
      <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen4}.png`)}
        alt='Optimen' />
      </div>
      <div class="cuadro">
      <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen5}.png`)}
        alt='Optimen' />
      </div>
      <div class="cuadro">
      <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen6}.png`)}
        alt='Optimen' />
      </div>
      <div class="cuadro">
      <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen7}.png`)}
        alt='Optimen' />
      </div>
      <div class="cuadro">
      <img className='imagen' 
        src={require(`../../imagenes/dos/${props.imagen8}.png`)}
        alt='Optimen' />
      </div>
  </div>
    );
  }
  