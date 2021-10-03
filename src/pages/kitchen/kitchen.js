import SideMenu from "../../components/side_menu/sidemenu";
import OrderToDo from "../../components/pages/kitchen/toDo/todo";
import { getOrders, updateOrders } from "../../services/data";
import { useState, useEffect } from "react";

import "./kitchen.scss";

function Kitchen() {

  useEffect(() => {
    getAllOrders();
  }, [])

  function getAllOrders() {
    getOrders().then((list) => {
      setPendingOrderList(
        list.filter(
          (item) => item.status === "pending")
      );
      setInProgressOrderList(
        list.filter(
          (item) => item.status === "in progress")
      )
    });
  }

  const [inProgressOrderList, setInProgressOrderList] = useState([]);
  const [pendingOrderList, setPendingOrderList] = useState([]);

  function handleOrderStatusChange(orderId, status) {
    updateOrders(orderId, status)
      .then((order) => {
        console.log("response", order)
        getAllOrders();
      })
      .catch((error) => {
        alert(`${error.code}: ${error.message}`);
      })
  }

  useEffect(() => console.log("pending= ", pendingOrderList), [pendingOrderList]);
  useEffect(() => console.log("inprogress= ", inProgressOrderList), [inProgressOrderList]);

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
