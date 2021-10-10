import Img from "../../components/UI/image/img";
import Button from "../../components/UI/button/button";

export const Unauthorized = () => {
  function goBack() {
    window.history.back();
  }

  return (
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

      <p>
        Essa espécie ainda não possui autorização para acessar esse planeta...
      </p>

      <Button
        variant="cancel-btn"
        onClick={goBack}
        value={"Todas as Categorias"}
        type="button"
        className="cancel-btn"
      >
        RETORNAR
      </Button>
    </div>
  );
};
