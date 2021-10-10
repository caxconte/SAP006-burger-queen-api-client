import Button from "../../../UI/button/button";
import TodoHeader from "./todo_header";
import TodoMain from "./todo_main";
import "../kitchen.scss";

function OrderToDo({ onClick, list }) {
  const userId = parseInt(localStorage.getItem("userId"));
  
  return list.map((order) => {
    const orderUserId = order.user_id;
    let variant;
    if (orderUserId === userId) {
      variant = "important";
    } else {
      variant="";
    }

    const classes = `kitchen-article ${variant}`;

    return (
      <article className={classes} key={order.id}>
        <TodoHeader order={order} />

        <TodoMain order={order} />
        
        {(order.status === "pending" &&
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

        {(order.status === "in progress" &&
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

        {(order.status === "done" &&
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
      </article>
    );
  })
}

export default OrderToDo;
