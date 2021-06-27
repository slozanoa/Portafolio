import React from "react";
import imagenes from "../../exportImg";
const About = () => {
  return (
    <div className="container">
      <div className="about">
        <div className="desrrolloWeb">
          <h2>Acerca de mí</h2>

          <p className="textos">
            Soy santiago lozano alvarez, vivo en la ciudad de medellin antioquia
            colombia, soy un apacionado por la programación y la ciencia, me
            considero una persona autodidacta que me gusta aprender sobre
            tecnologias web e inteligencia artificial.
          </p>
        </div>
        <div className="desarrolloWeb">
          <h2>Desarrollo web</h2>
          <div class="textos">
            <ul>
              <li class="">Estudiante del politecnico jaime isaza cadavid</li>
              <li class="">
                Tengo un año de experiencia trabajando en frontend
              </li>
              <li class="platzi">
                Estudiante activo de{" "}
                <a href="https://platzi.com/p/santiagolozal98/" target="_blank">
                  Platzi
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="desarrolloWeb">
          <h2>Habilidades</h2>
          <div class="textos logos">
            <img
              src={imagenes.js}
              alt="Js"
              className="logotipos"
              data-toggle="tooltip"
              data-placement="top"
              title="javascript"
            />
            <img
              src={imagenes.css}
              className="logotipos"
              alt="css"
              data-toggle="tooltip"
              data-placement="top"
              title="css"
            />
            <img
              src={imagenes.html}
              className="logotipos"
              alt="html"
              data-toggle="tooltip"
              data-placement="top"
              title="html"
            />
            <img
              src={imagenes.react}
              className="logotipos"
              alt="reactjs"
              data-toggle="tooltip"
              data-placement="top"
              title="reactjs"
            />
          </div>
          <div class="textos logos">
            <img
              src={imagenes.material}
              className="logotipos"
              alt="material"
              data-toggle="tooltip"
              data-placement="top"
              title="material"
            />
            <img
              src={imagenes.git}
              className="logotipos"
              alt="git"
              data-toggle="tooltip"
              data-placement="top"
              title="git"
            />
            <img
              src={imagenes.node}
              className="logotipos"
              alt="node"
              data-toggle="tooltip"
              data-placement="top"
              title="node"
            />
            <img
              src={imagenes.bootstrap}
              className="logotipos"
              alt="bootstrap"
              data-toggle="tooltip"
              data-placement="top"
              title="bootstrap"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
