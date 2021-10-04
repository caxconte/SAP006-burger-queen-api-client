import { useHistory } from "react-router-dom";
import { useState } from "react";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

import { getOrders } from "../../services/data";
import { filterList, sortData } from "../../data";

import Button from "../UI/button/button";
import Img from "../UI/image/img";

import "./sideMenu.scss";

function SideMenu() {
  const buttonHistory = useHistory();

  const newOrder = (e) => {
    e.preventDefault();
    buttonHistory.push("/salao");
  };
  const ordersInProgress = (e) => {
    e.preventDefault();
    buttonHistory.push("/kitchen");
  };

  const ordersDone = (e) => {
    e.preventDefault();
    buttonHistory.push("/done");
  };

  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    buttonHistory.push("/");
  };

  let iconStyles = { color: "var(--color-yellow)" };

  const [doneOrderList, setDoneOrderList] = useState([]);

  getOrders().then((list) => {
    const filterDoneOrders = filterList(list, "status", "done");
    const sortDoneOrderList = sortData(filterDoneOrders, "updatedAt");
    setDoneOrderList(sortDoneOrderList);
  });

  return (
    <section className="sideMenu-container">
      <Img
        className="Logo"
        width="100px"
        height="100px"
        src="/Logo.png"
        alt="Astro Burger Logo"
      />
      <div className="menuButtons-container">
        <Button
          variant="secondary"
          onClick={newOrder}
          icon={<AiFillEdit />}
          children="NOVO PEDIDO"
        ></Button>
        <Button
          variant="secondary"
          onClick={ordersDone}
          id="pedidos-prontos"
          icon={<FaClipboardList />}

        >
          <label
            className="notificacao-position label-header"
            htmlFor="pedidos-prontos"
          >
            PEDIDOS PRONTOS
            {doneOrderList.length > 0 ? (
              <label
                htmlFor="pedidos-prontos"
                className="notificacao-pedidos-prontos"
              >
                {doneOrderList.length}
              </label>
            ) : null}
          </label>
        </Button>
        <Button
          variant="secondary"
          onClick={ordersInProgress}
          span="material-icons"
          icon="table_restaurant"
          children="COZINHA"
        ></Button>
      </div>

      <Button
        variant="signout-btn"
        span="signout-btnContainer"
        onClick={logout}
        icon={<FaSignOutAlt size={20} style={iconStyles} />}
      ></Button>
    </section>
  );
}

export default SideMenu;
