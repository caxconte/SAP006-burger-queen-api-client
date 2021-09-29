function Complements({ value, handleFlavor, handleExtra, selected }) {
  console.log(selected);
  return (
    <>
      <div className="inputs-tipo">
        <label>
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

        <label>
          <input
            type="radio"
            onChange={handleFlavor}
            name="sabor"
            value="frango"
            id="frango"
          />
          Frango
        </label>
        <label>
          <input
            type="radio"
            onChange={handleFlavor}
            name="sabor"
            value="veggie"
            id="veggie"
          />
          Veggie
        </label>
      </div>
      <div className="inputs-adicional">
        <label>
          <input
            type="radio"
            onChange={handleExtra}
            name="adicionais"
            value="ovo"
          />
          ovo
        </label>
        <label>
          <input
            type="radio"
            onChange={handleExtra}
            name="adicionais"
            value="queijo"
          />
          queijo
        </label>
      </div>
      <button
        onClick={() => {
          const filteredOrder = selected.filter(
            (product) =>
              product.flavor === value.sabor &&
              product.complement === value.adicionais
              // product.name.includes(value.tipo)
          );
          console.log(filteredOrder);
        }}
      >
        OK
      </button>
    </>
  
  );
}

export default Complements;
