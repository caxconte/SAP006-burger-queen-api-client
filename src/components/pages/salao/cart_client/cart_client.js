import Input from "../../../UI/input/input";
import "./cart_client.scss";

function CartClient({ handleClientName, handleClientTable, order, formRef}) {
  return (
    <form className="cart-control-client" ref={formRef}>
      <Input
        variant="client-name"
        placeholder="Nome do Cliente"
        type="text"
        value={order}
        name="client-name"
        onChange={handleClientName}
      />

      <select
        variant="client-table"
        placeholder="Mesa"
        type="select"
        value={order}
        className="client-table"
        name="client-table"
        onChange={handleClientTable}
      >
        <option value="1">Mesa 1</option>
        <option value="2">Mesa 2</option>
        <option value="3">Mesa 3</option>
        <option value="4">Mesa 4</option>
        <option value="5">Mesa 5</option>
        <option value="6">Mesa 6</option>
        <option value="7">Mesa 7</option>
        <option value="8">Mesa 8</option>
        <option value="9">Mesa 9</option>
      </select>
    </form>
  );
}

export default CartClient;
