import Button from "../../../UI/button/button";
import OrderItem from "./todo_order_itens";
import "../kitchen.scss";

function OrderToDo({ onClick, list }) {
  return list.map((order) => {
    return (
      <article className="kitchen-article" key={order.id}>
        <header className="kitchen-article-header">
          <p>Mesa {order.table}</p>
          <p>{order.client_name}</p>
        </header>

        <main className="kitchen-main">
          <div className="kitchen-control-order">
            <div className="kitchen-header-list">
              <p className="item-qdt-list">Qdt</p>
              <p className="item-order-list">Item</p>
            </div>
            <OrderItem order={order} />
          </div>
        </main>

        {(order.status === "pending") ? (
          <Button
            variant="start-btn"
            onClick={(e) => {
              e.preventDefault();
              onClick(order.id, "in progress");
            }}
          >
            Começar Pedido
          </Button>
        ) : (
          <Button
            variant="confirm-btn done-btn"
            onClick={(e) => {
              e.preventDefault();
              onClick(order.id, "done");
            }}
          >
            Pedido Pronto
          </Button>
        )}

      </article>
    );
  })
}

export default OrderToDo;
