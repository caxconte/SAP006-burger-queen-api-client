import "./product.scss";

function Product({ children, onClick, name, value, img, active }) {
  return (
    <label className="product">
      <img src={img} alt="burguer" />
      <button name={name} value={value} onClick={onClick} className={active === value ? "product active" : "product"}>
        {children}
      </button>
    </label>
  );
}

export default Product;
