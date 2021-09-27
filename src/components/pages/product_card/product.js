import "./product.scss";

function Product({ onClick }) {
  return (
    <section className="product" onClick={onClick}>
      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>

      <div>
        <label>
        <img src="/Logo.png" alt="descrição" width="100px" height="100px"></img>
        <p className="product-info">Produto X</p>
        </label>
      </div>
    </section>
  );
};

export default Product;

// export const Product = ({ id, onClick, img, name, flavor, price }) => {
//   return (
//     <ul key={id} onClick={onClick}>
//       <li>
//         <img src={img} alt="descrição" width="50px" height="50px"></img>
//         <p className="product-info">{name}</p>
//         <p className="product-info">{`${flavor !== null ? flavor : ""}`}</p>
//         <p className="product-info">R${price},00</p>
//       </li>
//     </ul>
//   );
// };
