import Button from "../../UI/button/button";

function OrderDone() {
  return (
      <article>
        <header>
          <p>Nome do Cliente</p>
          <p>Mesa 01</p>
        </header>

        <main>
          <p>Aqui vêm os itens do pedido</p>
          <p>Aqui vêm os itens do pedido</p>
          <p>Aqui vêm os itens do pedido</p>
        </main>

        <Button>Começar Pedido</Button>
      </article>
  );
}

export default OrderDone;