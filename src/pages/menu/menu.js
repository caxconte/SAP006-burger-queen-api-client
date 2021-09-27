import Product from "../../components/pages/product_card/product";
import MenuArea from "../../components/pages/menu_area/menu_area";
import CartArea from "../../components/pages/cart_area/cart_area";
import MenuButtons from "../../components/pages/menu_buttons/menu_buttons";

import "./menu.scss";
// import Button from '../../components/UI/button/button';

export const Menu = () => {
  return (
    <section>
      <MenuButtons />

      <main className="big-container">
        <MenuArea>
          <Product />
        </MenuArea>

        <CartArea />
      </main>
      
    </section>
  );
};
