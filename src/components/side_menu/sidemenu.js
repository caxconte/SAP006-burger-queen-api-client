import { useHistory } from "react-router-dom";

import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import handleOrders from "../../services/handle_orders"

import Button from "../UI/button/button";
import Img from "../UI/image/img";

import "./sideMenu.scss";

function SideMenu() {
  const buttonHistory = useHistory();

  const { 
    doneOrderList
  } = handleOrders();

  let iconStyles = { color: "var(--color-yellow)" };

  const newOrder = () => {
    buttonHistory.push("/salao");
  };

  const ordersInProgress = () => {
    buttonHistory.push("/kitchen");
  };

  const ordersDone = () => {
    buttonHistory.push("/done");
  };

  const ordersHistory = () => {
    buttonHistory.push("/history");
  };

  const logout = () => {
    localStorage.clear();
    buttonHistory.push("/");
  };


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
          onClick={(e) => {
            e.preventDefault();
            newOrder();
          }}
          icon={<AiFillEdit />}
          children="novo pedido"
        ></Button>
        <Button
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            ordersDone();
          }}
          id="pedidos-prontos"
          icon={<FaClipboardList />}
          children="pedido pronto"
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
          onClick={(e) => {
            e.preventDefault();
            ordersInProgress();
          }}
          span="material-icons"
          icon="table_restaurant"
          children="cozinha"
        ></Button>
         <Button
          variant="secondary"
          onClick={(e) => {
            e.preventDefault();
            ordersHistory();
          }}
          span="material-icons"
          icon="table_restaurant"
          children="histórico"
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
