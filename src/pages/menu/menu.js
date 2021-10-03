import { useState, useEffect, useRef } from "react";

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

export const Menu = () => {
  const [allDay, setAllDay] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [allItens, setSelected] = useState([]);
  const [tab, setTab] = useState("Café da Manhã");

  function handleSelected(e) {
    const button = e.target.textContent;
    if (button === "Almoço/Jantar") {
      setTab("Almoço/Jantar");
    } else {
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

  const [cartList, setCartList] = useState([]);
  function addHamburger(e) {
    e.preventDefault();
    const foundHamburger = allItens.find(
      (product) =>
        product.flavor === value.sabor &&
        product.complement === value.adicionais &&
        product.name.includes(value.tipo)
    );
    console.log("hamburger= ", foundHamburger);
    addItem(e, foundHamburger.id);
    setValue({ ...value, adicionais: null });
  }

  const addItem = (e, targetId) => {
    e.preventDefault();
    const foundItem = cartList.findIndex((item) => item.id === targetId);
    if (foundItem !== -1) {
      const updatedItemList = [...cartList];
      updatedItemList[foundItem].qtd++;
      setCartList([...updatedItemList]);
    } else {
      setCartList([
        ...cartList,
        allItens.find((product) => {
          if (product.id === targetId) {
            product.qtd = 1;
            return product;
          }
          return null;
        }),
      ]);
    }
  };

  const addQtd = (object) => {
    const foundItem = cartList.findIndex((item) => item.id === object.id);
    const updatedItemList = [...cartList];
    updatedItemList[foundItem].qtd++;
    setCartList([...updatedItemList]);
  };

  const reduceQtd = (object) => {
    const foundItem = cartList.findIndex((item) => item.id === object.id);
    const updatedItemList = [...cartList];
    updatedItemList[foundItem].qtd--;
    if (updatedItemList[foundItem].qtd === 0) {
      updatedItemList.splice(foundItem, 1);
      setCartList(updatedItemList);
    } else {
      setCartList([...updatedItemList]);
    }
  };

  const deleteItem = (event, index) => {
    event.preventDefault();
    const updatedItemList = [...cartList];
    updatedItemList.splice(index, 1);
    setCartList(updatedItemList);
  };

  const formRef = useRef();
  const handleCancel = () => {
    formRef.current.reset();
    setCartList([]);
  };

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
                    onClick={addHamburger}
                    handleFlavor={(e) =>
                      setValue({ ...value, sabor: e.target.value })
                    }
                    handleExtra={(e) =>
                      setValue({ ...value, adicionais: e.target.value })
                    }
                  />
                )}
              </AllDay>

              <List content={allDay} onClick={addItem} />
            </>
          ) : (
            <List content={breakfast} onClick={addItem} />
          )}
        </MenuArea>
        <CartArea
          products={cartList}
          onClick={deleteItem}
          addItem={addQtd}
          reduceItem={reduceQtd}
          formRef={formRef}
          handleCancel={handleCancel}
        />
      </main>
    </>
  );
};
