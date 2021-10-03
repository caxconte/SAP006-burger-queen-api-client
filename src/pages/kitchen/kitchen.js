import SideMenu from "../../components/side_menu/sidemenu";
import OrderToDo from "../../components/pages/kitchen/toDo/todo";
import { filterList, sortData } from "../../data";
import { getOrders, updateOrders } from "../../services/data";
import { useState, useEffect } from "react";

import "./kitchen.scss";

function Kitchen() {

  useEffect(() => {
    const interval = setInterval(() => {
    getAllOrders();
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  function getAllOrders() {
    getOrders().then((list) => {
      const filterPendingOrders = filterList(list, "status", "pending");
      const sortPendingOrders = sortData(filterPendingOrders, "createdAt");  
      setPendingOrderList(sortPendingOrders);

      const filterInprogressOrders = filterList(list, "status", "in progress");
      const sortInprogressOrders = sortData(filterInprogressOrders, "updatedAt");  
      setInProgressOrderList(sortInprogressOrders);
    })
    .catch((error)=>{
      alert(error);
    })
  }

  const [inProgressOrderList, setInProgressOrderList] = useState([]);
  const [pendingOrderList, setPendingOrderList] = useState([]);

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

  // useEffect(() => console.log("pending= ", pendingOrderList), [pendingOrderList]);
  // useEffect(() => console.log("inprogress= ", inProgressOrderList), [inProgressOrderList]);

  return (
    <>
      <SideMenu />
      <section className="kitchen">

        <section className="kitchen-todo">
          <h1>Pedidos Pendentes ({pendingOrderList.length})</h1>
          <OrderToDo list={pendingOrderList} onClick={handleOrderStatusChange} />
        </section>

        <section className="kitchen-doing">
          <h1>Pedidos Em Andamento ({inProgressOrderList.length})</h1>
          <OrderToDo list={inProgressOrderList} onClick={handleOrderStatusChange} />
        </section>

      </section>
    </>
  );
}

export default Kitchen;
