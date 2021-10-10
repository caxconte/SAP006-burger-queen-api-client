import TodoHeader from "../kitchen/toDo/todo_header";
import TodoMain from "../kitchen/toDo/todo_main";

export default function OrderHistory({ historyOrderList }) {
  const userId = parseInt(localStorage.getItem("userId"));

  return historyOrderList.map((order) => {
    const stopWatch = Date.parse(order.updatedAt) - Date.parse(order.createdAt);
    const minutes = 1000 * 60;
    const hours = minutes * 60;
    const totalMinutes = Math.round(stopWatch / minutes) % 60;
    const totalHours = Math.floor(stopWatch / hours);

    const orderUserId = order.user_id;
    let variant;
    if (orderUserId === userId) {
      variant = "important";
    } else {
      variant = "";
    }

    const classes = `kitchen-article ${variant}`;

    return (
      <article className={classes} key={order.id}>
        <TodoHeader order={order} />

        <div className="kitchen-header-history">
          <p>Status: {order.status}</p>
          <p>
            Tempo de preparo: {totalHours}h {totalMinutes}min
          </p>
        </div>
        <TodoMain order={order} />

      </article>
    );
  })
}
