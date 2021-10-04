import Button from "../../../UI/button/button";

function BtnSection({ confirm, cancel }) {
  return (
    <section className="finish-order-buttons">
      <Button
        variant="cancel-btn"
        onClick={(e) => {
          e.preventDefault();
          cancel();
        }}
        value={"Todas as Categorias"}
        type="button"
        className="cancel-btn"
      >
        CANCELAR
      </Button>
      <Button
        variant="confirm-btn"
        onClick={(e) => {
          e.preventDefault();
          confirm();
        }}
        value={"Todas as Categorias"}
        type="button"
        className="confirm-btn"
      >
        CONFIRMAR
      </Button>
    </section>
  )
}

export default BtnSection;