import Img from "../../components/UI/image/img";

export const ErrorPage = () => (
  <div className="errorpage-container">
    <header>
      <Img
        className="404"
        width="250px"
        height="250px"
        src="/img/404.png"
        alt="Page Not Found"
      />

      <h1>404</h1>
    </header>

    <p>Acho que essa página não existe nesse universo... </p>
  </div>
);
