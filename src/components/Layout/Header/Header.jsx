import { Link } from "react-router-dom";
import HeaderCSS from "./style.module.scss";
import Btn from "../../UIComponents/Button/Btn";
import { useCartContext } from "../../Features/CartContext/CartContext";

function Header() {
  const { cartItems } = useCartContext();

  return (
    <div className={HeaderCSS.box}>
      <nav className={HeaderCSS.nav}>
        <Link to="/">
          <img src="src\assets\logo.png" alt="" />
        </Link>
        <div>
          <ul>
            <li>
              <Link to="/catalog">Catálogo</Link>
            </li>
            <li>
              <Link to="/loja">A Loja</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre Nós</Link>
            </li>
            <li>
              <Link to="/contact">Contactos</Link>
            </li>
          </ul>
        </div>
        <Link to="/contact">
          <div className={HeaderCSS.cartCount}>{cartItems}</div>{" "}
          <Btn content="Pedir Orçamento" />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
