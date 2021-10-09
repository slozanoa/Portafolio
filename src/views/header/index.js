import React from "react";
import './styles.css';
import imagenes from "../../exportImg";
const Header = () => {
    return (
        <header>
            <nav>
                <section class="contenedor nav">
                    <h1 class="logo">
                        {"<slozanoa />"}
                    </h1>
                    <div class="enlaces-header">
                        <a href="# ">Home</a>
                        <a href="# ">About</a>
                        <a href="# ">Skill</a>
                        <a href="# ">Portafolio</a>
                    </div>
                    <div class="hamburguer">
                        <i class="fas fa-bars"></i>
                    </div>
                </section>
            </nav>
            <div className="contenedor">
                <section class="contenido-header">
                    <section class="textos-header">
                        <h1>Santiago Lozano Alvarez</h1>
                        <p>-Frontend Developer-</p>
                    </section>
                    <img src={imagenes.header} alt="" />
                </section>
            </div>
        </header>

    )
}

export default Header