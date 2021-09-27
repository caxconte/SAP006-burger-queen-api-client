import Button from "../../UI/button/button";
import "./product_cart.scss";

function CartItem() {
  return (
    <>
      <section className="cart-control">
        <div className="cart-control-order">
          <div className="item-list">
            <label className="comanda-nome-hamburgueres-titulo">
              hamburguer
            </label>
            <label className="comanda-nome-hamburgueres-complementos">
              carne
            </label>
            <label className="comanda-nome-hamburgueres-complementos">
              ovo
            </label>
          </div>

          <div className="item-list-price">R$15,00</div>

          <div className="item-lista-amount">
            <input
              className="button-manipulate-amount"
              id="remove-qtd"
              type="button"
              value="-"
              onClick={() => console.log("clicou no menos")}
            />
            <label>1</label>
            <input
              className="button-manipulate-amount"
              id="add-qtd"
              type="button"
              value="+"
              onClick={() => console.log("clicou no mais")}
            />
          </div>

          <input
            className="button-remove-item"
            id="remove-item"
            type="image"
            src=""
            alt="icone-lixeira"
            onClick={() => console.log("clicou na lixeira")}
          />
        </div>

        <div className="cart-control-order">
          <div className="item-list">
            <label className="comanda-nome-hamburgueres-titulo">
              hamburguer
            </label>
            <label className="comanda-nome-hamburgueres-complementos">
              carne
            </label>
            <label className="comanda-nome-hamburgueres-complementos">
              ovo
            </label>
          </div>

          <div className="item-list-price">R$15,00</div>

          <div className="item-lista-amount">
            <input
              className="button-manipulate-amount"
              id="remove-qtd"
              type="button"
              value="-"
              onClick={() => console.log("clicou no menos")}
            />
            <label>1</label>
            <input
              className="button-manipulate-amount"
              id="add-qtd"
              type="button"
              value="+"
              onClick={() => console.log("clicou no mais")}
            />
          </div>

          <input
            className="button-remove-item"
            id="remove-item"
            type="image"
            src=""
            alt="icone-lixeira"
            onClick={() => console.log("clicou na lixeira")}
          />
        </div>

        <div className="cart-control-order">
          <div className="item-list">
            <label className="comanda-nome-hamburgueres-titulo">
              hamburguer
            </label>
            <label className="comanda-nome-hamburgueres-complementos">
              carne
            </label>
            <label className="comanda-nome-hamburgueres-complementos">
              ovo
            </label>
          </div>

          <div className="item-list-price">R$15,00</div>

          <div className="item-lista-amount">
            <input
              className="button-manipulate-amount"
              id="remove-qtd"
              type="button"
              value="-"
              onClick={() => console.log("clicou no menos")}
            />
            <label>1</label>
            <input
              className="button-manipulate-amount"
              id="add-qtd"
              type="button"
              value="+"
              onClick={() => console.log("clicou no mais")}
            />
          </div>

          <input
            className="button-remove-item"
            id="remove-item"
            type="image"
            src=""
            alt="icone-lixeira"
            onClick={() => console.log("clicou na lixeira")}
          />
        </div>
        
        {/* <article key={props.id}>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </article> */}
      </section>

      <section className="finis-order-items">
        <div className="order-total">
          <span>TOTAL:</span> <span>R$15,00</span>
        </div>

        <div className="finish-order-buttons">
          <Button
            variant="cancel-btn"
            onClick={(e) => console.log(e, "clicou no cancelar")}
            value={"Todas as Categorias"}
            type="button"
            className="cancel-btn"
          >
            CANCELAR
          </Button>
          <Button
            variant="confirm-btn"
            onClick={(e) => console.log(e, "clicou no confirmar")}
            value={"Todas as Categorias"}
            type="button"
            className="confirm-btn"
          >
            CONFIRMAR
          </Button>
        </div>
      </section>
    </>
  );
}

export default CartItem;
