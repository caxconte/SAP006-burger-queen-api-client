import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SideMenu from "../../components/side_menu/sidemenu";
import { filterList, sortData } from "../../data";
import { getOrders } from "../../services/data";
import "./done.scss";

export const Done = () => {

  useEffect(() => {
    // const interval = setInterval(() => {
    getAllOrders();
    // }, 10000);
    // return () => clearInterval(interval);
  }, []);

  const [doneOrderList, setDoneOrderList] = useState([]);
  function getAllOrders() {
    getOrders().then((list) => {
      const filterDoneOrders = filterList(list, "status", "done");
      const sortDoneOrderList = sortData(filterDoneOrders, "updatedAt");
      setDoneOrderList(sortDoneOrderList);
    })
      .catch((error) => {
        alert(error);
      })
  }

  const Timer = () => {
    return doneOrderList.map((order, i) => {
      console.log("order", order)
      const minutes = 1000 * 60;
      const hours = minutes * 60;
      const stopWatch = Date.parse(order.updatedAt) - Date.parse(order.createdAt);
      const totalMinutes = Math.round(stopWatch / minutes) % 60;
      const totalHours = Math.floor(stopWatch / hours);

      console.log("inicio", (order.createdAt));
      console.log("fim", order.updatedAt)
      return (
        <div key={i} style={{ background: "beige", borderBottom: "1px solid black" }}>
          <p> Pedido {order.id} </p>
          <p> Mesa {order.table} </p>
          <p> Cliente: {order.client_name} </p>
          <p> Tempo de preparo: {totalHours}h {totalMinutes}min</p>
        </div>
      )
    })
  }

  return (
    <section className="done-container">
      <header>
        <h1>Pedidos Prontos</h1>
      </header>

      <SideMenu />
      <Link to="/about"> Ir para página Sobre</Link>
      <Timer></Timer>

    </section>
  );
};
