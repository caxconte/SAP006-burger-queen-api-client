export default function OrderItem({ order }) {
  return (
    order.Products.map((item, i) =>
      <div className="cart-control-order" key={i}>
        <article className="item-list">
          <p className="item-qtd">{item.qtd}</p>
          <div className="item-product">
            <p className="comanda-nome-titulo">{item.name}</p>
            <p className="comanda-nome-hamburgueres-complementos">{item.flavor}</p>
            <p className="comanda-nome-hamburgueres-complementos">{item.complement}</p>
          </div>
        </article>
      </div>
    )
  )
}
