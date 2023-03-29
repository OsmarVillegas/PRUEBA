import '../../estilos/News/header.css';
import New from './New.jsx';


function News() {
  return (
    <div className="Header">
         <div className="header-contenido ">
        <img className="header-image" src={require("../../imagenes/avion.jpg")} alt="Imagen principal de un avión" />
        <h1 className="header-titulo">News</h1>
      </div>
      <div className='contenedor-principal'>
        <New
            nombre='Forum BJXAEROSPACE'
            cargo='Oct 31, 2020'
            testimonio='We invite you to participate in the "2nd Business Forum of the Bajìo A.C Aerospace Cluster", follow the conferences, panels, and meetups of the event on our platform and social networks. Click on the link: bjxaerospace.org and Register!'
            imagen='uno'  />
        <New
            nombre='14th Anniversary OPTIMEN'
            cargo='Oct 19, 2020'
            testimonio='14 years streamlining global mobility through a passionate software developers team. Congratulations TEAM Optimen!'
            imagen='dos'  />
         <New
            nombre='4OPS by Optimen'
            cargo='Oct 15, 2020'
            testimonio='We are proud of our new Technological Solution to achieve our Purpose: Streamline the World Mobility!'
            imagen='tres'  />
          <New
            nombre='Red Hat Business Partner'
            cargo='Aug 19, 2020'
            testimonio='We are pleased to announce that Optimen has been integrated as Business Partner Solution Provider by Red Hat. This alliance enhance our commitment to bring efficient and optimal solutions to our clients.'
            imagen='cuatro' />
          <New
            nombre='OPTIMEN-CINVESTAV'
            cargo='Aug 03, 2020'
            testimonio='We are gratified to announce a strategic alliance established with the Cinvestav Tamaulipas. We will collaborate on solving logistics, production planning, and ground transportation complex problems. This alliance will help optimize the allocation of resources of companies worldwide, improving their productivity and competitiveness.is alliance enhance our commitment to bring efficient and optimal solutions to our clients.'
            imagen='cinco'  />
      </div>
    </div>
  );
}

export default News;
