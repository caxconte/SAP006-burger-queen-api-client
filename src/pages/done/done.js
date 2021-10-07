import SideMenu from "../../components/side_menu/sidemenu";
import OrderDone from "../../components/pages/done/done_item";
import handleOrders from "../../services/handle_orders"

import "./done.scss";
import "../kitchen/kitchen.scss";

export const Done = () => {
  const { 
    doneOrderList,
    historyOrderList,
    handleOrderStatusChange,
  } = handleOrders();

  return (
    <>
      <SideMenu doneOrderList={doneOrderList}/>

      <section className="kitchen">

        <section className="kitchen-done">
          <h1>Pedidos Prontos ({doneOrderList.length})</h1>
          <OrderDone list={doneOrderList} onClick={handleOrderStatusChange} />
        </section>

        <section className="kitchen-history">
          <h1>Histórico de Pedidos ({historyOrderList.length})</h1>
          <OrderDone list={historyOrderList} />
        </section>

      </section>
    </>
  );
};
