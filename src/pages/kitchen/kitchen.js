import SideMenu from "../../components/side_menu/sidemenu";
import OrderToDo from "../../components/pages/kitchen/toDo/todo";
import handleOrders from "../../services/handle_orders";

import "./kitchen.scss";

function Kitchen() {
  const { pendingOrderList, inProgressOrderList, handleOrderStatusChange } =
    handleOrders();

  return (
    <>
      <SideMenu />
      <section className="kitchen">
        <section className="kitchen-todo">
          <h1>Pedidos Pendentes ({pendingOrderList.length})</h1>
          <OrderToDo
            list={pendingOrderList}
            onClick={handleOrderStatusChange}
          />
        </section>

        <section className="kitchen-doing">
          <h1>Pedidos Em Andamento ({inProgressOrderList.length})</h1>
          <OrderToDo
            list={inProgressOrderList}
            onClick={handleOrderStatusChange}
          />
        </section>
      </section>
    </>
  );
}

export default Kitchen;
