import Img from "../../components/UI/image/img";
import Button from "../../components/UI/button/button";

export const ErrorPage = () => {
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
          src="/img/404.png"
          alt="Page Not Found"
        />

        <h1>404</h1>
      </header>

      <p>Acho que essa página não existe nesse universo... </p>

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
