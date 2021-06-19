import imagenes from "../../exportImg";
const Menu = () => {
  const urlLinkedin = (e) => {
      debugger
    window.location.href = "https://www.linkedin.com/in/slozanoa/";
  }
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
          <button type='button' onclick={urlLinkedin}>
            <i class="fab fa-linkedin"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
