import React from "react";
import './styles.css';
import imagenes from "../../exportImg";
const About = () => {
    return (
        <>
            <div className="backgroudAbout">
                <div className="contenedor">
                  

                    <section className="contenido-about">
                      
                        <img src={imagenes.header} alt="" />
                        <section className="textos-about">
                        <h2>About us</h2>
                            <h3>Frontend Developer</h3>
                            <p className="introdution">Me llamo santiago Lozano Alvarez, soy un colombiano Apacionado por la tecnologia.</p>
                            <p>En 2015 hice un curso de informatica donde aprendí las bases de la programación y desde ahí no he parado, 
                                Soy un programador autodidacta que nunca para de aprender y de descubrir cosas nuevas todos los dias.</p>
                        </section>
                    </section>
                </div>
            </div>

        </>

    )
}

export default About