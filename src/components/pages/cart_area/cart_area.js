import { useState, useEffect } from "react";
import CartClient from "../cart_client/cart_client";
import CartItem from "../cart_product/product_cart";
import "./cart_area.scss";

function CartArea() {
  const [order, setOrder] = useState({
    client: "",
    table: "",
    products: [],
  });

  function handleClientName(e) {
    setOrder({...order, client: e.target.value });
  }

  function handleClientTable(e) {
    setOrder({...order, table: e.target.value });
  }

  useEffect(() => {
    console.log(order)
  }, [order]);

  return (
    <section className="cart-area">
      <CartClient
        value={order}
        handleClientName={handleClientName}
        handleClientTable={handleClientTable}
      />
      <CartItem />
      
    </section>
  );
}

export default CartArea;
