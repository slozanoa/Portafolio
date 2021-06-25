import React from 'react'

import imagenes from "../../exportImg";
import OptionsMenu from "./OptionsMenu";
const Menu = () => {
  const urlLinkedin = (e) => {
    debugger;
    window.location.href = "https://www.linkedin.com/in/slozanoa/";
  };
  return (
    <div className="container-lateral">
      <div className="container-info">
        <div className="photo">
          <img src={imagenes.img1} className="imgRedonda" />
        </div>
        <div className="name">
          <h1>Santiago lozano Alvarez</h1>
        </div>
        <div className="redes">
          <button type="button" onClick={urlLinkedin}>
            <i className="fab fa-linkedin"></i>
          </button>
          <button type="button" onClick={urlLinkedin}>
            <i className="fab fa-github"></i>
          </button>
          <button type="button" onClick={urlLinkedin}>
            <i className="fab fa-twitter"></i>
          </button>
        </div>
        {/* <div>
          <label htmlFor="" className="icon-menu"><i class="fas fa-bars"></i></label>
        </div> */}

        <div></div>
      </div>
      <OptionsMenu />
    </div>
  );
};

export default Menu;
