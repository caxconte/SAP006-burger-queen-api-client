function List({ content, onClick }) {
  return (
    <>
      {content.map((product) => {
        return (
          <ul key={product.id}>
            <label
              className="allday"
              onClick={(e) => onClick(e, product.id)}
            >
              <li>
                <p className="allday-name">{product.name}</p>
                <p className="allday-price">R${product.price},00</p>
              </li>
            </label>
          </ul>
        );
      })
      }
    </>
  )
}

export default List;