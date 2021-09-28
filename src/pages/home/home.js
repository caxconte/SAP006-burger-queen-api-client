import { Link } from "react-router-dom";
import SideMenu from "../../components/side_menu/sidemenu";

export const Home = () => (
  <div>
    <header>
      <h1> HOME </h1>
    </header>
    <p>
      <SideMenu />
      <Link to="/about"> Ir para página Sobre</Link>
    </p>
  </div>
);
