import Button from "../../UI/button/button";

function BtnSection() {
  return (
    <section className="finish-order-buttons">
      <Button
        variant="cancel-btn"
        onClick={(e) => console.log(e, "clicou no cancelar")}
        value={"Todas as Categorias"}
        type="button"
        className="cancel-btn"
      >
        CANCELAR
      </Button>
      <Button
        variant="confirm-btn"
        onClick={(e) => console.log(e, "clicou no confirmar")}
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