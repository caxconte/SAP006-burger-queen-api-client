import OrderItem from "./todo_order_itens";

export default function TodoMain({ order }) {
  return (
    <main className="kitchen-main">
          <div className="kitchen-control-order">
            <div className="kitchen-control-order-header">
              <p className="item-qtd-list">Qdt</p>
              <p className="item-order-list">Item</p>
            </div>
            <OrderItem order={order} />
          </div>
        </main>
  )
}
