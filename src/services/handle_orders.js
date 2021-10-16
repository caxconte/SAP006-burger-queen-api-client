/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { filterList, sortData } from "../data";
import { getOrders, updateOrders } from "./data";

export default handleOrders;

function handleOrders() {
  useEffect(() => {
    const interval = setInterval(() => {
      getAllOrders();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [inProgressOrderList, setInProgressOrderList] = useState([]);
  const [pendingOrderList, setPendingOrderList] = useState([]);
  const [doneOrderList, setDoneOrderList] = useState([]);
  const [historyOrderList, setHistoryOrderList] = useState([]);

  function getAllOrders() {
    getOrders()
      .then((list) => {
        const filterPendingOrders = filterList(list, "status", "pending");
        const sortPendingOrders = sortData(filterPendingOrders, "createdAt");
        setPendingOrderList(sortPendingOrders);

        const filterInprogressOrders = filterList(
          list,
          "status",
          "in progress"
        );
        const sortInprogressOrders = sortData(
          filterInprogressOrders,
          "updatedAt"
        );
        setInProgressOrderList(sortInprogressOrders);

        const filterDoneOrders = filterList(list, "status", "done");
        const sortDoneOrders = sortData(filterDoneOrders, "createdAt");
        setDoneOrderList(sortDoneOrders);

        const historyOrderList = filterList(list, "status", "delivered");
        const sortHistoryOrderList = sortData(historyOrderList, "createdAt");
        setHistoryOrderList(sortHistoryOrderList);
      })
      .catch((error) => {
        alert(error);
      });
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
      });
  }

  return {
    getAllOrders,
    handleOrderStatusChange,
    inProgressOrderList,
    pendingOrderList,
    doneOrderList,
    historyOrderList,
  };
}
