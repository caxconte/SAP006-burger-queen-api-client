import { useState, useEffect } from "react";
import SideMenu from "../../components/side_menu/sidemenu";
import OrderDone from "../../components/pages/done/done_item";

import { getOrders, updateOrders } from "../../services/data"
import { filterList, sortData } from "../../data";

import "./done.scss";
import "../kitchen/kitchen.scss";

export const Done = () => {
  const [ doneOrderList, setOrderList ] = useState([]);
  const [ historyOrderList, setHistoryOrderList ] = useState([]);

  useEffect(() => {
    // const interval = setInterval(() => {
    getDone();
    // }, 10000);
    // return () => clearInterval(interval);
  }, [])

  function getDone() {
    getOrders().then((list) => {
      const filterDoneOrders = filterList(list, "status", "done");
      const sortDoneOrders = sortData(filterDoneOrders, "createdAt");  
      setOrderList(sortDoneOrders);

      const historyOrderList = filterList(list, "status", "delivered");
      const sortHistoryOrderList = sortData(historyOrderList, "createdAt");  
      setHistoryOrderList(sortHistoryOrderList);
    })
    .catch((error)=>{
      alert(error);
    })
  }

  function handleOrderStatusChange(orderId, status) {
    updateOrders(orderId, status)
      .then((order) => {
        if(order.code) {
          alert(`${order.code}: ${order.message}`);
        }
      })
      .catch((error) => {
        alert(`${error.code}: ${error.message}`);
      })
  }

  return (
    <>
      <SideMenu />
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
