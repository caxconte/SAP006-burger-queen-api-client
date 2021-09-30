import Button from "../../UI/button/button";
import "./kitchen.scss";

function OrderToDo({ onClick }) {
  return (
    <article className="kitchen-article">
      <header className="kitchen-article-header">
        <p>1</p>
        <p>Camila</p>
      </header>

      <main className="kitchen-main">
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
        <p>Aqui vêm os itens do pedido</p>
      </main>

      <Button
        variant="start-btn"
        onClick={(e) => console.log(e)}
      >
          Começar Pedido
      </Button>

    </article>
  );
}

export default OrderToDo;
