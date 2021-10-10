import { useEffect, useState } from "react";
import OrderToDo from "../../components/pages/kitchen/toDo/todo";
import OrderHistory from "../../components/pages/order_history/order_history";
import SideMenu from "../../components/side_menu/sidemenu";
import { filterList, sortData } from "../../data";
import { getOrders } from "../../services/data";

function History() {
  useEffect(() => {
    // const interval = setInterval(() => {
    getDone();
    // }, 10000);
    // return () => clearInterval(interval);
  }, [])

  const [historyOrderList, setHistoryOrderList] = useState([]);
  function getDone() {
    getOrders().then((list) => {
      const historyOrderList = filterList(list, "status", "delivered");
      const sortHistoryOrderList = sortData(historyOrderList, "createdAt");
      setHistoryOrderList(sortHistoryOrderList);
    })
      .catch((error) => {
        alert(error);
      })
  }



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