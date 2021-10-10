import Product from "../pages/salao/product_card/product";
import "./allday.scss";

function AllDay({ onClick, children }) {
  return (
    <>
      <div className="hamburger-container">
        <Product
          img={"img/simple.png"}
          name="tipo"
          value="Hambúrguer simples"
          onClick={onClick}
        >
          Hambúrguer Simples
        </Product>

        <Product
          img={"img/double.png"}
          name="tipo"
          value="Hambúrguer duplo"
          onClick={onClick}
        >
          Hambúrguer Duplo
        </Product>
      </div>
      <section className="complements">
        {children}
      </section>
    </>
  );
}

export default AllDay;
