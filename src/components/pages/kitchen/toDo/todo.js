import Button from "../../../UI/button/button";
import TodoHeader from "./todo_header";
import TodoMain from "./todo_main";
import "../kitchen.scss";

function OrderToDo({ onClick, list }) {
  const userId = parseInt(localStorage.getItem("userId"));
  const role = localStorage.getItem("userRole");

  return list.map((order) => {
    const orderUserId = order.user_id;

    return (
      <article className={orderUserId === userId? "kitchen-article important": "kitchen-article"} key={order.id}>
        <TodoHeader order={order} />

        <TodoMain order={order} />
        {role === "kitchen" ? (
          <>
            {order.status === "pending" && (
              <Button
                variant="start-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onClick(order.id, "in progress");
                }}
              >
                Começar Pedido
              </Button>
            )}

            {order.status === "in progress" && (
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
          </>
        ) : null}

        {role === "salao" ? (
          <>
            {order.status === "done" && (
              <Button
                variant="start-btn"
                onClick={(e) => {
                  e.preventDefault();
                  onClick(order.id, "delivered");
                }}
              >
                Pedido Entregue
              </Button>
            )}
          </>
        ) : null}
      </article>
    );
  });
}

export default OrderToDo;
