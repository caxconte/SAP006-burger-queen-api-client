import Product from "../pages/product_card/product";

function AllDay({ onClick, children, children2 }) {
  return (
    <>
      <Product
        img={"img/simple.png"}
        name="tipo"
        value="hambúrguer simples"
        onClick={onClick}
      >
        Hambúrguer Simples
      </Product>

      <Product
        img={"img/double.png"}
        name="tipo"
        value="hambúrguer duplo"
        onClick={onClick}
      >
        Hambúrguer Duplo
      </Product>

      <section className="product">
        {children2}
      </section>

      <ul>
        {children}
      </ul>
    </>
  );
}

export default AllDay;
