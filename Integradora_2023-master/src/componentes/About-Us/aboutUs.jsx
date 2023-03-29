/* Autor: Osmar Israel Villegas Martínez */

import React from "react";
import "../../estilos/About-Us/headerAbout.css";
import "../../estilos/About-Us/aboutVideo.css";
import "../../estilos/About-Us/experience.css";
import "../../estilos/About-Us/ourStory.css";
import "../../estilos/About-Us/innovationHub.css";
import Carousel from "react-bootstrap/Carousel";

export function HeaderAbout() {
  return (
    <div className="HeaderAbout-Contenedor">
      <Carousel className="HeaderAbout-Carousel">
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">What is Optimen?</h3>
            <p className="HeaderAbout-texto">
              Optimen is a Mexican Software Development company that provides
              resources management and optimization services to different
              industries. The company was designated and approved as an
              International Service Contractor for Jeppesen and Boeing.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">Mission</h3>
            <p className="HeaderAbout-texto">
              Support and facilitate Air Lines around the world to maintain
              reliable and sustainable operations through Technology, Innovation
              and living our Values.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">Vision</h3>
            <p className="HeaderAbout-texto">
              To be the First option in Software, Technology and Innovation
              services for the global Airlines in the area of Aeronautical
              operational control.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="HeaderAbout-item">
          <Carousel.Caption className="HeaderAbout-caption">
            <h3 className="HeaderAbout-Titulo">Values</h3>
            <ul className="HeaderAbout-texto">
              <li>Trustworthy</li>

              <li>Respect</li>

              <li>Integrity</li>

              <li>Teamwork</li>

              <li>Innovation</li>
            </ul>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export function AboutVideo() {
  return (
    <div className="AboutVideo-contenedor">
      <div className="AboutVideo-video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/odFaxAu7s5w"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <div className="Experience-contenido">
      <h1 className="Experience-AirlineExp">Airline Experience</h1>
      <div className="Experience-cuadro">
        <div id="Experience-experiencia-1">
          <div className="Experiencia-movimiento"></div>
          <h5 className="Experience-titulo">Experience 1</h5>
          <p className="Experience-descripcion">
            Associated with long experience in the Airline Industry with high
            trust and tight relation with commercial airlines and industry key
            players.
          </p>
        </div>
        <div id="Experience-experiencia-2">
          <h5 className="Experience-titulo">Experience 2</h5>
          <p className="Experience-descripcion">
            Broad experience developing software in real Airline Operational
            Control Systems and implementation of Optimization Software.
          </p>
        </div>
        <div id="Experience-experiencia-3">
          <h5 className="Experience-titulo">Experience 3</h5>
          <p className="Experience-descripcion">
            Strong Project Management following the industry best practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export function OurStory() {
  return (
    <div className="OurStory-contenido container">
      <div className="OurStory-cuadro-title">
        <h1 className="OurStory-cuadro-title-text">
          Our Story Through the Time
          <hr />
        </h1>
      </div>
      <div className="OurStory-cuadro">
        <div className="OurStory-cuadro-izquierda">
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-1.jpg")}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h1 className="OurStory-cuadro-anios">2006 - 2015</h1>
            <h3 className="OurStory-cuadro-subtitulo">First years</h3>
            <p className="OurStory-cuadro-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consequat in magna at sagittis.
            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>The beginning</li>
              <li>First support team</li>
              <li>On the big league</li>
            </ul>
          </div>
        </div>
        <div className="OurStory-cuadro-derecha">
          <div>
            <h1 className="OurStory-cuadro-anios">2016 - 2018</h1>
            <h3 className="OurStory-cuadro-subtitulo">Opening</h3>
            <p className="OurStory-cuadro-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consequat in magna at sagittis.
            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>Our Opening</li>
              <li>Optimen and the Aerospace Cluster</li>
              <li>First South American Client</li>
              <li>Guanajuato Talent</li>
              <li>Go Innovation Forum</li>
              <li>Other Relationships</li>
            </ul>
          </div>
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-2.jpg")}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="OurStory-cuadro-izquierda">
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-3.jpg")}
              alt=""
              srcset=""
            />
          </div>
          <div>
            <h1 className="OurStory-cuadro-anios">2019 - 2020</h1>
            <h3 className="OurStory-cuadro-subtitulo">Growth</h3>
            <p className="OurStory-cuadro-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consequat in magna at sagittis.
            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>Innovation Hub Optimen</li>
              <li>Going global</li>
              <li>UTNG relationship</li>
              <li>Aeroclúster Querétaro</li>
              <li>CANIETI-CLUTIG</li>
              <li>Distinctive "Marca GTO"</li>
            </ul>
          </div>
        </div>
        <div className="OurStory-cuadro-derecha">
          <div>
            <h1 className="OurStory-cuadro-anios">2021 - 2023</h1>
            <h3 className="OurStory-cuadro-subtitulo">Actually</h3>
            <p className="OurStory-cuadro-descripcion">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              consequat in magna at sagittis.
            </p>
            <ul className="OurStory-cuadro-suceso">
              <li>Distinctive "Marca GTO"</li>
              <li>EDUCAFIN EVOLUCIONA</li>
            </ul>
          </div>
          <div>
            <img
              className="OurStory-img"
              src={require("../../imagenes/Story/story-4.jpg")}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function InnovationHub() {
  return (
    <div className="InnovationHub-contenido">
      <div className="container">
        <div className="InnovationHub-titulo">
          <h1 className="innovationHub-titulo-text">Innovation Hub</h1>
        </div>
        <div className="InnovationHub-cuadro">
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-1">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-1.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">Hannover Messe</h1>
              </div>
              <div className="InnovationHub-back-1">
                <h1 className="InnovationHub-cuadro-titulo">Hannover Messe</h1>
                <p className="InnovationHub-descripcion">
                  Optimen family present at " Industrial Transformation Mexico,
                  Hannover Messe " HANNOVER MESSE is the most important
                  international platform and hot spot for industrial
                  transformation - with excellent innovations or unusual
                  products.
                </p>
                <p className="InnovationHub-fecha">Jun 24, 2020</p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-2">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-2.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">Ana Avatar XPrize</h1>
              </div>
              <div className="InnovationHub-back-2">
                <h1 className="InnovationHub-cuadro-titulo">Ana Avatar XPrize</h1>
                <p className="InnovationHub-descripcion">
                  Optimen teamed up with Inbiodroid are working together on ANA
                  Avatar XPRIZE challenge that aims to create an Avatar system
                  that can transport human presence to a remote location in real
                  time.
                </p>
                <p className="InnovationHub-fecha">Jan 01, 2020</p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-3">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-3.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">Innovation Hub</h1>
              </div>
              <div className="InnovationHub-back-3">
                <h1 className="InnovationHub-cuadro-titulo">Innovation Hub</h1>
                <p className="InnovationHub-descripcion">
                  Optimen inaugurated its innovation center, a space focus on
                  competencies development for the aeronautical sector.
                </p>
                <p className="InnovationHub-fecha">Feb 12, 2019</p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-4">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-4.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">EDUCATE OPTIMEN</h1>
              </div>
              <div className="InnovationHub-back-4">
                <h1 className="InnovationHub-cuadro-titulo">EDUCATE OPTIMEN</h1>
                <p className="InnovationHub-descripcion">EDUCATE OPTIMEN</p>
                <p className="InnovationHub-fecha">Dec 08, 2021</p>
              </div>
            </div>
          </label>
          <label>
            <input type="checkbox" />
            <div className="flip-card">
              <div className="InnovationHub-front-5">
                <img
                  className="InnovationHub-img"
                  src={require("../../imagenes/innovation/innovation-5.jpg")}
                  alt="imagen innovationHub"
                />
                <h1 className="InnovationHub-titulo">
                  Aws Mentefactura GTO Challenge
                </h1>
              </div>
              <div className="InnovationHub-back-5">
                <h1 className="InnovationHub-cuadro-titulo">Aws Mentefactura GTO Challenge</h1>
                <p className="InnovationHub-descripcion">
                  Hackathon organized by the alliance between AWS, Optimen,
                  Educafin, IdeaGTO, SEG and GAP with the purpose that students,
                  Guanajuato talent, will execute innovative projects aimed at
                  improving airport services.
                </p>
                <p className="InnovationHub-fecha">Apr 20, 2021</p>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
