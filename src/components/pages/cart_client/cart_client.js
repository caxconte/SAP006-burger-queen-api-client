import Input from "../../UI/input/input";
import "./cart_client.scss";

function CartClient() {
  return (
    <div className="cart-control-client">
      <Input
        variant="client-name"
        placeholder="Nome do Cliente"
        type="text"
        value=""
        name="client-name"
        onChange={(e) => console.log(e)}
      />

      <select
        variant="client-table"
        placeholder="Mesa"
        type="select"
        value="table"
        className="client-table"
        name="client-table"
        onChange={(e) => console.log(e)}
      >
        <option value="mesa-um">Mesa 1</option>
        <option value="mesa-dois">Mesa 2</option>
        <option value="mesa-tres">Mesa 3</option>
        <option value="mesa-quatro">Mesa 4</option>
        <option value="mesa-cinco">Mesa 5</option>
        <option value="mesa-seis">Mesa 6</option>
        <option value="mesa-sete">Mesa 7</option>
        <option value="mesa-oito">Mesa 8</option>
        <option value="mesa-nove">Mesa 9</option>
      </select>
    </div>
  );
}

export default CartClient;
