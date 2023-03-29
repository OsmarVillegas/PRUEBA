import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../estilos/Contact/contact-us.css";

export function Contact() {
  return (
    <div className="Formulario">
      <strong>
        {" "}
        <h1 id="titulo"> Contact Us</h1>
      </strong>
      <div>
        <Form className="Formulario-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="text" placeholder="Name" style={{fontSize:"17px"}} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" style={{fontSize:"17px"}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" style={{fontSize:"17px"}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="number" placeholder="Number Phone" style={{fontSize:"17px"}} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <select className="form-select" aria-label="Default select example" style={{fontSize:"17px"}}>
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Message" style={{fontSize:"17px"}}
            ></textarea>
          </Form.Group>

          <Button variant="primary" type="submit">
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
}

export function Mapa() {
  return (
    <div className="map">
      <img
        className="imagen-mapa"
        src={require("../../imagenes/Mapa.png")}
        alt="Optmen"
      />
    </div>
  );
}
