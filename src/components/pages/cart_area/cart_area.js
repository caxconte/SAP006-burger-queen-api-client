import CartClient from "../cart_client/cart_client";
import CartItem from "../cart_product/product_cart";
import "./cart_area.scss"

function CartArea() {
  return (
    <section className="cart-area">
      <CartClient />
      <CartItem />

      {/* {arrItem.map((item) => {
        return <Product key={item.id} nome={item.name} preco={item.price} />;
      })} */}
    </section>
  );
}

export default CartArea;
