import { useState, useEffect } from "react";
import SideMenu from "../../components/side_menu/sidemenu";

import { getOrders, updateOrders } from "../../services/data"
import { filterList, sortData } from "../../data";

import "./done.scss";
import "../kitchen/kitchen.scss";
import OrderToDo from "../../components/pages/kitchen/toDo/todo";

export const Done = () => {
  const [doneOrderList, setOrderList] = useState([]);

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
    })
      .catch((error) => {
        alert(error);
      })
  }

  function handleOrderStatusChange(orderId, status) {
    updateOrders(orderId, status)
      .then((order) => {
        if (order.code) {
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
