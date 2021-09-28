import "./product.scss";

function Product({ children, onClick, name, value, img }) {
  return (
    <label className="product">
      <img src={img} alt="burguer"/>
      <button name={name} value={value} onClick={onClick} className="product">
        {children}
      </button>
    </label>
  );
}

export default Product;
