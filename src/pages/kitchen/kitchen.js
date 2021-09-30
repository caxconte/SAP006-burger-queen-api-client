import SideMenu from "../../components/side_menu/sidemenu";
import OrderToDo from "../../components/pages/kitchen/todo";
import OrderDoing from "../../components/pages/kitchen/doing";

import "./kitchen.scss";

function Kitchen() {
  return (
    <>
      <SideMenu />
      <section className="kitchen">

        <section className="kitchen-todo">
          <h1>Pedidos Criados</h1>
          <OrderToDo />
        </section>

        <section className="kitchen-doing">
          <h1>Pedidos Em Andamento</h1>
          <OrderDoing />
        </section>
        
      </section>
    </>
  );
}

export default Kitchen;
