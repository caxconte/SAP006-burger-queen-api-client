import Img from "../../components/UI/image/img";

export const Unauthorized = () => (
  <div className="errorpage-container">
    <header>
      <Img
        className="404"
        width="250px"
        height="250px"
        src="/img/notpass.png"
        alt="Unauthorized Image"
      />

      <h1>403</h1>
    </header>

    <p>Essa espécie ainda não possui autorização para acessar esse planeta...</p>
  </div>
);
