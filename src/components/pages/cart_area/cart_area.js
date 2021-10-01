import { useState, useEffect } from "react";
import CartClient from "../cart_client/cart_client";
import CartItem from "../cart_product/product_cart";
import BtnSection from "../cart_product/cart_buttons";
import "./cart_area.scss"

function CartArea({ products, onClick, addItem, reduceItem }) {
  const [order, setOrder] = useState({
    client: "",
    table: "",
    products: null,
  });

  function handleClientName(e) {
    setOrder({ ...order, client: e.target.value });
  }

  function handleClientTable(e) {
    setOrder({ ...order, table: e.target.value });
  }

  useEffect(() => {
    console.log("order: ", order)
  }, [order]);

  const productsResume = products.map((item) => {
    return {
      id: item.id,
      qtd: item.qtd,
    }
  })

  function handleProductsResume(e) {
    if (order.products === null) {
      setOrder({ ...order, products: [...productsResume] });
    }
  }

  return (
    <section className="cart-area">
      <CartClient
        value={order}
        handleClientName={handleClientName}
        handleClientTable={handleClientTable}
      />
      <CartItem
        itemList={products}
        onClick={onClick}
        addItem={addItem}
        reduceItem={reduceItem}
      />

      <BtnSection confirm={handleProductsResume}/>
    </section >
  )
}

export default CartArea;

// confirm={setOrder({ ...order, products: [productsResume]})}