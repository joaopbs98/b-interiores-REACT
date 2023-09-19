import { Link } from "react-router-dom";
import HeaderCSS from "./style.module.scss";
import Btn from "../../UIComponents/Button/Btn";

function Header() {
  return (
    <div className={HeaderCSS.box}>
      <nav className={HeaderCSS.nav}>
        <Link to="/">
          <img src="images/assets/logo.png" alt="" />
        </Link>
        <div>
          <ul>
            <li>
              <Link to="/">Página Inicial</Link>
            </li>
            <li>
              <Link to="/catalog">Catálogo</Link>
            </li>
            <li>
              <Link to="/contact">Contactos</Link>
            </li>
          </ul>
        </div>
        <Link className={HeaderCSS.link1} to="/contact">
          <Btn content="Pedir Orçamento" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
