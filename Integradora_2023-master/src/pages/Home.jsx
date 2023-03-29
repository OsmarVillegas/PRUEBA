import React from "react";
import { Header, Caracteristicas, Services, NewsAndUpdates, Colaboradores, AwardsAndCertifications, AWorldGlobal } from '../componentes/Home/home';
import { Navbar, Footer} from '../componentes/Home/headerAndNavbar';


class Home extends React.Component {
    render(){
        return (
            <div className="Home">
                < Navbar />
                <Header />
                <Caracteristicas />
                <AWorldGlobal />
                <Services />
                <NewsAndUpdates />
                <Colaboradores />
                <AwardsAndCertifications />
                < Footer />
            </div>
        )
    }
}

export default Home;