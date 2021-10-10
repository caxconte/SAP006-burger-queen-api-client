import { MdDeleteForever } from "react-icons/md";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

export default function CartItemTemplate({
  object,
  index,
  deleteItem,
  addQtd,
  reduceQtd,
}) {
  const quantity = object.qtd;
  const price = object.price * quantity;
  let iconStyles = { color: "var(--color-yellow)" };

  return (
    <div className="cart-control-order">
      <div className="item-list">
        <article className="comanda-nome-hamburgueres-titulo">
          {object.name}
        </article>

        <article className="comanda-nome-hamburgueres-complementos">
          {object.flavor}
        </article>
        
        <article className="comanda-nome-hamburgueres-complementos">
          {object.complement}
        </article>
      </div>

      <div className="item-list-price">R${price},00</div>

      <div className="item-list-amount">
        <IoMdRemoveCircle
          size={18}
          style={iconStyles}
          onClick={() => reduceQtd(object)}
        />
        <article>{quantity}</article>
        <IoMdAddCircle
          size={18}
          style={iconStyles}
          onClick={() => addQtd(object)}
        />
      </div>

      <button
        className="button-remove-item"
        id="remove-item"
        onClick={(event) => {
          deleteItem(event, index);
        }}
      >
        <MdDeleteForever size={18} />
      </button>
    </div>
  );
}
