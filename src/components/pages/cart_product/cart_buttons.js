import Button from "../../UI/button/button";

function BtnSection({ confirm }) {
  return (
    <section className="finish-order-buttons">
      <Button
        variant="cancel-btn"
        onClick={(e) => {
          e.preventDefault();
          console.log("clicou no cancelar")
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