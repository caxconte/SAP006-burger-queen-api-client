import Button from "../UI/button/button";
import {
  GiMeat,
  GiChickenLeg,
  GiFallingLeaf,
  GiRawEgg,
  GiCheeseWedge,
} from "react-icons/gi";
import "./allday.scss";

function Complements({ value, handleFlavor, handleExtra, selected }) {
    return (
    <>
      <div className="inputs-tipo">
        <label htmlFor="carne" className="meat-type">
          <GiMeat size={20} />
          <input
            type="radio"
            onChange={handleFlavor}
            name="sabor"
            value="carne"
            id="carne"
            required
          />
          Carne
        </label>

        <label htmlFor="frango" className="meat-type">
          <GiChickenLeg />
          <input
            type="radio"
            onChange={handleFlavor}
            name="sabor"
            value="frango"
            id="frango"
          />
          Frango
        </label>
        <label htmlFor="veggie" className="meat-type">
          <GiFallingLeaf />
          <input
            type="radio"
            onChange={handleFlavor}
            name="sabor"
            value="vegetariano"
            id="veggie"
          />
          Veggie
        </label>
      </div>
      <div className="inputs-adicional">
        <label className="extras">
          <GiRawEgg />
          <input
            type="radio"
            onChange={handleExtra}
            name="adicionais"
            value="ovo"
          />
          ovo
        </label>
        <label className="extras">
          <GiCheeseWedge />
          <input
            type="radio"
            onChange={handleExtra}
            name="adicionais"
            value="queijo"
          />
          queijo
        </label>
      </div>
      <Button
        variant="confirm-btn"
        className="confirm-btn"
        onClick={() => {
          const filteredOrder = selected.find(
            (product) =>
            // console.log(product)
              product.flavor === value.sabor &&
              product.complement === value.adicionais &&
              product.name.includes(value.tipo)
          );
          console.log(filteredOrder);
        }}
      >
        OK
      </Button>
    </>
  );
}

export default Complements;
