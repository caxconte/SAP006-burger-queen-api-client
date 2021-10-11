import OrderHistory from "../../components/pages/order_history/order_history";
import SideMenu from "../../components/side_menu/sidemenu";
import handleOrders from "../../services/handle_orders"

function History() {
  const { 
    historyOrderList,
  } = handleOrders();

  return (
    <>
      <SideMenu />
      <section className="kitchen">
        <section className="kitchen-history-container">
          <h1>Histórico de Pedidos ({historyOrderList.length})</h1>
          <div className="kitchen-history">
          <OrderHistory historyOrderList={historyOrderList} />
          </div>
        </section>
      </section>
    </>
  )
}

export default History;