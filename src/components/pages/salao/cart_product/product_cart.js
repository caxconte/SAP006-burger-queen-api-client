import "./product_cart.scss";
import "./cart_buttons";
import CartItemTemplate from "./cart_item_template";

export default function CartItem({ itemList, onClick, addItem, reduceItem }) {
  const parcialPrice = itemList.map((item) =>
    parseInt(item.price * item.qtd)
  )

  const totalPrice = parcialPrice.reduce((previousPrice, currentPrice) =>
    previousPrice + currentPrice
    , 0
  )

  const CartList = () => itemList.map((object, index) => {
    return (
      <CartItemTemplate
        object={object}
        index={index}
        key={index}
        deleteItem={onClick}
        addQtd={addItem}
        reduceQtd={reduceItem} />
    )
  })

  return (
    <>
      <section className="cart-control">
        <CartList />
      </section>
      <section className="finis-order-items">
        <div className="order-total">
          <span>TOTAL:</span> <span>R${totalPrice},00</span>
        </div>
      </section>
    </>
  )
}
