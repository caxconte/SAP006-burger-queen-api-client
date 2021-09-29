import { useState, useEffect } from "react";

import AllDay from "../../components/menu_allday/allday";
import MenuArea from "../../components/pages/menu_area/menu_area";
import CartArea from "../../components/pages/cart_area/cart_area";
import MenuButtons from "../../components/pages/menu_buttons/menu_buttons";
import SideMenu from "../../components/side_menu/sidemenu";
import Complements from "../../components/menu_allday/complements";
import List from "../../components/list/list";

import { getProducts } from "../../services/data";

import "./menu.scss";
import "../../components/menu_allday/allday.scss";
import "../../components/pages/menu_area/menu_area.scss";

// import Button from '../../components/UI/button/button';

export const Menu = () => {
  const [allDay, setAllDay] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [selected, setSelected] = useState([]);
  const [tab, setTab] = useState("Café da Manhã");

  function handleSelected(e) {
    const button = e.target.textContent;
    if (button === "Almoço/Jantar") {
      console.log(button);

      setTab("Almoço/Jantar");
    } else {
      console.log(button);
      setSelected(breakfast);
      setTab("Café da Manhã");
    }
  }

  useEffect(() => {
    getProducts().then((list) => {
      setAllDay(
        list.filter(
          (item) => item.sub_type === "drinks" || item.sub_type === "side"
        )
      );
      setSelected(list);
      setBreakfast(list.filter((item) => item.type === "breakfast"));
    });
  }, []);

  const [value, setValue] = useState({
    tipo: "",
    sabor: "",
    adicionais: null,
  });

  useEffect(() => console.log(value), [value]);

  return (
    <>
      <SideMenu />
      <MenuButtons handleSelected={handleSelected} />

      <main className="big-container">
        <MenuArea>
          {tab === "Almoço/Jantar" ? (
            <>
              <AllDay
                onClick={(e) => {
                  setValue({ ...value, tipo: e.target.value });
                }}
              >
                {value.tipo && (
                  <Complements
                    value={value}
                    selected={selected}
                    handleFlavor={(e) =>
                      setValue({ ...value, sabor: e.target.value })
                    }
                    handleExtra={(e) =>
                      setValue({ ...value, adicionais: e.target.value })
                    }
                  />
                )}
              </AllDay>

              <List>
                {allDay.map((product) => {
                  return (
                    <label className="allday" onClick={(e) => console.log(e)}>
                      <li>
                        <p className="allday-name">{product.name}</p>
                        <p className="allday-price">R${product.price},00</p>
                      </li>
                    </label>
                  );
                })}
              </List>
            </>
          ) : (
            <>
              <p>OLÁ</p>
            </>
          )}
        </MenuArea>
        <CartArea />
      </main>
    </>
  );
};
