import React from "react";
import News from "../componentes/News/News.jsx";
import {Navbar, Footer} from '../componentes/Home/headerAndNavbar';


class New extends React.Component {
    render(){
        return (
            <div className="New">
                < Navbar />
                    <News />
                < Footer />
            </div>
        )
    }
}

export default New;