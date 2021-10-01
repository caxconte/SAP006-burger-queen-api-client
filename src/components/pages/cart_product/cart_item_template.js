import { MdDeleteForever } from 'react-icons/md';

export default function CartItemTemplate({ object, index, deleteItem, addQtd, reduceQtd}) {
  const quantity = object.qtd;
  const price = (object.price * quantity);
  
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
        <input
          className="button-manipulate-amount"
          id="remove-qtd"
          type="button"
          value="-"
          onClick={()=> reduceQtd(object)}
        />
        <article>{quantity}</article>
        <input
          className="button-manipulate-amount"
          id="add-qtd"
          type="button"
          value="+"
          onClick={()=> addQtd(object)}
        />
      </div>

      <button
        className="button-remove-item"
        id="remove-item"
        onClick={(event) => {
          deleteItem(event, index)
        }}>
        <MdDeleteForever />
      </button>
    </div>
  )
}

