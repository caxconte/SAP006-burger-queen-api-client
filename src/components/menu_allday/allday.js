import Product from "../pages/product_card/product";
import "./allday.scss";

function AllDay({ onClick }) {
  return (
    <>
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
    </>
  );
}

export default AllDay;
