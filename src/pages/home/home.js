import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <header>
      <h1> HOME </h1>
    </header>
    <p>
      <Link to="/about"> Ir para página Sobre</Link>
    </p>
  </div>
);
