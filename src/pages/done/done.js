import { Link } from "react-router-dom";
import SideMenu from "../../components/side_menu/sidemenu";
import "./done.scss";

export const Done = () => {
  return (
    <section className="done-container">
      <header>
        <h1>Pedidos Prontos</h1>
      </header>
      <p>
        <SideMenu />
        <Link to="/about"> Ir para página Sobre</Link>
      </p>
    </section>
  );
};
