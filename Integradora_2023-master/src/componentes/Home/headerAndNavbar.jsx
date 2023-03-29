import React, { useState } from "react";
import "../../estilos/Home/headerAndNavbar.css";
import { Link } from "react-router-dom";

export function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav">
      <a className="nav__brand cursor">
        <img
          src={require("../../imagenes/logos/logo-optimen.png")}
          alt="Logo de la empresa"
          href="#"
        />
      </a>
      <ul className={active} style={{margin:"0"}}>
        <li className="nav__item">
          <Link to="/Home" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/Customers" className="nav__link">
            Customers
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/About-Us" className="nav__link">
            About us
          </Link>
        </li>
        <li className="nav__item">
        <Link to="/News" className="nav__link">
            News
            </Link>
        </li>
        <li className="nav__item">
        <Link to="/Contact-Us" className="nav__link">
            Contact us
            </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <p1>Optimen</p1>

      <p>info@mysite.com</p>

      <p>&copy;2023 por Optimen. </p>
    </footer>
  );
}
