import React from "react";
import {NoticiasForm, EventosForm} from "../componentes/Back/NewForm";

class NoticiasYEventos extends React.Component {
    render(){
        return (
            <div className="NoticiasYEventos">
                <NoticiasForm />
                <EventosForm />
            </div>
        )
    }
}

export default NoticiasYEventos;