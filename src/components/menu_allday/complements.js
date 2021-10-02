import Button from "../UI/button/button";
import {
  GiMeat,
  GiChickenLeg,
  GiFallingLeaf,
  GiRawEgg,
  GiCheeseWedge,
} from "react-icons/gi";
import "./allday.scss";

function Complements({ handleFlavor, handleExtra, onClick }) {
  return (
    <>
      <div className="inputs-tipo">
        <label htmlFor="carne" className="meat-type">
          <GiMeat />
          <input
            type="radio"
            onClick={handleFlavor}
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
            onClick={handleFlavor}
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
            onClick={handleFlavor}
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
            onClick={handleExtra}
            name="adicionais"
            value="ovo"
          />
          ovo
        </label>
        <label className="extras">
          <GiCheeseWedge />
          <input
            type="radio"
            onClick={handleExtra}
            name="adicionais"
            value="queijo"
          />
          queijo
        </label>
      </div>
      <Button
        variant="confirm-btn"
        className="confirm-btn"
        onClick={onClick}
      >
        OK
      </Button>
    </>
  );
}

export default Complements;
