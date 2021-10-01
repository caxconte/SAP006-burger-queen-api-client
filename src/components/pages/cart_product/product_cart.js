import "./product_cart.scss";
import "./cart_buttons";
import CartItemTemplate from "./cart_item_template";

export default function CartItem({ itemList, onClick, addItem, reduceItem }) {
  const cartList = itemList.map((object, index) => {
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
      {cartList}
    </>
  )
}
