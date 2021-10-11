import SideMenu from "../../components/side_menu/sidemenu";
import handleOrders from "../../services/handle_orders"

import "./done.scss";
import "../kitchen/kitchen.scss";
import OrderToDo from "../../components/pages/kitchen/toDo/todo";

export const Done = () => {
  const { 
    doneOrderList,
    handleOrderStatusChange,
  } = handleOrders();

  return (
    <>
      <SideMenu doneOrderList={doneOrderList}/>

      <section className="kitchen">
        <div className="kitchen-done-container">
          <h1>Pedidos Prontos ({doneOrderList.length})</h1>
          <div className="kitchen-done">
            <OrderToDo list={doneOrderList} onClick={handleOrderStatusChange} />
          </div>
        </div>
      </section>
    </>
  );
};
