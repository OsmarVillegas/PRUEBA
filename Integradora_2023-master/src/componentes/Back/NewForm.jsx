/*
Autor: Osmar Israel Villegas Martínez
Esta página contiene los compontes del backend que generan los formulario y permite la manipulación de noticias y eventos.
*/

/*
  Se importa useState para generar variables, 
  Table y Button de bootstrap para la apariencia, 
  useFetch es un apartado que generamos para consumir la api
  Modal Es un componente de bootstrap que nos ayuda a generar los modals que utilizaremos
*/
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { useFetch } from "./useFetch";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../../estilos/Back/back.css";
import Form from "react-bootstrap/Form";

//Esta función genera una vista y un formulario que permite manipular la información de Noticias
export function NoticiasForm() {
  // Realiza la petición al servidor con la función importada
  const { data } = useFetch("/api/noticias");

  // Permite la visualicación de la pantalla modal de registro
  const [modal, setModal] = useState(false);

  // Ayuda a identificar los valores al momento de realizar una modificación
  const [idModificar, setIdModificar] = useState(null);

  // Ayuda a identificar si se esta editando o ingresando un form
  const [edit, setEdit] = useState(false);

  // Formulario que permite registrar la información
  const [formValues, setFormValues] = useState({
    nameNoticiasEsp: "",
    nameNoticiasEng: "",
    contenidoEsp: "",
    contenidoEng: "",
    visibilidad: false,
    img: "",
    creador: "",
  });

  // Petición que permite realizar la petición POST, para ello envia el formValues (La variable que contiene la información generada)
  const handleSubmit = () => {
    data.push(formValues);
    fetch("/api/noticias", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // Permite mostrar el modal que contiene el formulario, para ello actualiza el valor enviandose a si mismo el valor contrario en el momento de ejecutarse
  const showModal = () => {
    setModal(!modal);
    // console.log(formValues);
  };

  // Permite eliminar un objeto de la base de datos utilizando el metodo DELETE, para ello utiliza la id que se obtine al momento de seleccionar el elemento a eliminar
  const componentDidMount = (id) => {
    fetch("/api/noticias/" + id, { method: "DELETE" }).then(() =>
      this.setState({ status: "Delete successful" })
    );
    window.location.reload();
  };

  const componentDidEdit = () => {
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };
    fetch("/api/noticias/" + formValues._id, requestOptions).then((response) =>
      response.json()
    );

    // Reinicia la pantalla para recargar los valores modificados
    window.location.reload();
  };

  // Almacena la información del elemento seleccionado en formValues
  const seleccionarNoticia = (noticia) => {
    setFormValues({
      nameNoticiasEsp: noticia.nameNoticiasEsp,
      nameNoticiasEng: noticia.nameNoticiasEng,
      contenidoEsp: noticia.contenidoEsp,
      contenidoEng: noticia.contenidoEng,
      visibilidad: noticia.visibilidad,
      img: noticia.img,
      creador: noticia.creador,
      _id: noticia._id,
    });
  };

  return (
    <div className="container mt-5 position-relative">
      <h1 className="text-center">Vista Creador Noticias</h1>

      {/* Tabla que presenta la información obtenida de la base de datos */}

      <Table
        className="form-table mt-2 text-center"
        striped
        bordered
        hover
        responsive
      >
        <thead>
          <tr>
            <th>Nombre español</th>
            <th>Nombre inglés</th>
            <th>Contenido español</th>
            <th>Contenido inglés</th>
            <th>Visibilidad</th>
            <th>Creador</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.nameNoticiasEsp}</td>
              <td>{row.nameNoticiasEng}</td>
              <td>{row.contenidoEsp}</td>
              <td>{row.contenidoEng}</td>
              <td>{row.visibilidad ? "Visible" : "No Visible"}</td>
              <td>{row.creador}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setEdit(true);
                    showModal();
                    seleccionarNoticia(row);
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => componentDidMount(row._id)}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Despliega la pantalla modal para agregar un nuevo elemento */}

      <button
        className="btn btn-success position-absolute end-0"
        onClick={() => { showModal(); setEdit(false); setFormValues({form:null})}}
      >
        Agregar
      </button>

      {/* Modal que contiene el formulario */}

      <Modal show={modal} centered>
        <Modal.Header className="position-relative">
          <button
            className="btn btn-danger rounded-circle font-weight-bold"
            onClick={() => showModal()}
          >
            X
          </button>
          <h1 className="position-absolute modal-titulo">Generar Noticia</h1>
        </Modal.Header>
        <Modal.Body>
          {/* Formulario */}

          <label htmlFor="nameNoticiasEsp" className="label">
            Nombre_español
          </label>
          <input
            className="form-control"
            type="text"
            name="nameNoticiasEsp"
            placeholder="Nombre de la noticia en español"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).nameNoticiasEsp
                : formValues.nameNoticiasEsp
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                nameNoticiasEsp: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="nameNoticiasEng" className="label">
            Nombre_inglés
          </label>
          <input
            className="form-control"
            type="text"
            name="nameNoticiasEng"
            placeholder="Nombre de la noticia en inglés"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).nameNoticiasEng
                : formValues.nameNoticiasEng
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                nameNoticiasEng: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="contenidoEsp" className="label">
            Contenido_español
          </label>
          <textarea
            className="form-control"
            type="text"
            name="contenidoEsp"
            placeholder="Contenido de la noticia en español"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).contenidoEsp
                : formValues.contenidoEsp
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                contenidoEsp: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="contenidoEng" className="label">
            Contenido_inglés
          </label>
          <textarea
            className="form-control"
            type="text"
            name="contenidoEng"
            placeholder="Contenido de la noticia en inglés"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).contenidoEng
                : formValues.contenidoEng
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                contenidoEng: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="visibilidad" className="label">
            Visibilidad
          </label>
          <Form.Select
            aria-label="Default select example"
            name="visibilidad"
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                visibilidad: e.target.value,
              }));
            }}
          >
            <option selected value={false}>
              Seleccione la visibilidad
            </option>
            <option value={true}>Visible</option>
            <option value={false}>No Visible</option>
          </Form.Select>
          <br />
          <label htmlFor="img" className="label">
            Imagenes
          </label>
          <input
            className="form-control"
            type="text"
            name="img"
            placeholder="Nombre del creador"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).img
                : formValues.img
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                img: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="creador" className="label">
            Creador
          </label>
          <input
            className="form-control"
            type="text"
            name="creador"
            placeholder="Nombre del creador"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).creador
                : formValues.creador
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                creador: e.target.value,
              }));
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => showModal()}>
            Cancelar
          </Button>

          {/* Condición que evalua la variable edit, en el caso de ser verdadero se regresa un botón que permite editar, en el caso de ser falso regresa un botón que permite agregar */}

          {edit ? (
            <Button
              variant="primary"
              onClick={() => {
                showModal();
                componentDidEdit();
              }}
            >
              Editar
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() => {
                handleSubmit();
                showModal();
              }}
            >
              Guardar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

//Esta función genera una vista y un formulario que permite manipular la información de Eventos
export function EventosForm() {
  // Realiza la petición al servidor con la función importada
  const { data } = useFetch("/api/eventos");

  // Permite la visualicación de la pantalla modal de registro
  const [modal, setModal] = useState(false);

  // Ayuda a identificar los valores al momento de realizar una modificación
  const [idModificar, setIdModificar] = useState(null);

  // Ayuda a identificar si se esta editando o ingresando un form
  const [edit, setEdit] = useState(false);

  // Formulario que permite registrar la información
  const [formValues, setFormValues] = useState({
    nameEventoEsp: "",
    nameEventoEng: "",
    contenidoEsp: "",
    contenidoEng: "",
    fechaInicio: "",
    fechaFin: "",
    visibilidad: false,
    img: "",
    creador: "",
  });

  // Petición que permite realizar la petición POST, para ello envia el formValues (La variable que contiene la información generada)
  const handleSubmit = () => {
    data.push(formValues);
    fetch("/api/eventos", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  // Permite mostrar el modal que contiene el formulario, para ello actualiza el valor enviandose a si mismo el valor contrario en el momento de ejecutarse
  const showModal = () => {
    setModal(!modal);
    console.log(formValues)
  };

  // Permite eliminar un objeto de la base de datos utilizando el metodo DELETE, para ello utiliza la id que se obtine al momento de seleccionar el elemento a eliminar
  const componentDidMount = (id) => {
    fetch("/api/eventos/" + id, { method: "DELETE" }).then(() =>
      this.setState({ status: "Delete successful" })
    );
    window.location.reload();
  };

  const componentDidEdit = () => {
    // Simple PUT request with a JSON body using fetch
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };
    fetch("/api/eventos/" + formValues._id, requestOptions).then((response) =>
      response.json()
    );

    // Reinicia la pantalla para recargar los valores modificados
    window.location.reload();
  };

  // Almacena la información del elemento seleccionado en formValues
  const seleccionarEvento = (evento) => {
    setFormValues({
      nameEventoEsp: evento.nameEventoEsp,
      nameEventoEng: evento.nameEventoEng,
      contenidoEsp: evento.contenidoEsp,
      contenidoEng: evento.contenidoEng,
      fechaInicio: evento.fechaInicio,
      fechaFin: evento.fechaFin,
      visibilidad: evento.visibilidad,
      img: evento.img,
      creador: evento.creador,
      _id: evento._id,
    });
  };

  return (
    <div className="container mt-5 position-relative">
      <h1 className="text-center">Vista Creador Noticias</h1>

      {/* Tabla que presenta la información obtenida de la base de datos */}

      <Table
        className="form-table mt-2 text-center"
        striped
        bordered
        hover
        responsive
      >
        <thead>
          <tr>
            <th>Nombre español</th>
            <th>Nombre inglés</th>
            <th>Contenido español</th>
            <th>Contenido inglés</th>
            <th>Fecha Inicio</th>
            <th>Fecha Fin</th>
            <th>Visibilidad</th>
            <th>Creador</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.nameEventoEsp}</td>
              <td>{row.nameEventoEng}</td>
              <td>{row.contenidoEsp}</td>
              <td>{row.contenidoEng}</td>
              <td>{row.fechaInicio}</td>
              <td>{row.fechaFin}</td>
              <td>{row.visibilidad ? "Visible" : "No Visible"}</td>
              <td>{row.img}</td>
              <td>{row.creador}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setEdit(true);
                    showModal();
                    seleccionarEvento(row);
                  }}
                >
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => componentDidMount(row._id)}
                >
                  <i class="fa-solid fa-trash-can"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Despliega la pantalla modal para agregar un nuevo elemento */}

      <button
        className="btn btn-success position-absolute end-0"
        onClick={() => {showModal(); setEdit(false) ; setFormValues({form:null})}}
      >
        Agregar
      </button>

      {/* Modal que contiene el formulario */}

      <Modal show={modal} centered>
        <Modal.Header className="position-relative">
          <button
            className="btn btn-danger rounded-circle font-weight-bold"
            onClick={() => showModal()}
          >
            X
          </button>
          <h1 className="position-absolute modal-titulo">Generar Eventos</h1>
        </Modal.Header>
        <Modal.Body>
          {/* Formulario */}

          <label htmlFor="nameEventoEsp" className="label">
            Nombre_español
          </label>
          <input
            className="form-control"
            type="text"
            name="nameEventoEsp"
            placeholder="Nombre de la noticia en español"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).nameEventoEsp
                : formValues.nameEventoEsp
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                nameEventoEsp: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="nameEventoEng" className="label">
            Nombre_inglés
          </label>
          <input
            className="form-control"
            type="text"
            name="nameEventoEng"
            placeholder="Nombre de la noticia en inglés"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).nameEventoEng
                : formValues.nameEventoEng
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                nameEventoEng: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="contenidoEsp" className="label">
            Contenido_español
          </label>
          <textarea
            className="form-control"
            type="text"
            name="contenidoEsp"
            placeholder="Contenido de la noticia en español"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).contenidoEsp
                : formValues.contenidoEsp
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                contenidoEsp: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="contenidoEng" className="label">
            Contenido_inglés
          </label>
          <textarea
            className="form-control"
            type="text"
            name="contenidoEng"
            placeholder="Contenido de la noticia en inglés"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).contenidoEng
                : formValues.contenidoEng
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                contenidoEng: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="fechaInicio" className="label">
            Fecha_de_inicio
          </label>
          <input
            className="form-control"
            type="date"
            name="fechaInicio"
            placeholder="Nombre de la noticia en inglés"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).fechaInicio
                : formValues.fechaInicio
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                fechaInicio: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="fechaFin" className="label">
          Fecha_de_cierre
          </label>
          <input
            className="form-control"
            type="date"
            name="fechaFin"
            placeholder="Nombre de la noticia en inglés"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).fechaFin
                : formValues.fechaFin
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                fechaFin: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="visibilidad" className="label">
            Visibilidad
          </label>
          <Form.Select
            aria-label="Default select example"
            name="visibilidad"
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                visibilidad: e.target.value,
              }));
            }}
          >
            <option selected value={false}>
              Seleccione la visibilidad
            </option>
            <option value={true}>Visible</option>
            <option value={false}>No Visible</option>
          </Form.Select>
          <br />
          <label htmlFor="img" className="label">
            Imagenes
          </label>
          <input
            className="form-control"
            type="text"
            name="img"
            placeholder="Nombre del creador"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).img
                : formValues.img
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                img: e.target.value,
              }));
            }}
          />
          <br />
          <label htmlFor="creador" className="label">
            Creador
          </label>
          <input
            className="form-control"
            type="text"
            name="creador"
            placeholder="Nombre del creador"
            value={
              idModificar !== null
                ? data.find((row) => row.id === idModificar).creador
                : formValues.creador
            }
            onChange={(e) => {
              setFormValues((prevState) => ({
                ...prevState,
                creador: e.target.value,
              }));
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={() => showModal()}>
            Cancelar
          </Button>

          {/* Condición que evalua la variable edit, en el caso de ser verdadero se regresa un botón que permite editar, en el caso de ser falso regresa un botón que permite agregar */}

          {edit ? (
            <Button
              variant="primary"
              onClick={() => {
                showModal();
                componentDidEdit();
              }}
            >
              Editar
            </Button>
          ) : (
            <Button
              variant="success"
              onClick={() => {
                handleSubmit();
                showModal();
              }}
            >
              Guardar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
