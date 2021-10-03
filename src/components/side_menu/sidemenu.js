import { useHistory } from "react-router-dom";
import Button from "../UI/button/button";
import Img from "../UI/image/img";
import "./sideMenu.scss";
import { AiFillEdit } from "react-icons/ai";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";

function SideMenu() {
  const buttonHistory = useHistory();

  const newOrder = () => {
    buttonHistory.push("/salao");
  };
  const ordersInProgress = () => {
    buttonHistory.push("/kitchen");
  };

  const ordersDone = () => {
    buttonHistory.push("/orders-done");
  }

  const logout = () => {
    localStorage.clear();
    buttonHistory.push("/");
  };

  let iconStyles = { color: "var(--color-yellow)" };

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
          icon={<FaClipboardList />}
          children="PEDIDOS PRONTOS"
        ></Button>
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
