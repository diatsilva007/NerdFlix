import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../img/logo-NerdFlix.png"; // Importando a imagem do logo

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        <img src={logo} alt="Logo" className="logo-img"/>
      </Link>
      <Link className="favoritos" to="/favoritos">
        Meus filmes
      </Link>
    </header>
  );
}

export default Header;
