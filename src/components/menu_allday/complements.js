import Button from "../UI/button/button";
import {
  GiMeat,
  GiChickenLeg,
  GiFallingLeaf,
  GiRawEgg,
  GiCheeseWedge,
} from "react-icons/gi";
import "./allday.scss";

function Complements({ handleFlavor, handleExtra, onClick, isActive }) {
  const extra = isActive.adicionais;
  const flavor = isActive.sabor;
  const classMeat = "meat-type";
  const classExtra = "extras";
  
  return (
    <>
      <div className="inputs-tipo">
        <label htmlFor="carne" className={flavor === "carne" ? `${classMeat} active` : classMeat}>
          <GiMeat />
          <input
            type="radio"
            onClick={handleFlavor}
            name="sabor"
            value="carne"
            id="carne"
            active={isActive.flavor}
            required
          />
          Carne
        </label>

        <label htmlFor="frango" className={flavor === "frango" ? `${classMeat} active` : classMeat}>
          <GiChickenLeg />
          <input
            type="radio"
            onClick={handleFlavor}
            name="sabor"
            value="frango"
            id="frango"
            active={isActive.flavor}
          />
          Frango
        </label>
        <label htmlFor="veggie" className={flavor === "vegetariano" ? `${classMeat} active` : classMeat}>
          <GiFallingLeaf />
          <input
            type="radio"
            onClick={handleFlavor}
            name="sabor"
            value="vegetariano"
            id="veggie"
            active={isActive.flavor}
          />
          Veggie
        </label>
      </div>
      <div className="inputs-adicional">
        <label className={extra === "ovo" ? `${classExtra} active` : classExtra}>
          <GiRawEgg />
          <input
            type="radio"
            onClick={handleExtra}
            name="adicionais"
            value="ovo"
          />
          ovo
        </label>
        <label className={extra === "queijo" ? `${classExtra} active` : classExtra}>
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
