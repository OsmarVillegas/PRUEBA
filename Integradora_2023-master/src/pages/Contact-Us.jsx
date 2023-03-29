import React from "react";
import Contactos from "../componentes/Contact/Contactos.jsx";
import {Navbar, Footer} from '../componentes/Home/headerAndNavbar';


class ContactUs extends React.Component {
    render(){
        return (
            <div className="Contactos">
                < Navbar />
                <Contactos />
                < Footer />
            </div>
        )
    }
}

export default ContactUs;