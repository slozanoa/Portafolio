import React from "react";
import './styles.css';
import imagenes from "../../exportImg";
const Skills = () => {
    return (
        <section class="skills">
        <div class="contenedor1">
            <h2 class="titulo">
                Skills
            </h2>
            <div class="contenedor-articulo">
                <div class="articulo" data-aos="zoom-in-right">
                    <img src={imagenes.js} alt="" />
                    <h3>Javascrit</h3>
                </div>
                <div class="articulo" data-aos="zoom-in-right">
                    <img src={imagenes.react} alt="" />
                    <h3>React js</h3>
                </div>
                <div class="articulo" data-aos="zoom-in-right">
                    <img src={imagenes.git} alt="" />
                    <h3>Git</h3>
                </div>
                <div class="articulo" data-aos="zoom-in-right">
                    <img src={imagenes.material} alt="" />
                    <h3>material UI</h3>
                </div>
                <div class="articulo" data-aos="zoom-in-right">
                    <img src={imagenes.bootstrap} alt="" />
                    <h3>Bootstrap</h3>
                </div>
                <div class="articulo" data-aos="zoom-in-right">
                    <img src={imagenes.node} alt="" />
                    <h3>Node js</h3>
                </div>
               
            </div>
        </div>
    </section>

    )
}

export default Skills