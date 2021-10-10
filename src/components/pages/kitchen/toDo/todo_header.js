import React from 'react'

export default function TodoHeader({ order }) {
  return (
    <header className="kitchen-article-header">

      <div className="header-client-table">
        <p>M{order.table}</p>
        <p>{order.client_name}</p>
      </div>

      <div className="header-order-id">
        <p>{order.id}</p>
      </div>
    </header>
  )
}
