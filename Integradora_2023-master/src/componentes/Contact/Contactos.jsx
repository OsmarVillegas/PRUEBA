import '../../estilos/Contact/mapa.css';
import {Contact, Mapa} from './contact-us';

function Contactos() {
  return (
    <div className="Contacts" >
      <div className='MapOp' >
      <Mapa/>
      </div>
      <div className='Contact'>
      <Contact/>
    </div>

    </div>
  );
}

export default Contactos;
