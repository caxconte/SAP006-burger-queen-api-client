import CartClient from "../cart_client/cart_client";
import CartItem from "../cart_product/product_cart";
import BtnSection from "../cart_product/cart_buttons";
import "./cart_area.scss"

function CartArea({ products, onClick, addItem, reduceItem }) {
  const totalPrice = products.map((item) =>
    parseInt(item.price * item.qtd))
    .reduce((previousPrice, currentPrice) =>
      previousPrice + currentPrice
      , 0
    )

  return (
    <section className="cart-area">
      <CartClient />

      <section className="cart-control">
        <CartItem
          itemList={products}
          onClick={onClick}
          addItem={addItem}
          reduceItem={reduceItem} />
      </section>


      <section className="finis-order-items">
        <div className="order-total">
          <span>TOTAL:</span> <span>R${totalPrice},00</span>
        </div>
      </section>

      <BtnSection />
    </section >
  );
}

export default CartArea;
