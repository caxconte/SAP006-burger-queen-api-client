import { useState, useEffect } from "react";

import Product from "../../components/pages/product_card/product";
import MenuArea from "../../components/pages/menu_area/menu_area";
import CartArea from "../../components/pages/cart_area/cart_area";
import MenuButtons from "../../components/pages/menu_buttons/menu_buttons";
import SideMenu from "../../components/side_menu/sidemenu";

import { getProducts } from "../../services/data";

import "./menu.scss";
import "../../components/pages/menu_area/menu_area.scss";

// import Button from '../../components/UI/button/button';

export const Menu = () => {
  const [allDay, setAllDay] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [selected, setSelected] = useState([]);

  function handleSelected(e) {
    const button = e.target.textContent;
    if (button === "Almoço/Jantar") {
      console.log(button);
      setSelected(allDay);
    } else {
      console.log(button);
      setSelected(breakfast);
    }
  }

  useEffect(() => {
    getProducts().then((list) => {
      setAllDay(list);
      setSelected(list);
      setBreakfast(list.filter((item) => item.type === "breakfast"));
    });
  }, []);

  const [value, setValue] = useState({
    tipo: null,
    sabor: null,
    adicionais: null,
  });

  useEffect(() => console.log(value), [value]);

  return (
    <>
      <SideMenu />
      <MenuButtons handleSelected={handleSelected} />

      <main className="big-container">
        <MenuArea>
          <Product
            img={"img/simple.png"}
            name={"tipo"}
            value={"hambúrguer simples"}
            onClick={(e) => {
              setValue({ ...value, tipo: e.target.value });
            }}
          >
            Hambúrguer Simples
          </Product>
          <Product
            img={"img/double.png"}
            name={"tipo"}
            value={"hambúrguer duplo"}
            onClick={(e) => {
              setValue({ ...value, tipo: e.target.value });
            }}
          >
            Hambúrguer Duplo
          </Product>

          <div className="inputs-tipo">
            <label>
              <input
                onChange={(e) => setValue({ ...value, sabor: e.target.value })}
                type="radio"
                name="sabor"
                value="carne"
                id="carne"
                required
              />
              Carne
            </label>

            <label>
              <input
                onChange={(e) => setValue({ ...value, sabor: e.target.value })}
                type="radio"
                name="sabor"
                value="frango"
                id="frango"
              />
              Frango
            </label>
            <label>
              <input
                onChange={(e) => setValue({ ...value, sabor: e.target.value })}
                type="radio"
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
                onChange={(e) =>
                  setValue({ ...value, adicionais: e.target.value })
                }
                name="adicionais"
                value="ovo"
              />
              ovo
            </label>
            <label>
              <input
                type="radio"
                onChange={(e) =>
                  setValue({ ...value, adicionais: e.target.value })
                }
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
                  product.flavor === "carne" &&
                  product.complement === "ovo" &&
                  product.name.includes("simples")
              );
              console.log(filteredOrder);
            }}
          >
            OK
          </button>
        </MenuArea>

        <CartArea />
      </main>
    </>
  );
};
