import { useState, useEffect, useRef } from "react";

import AllDay from "../../components/menu_allday/allday";
import MenuArea from "../../components/pages/salao/menu_area/menu_area";
import CartArea from "../../components/pages/salao/cart_area/cart_area";
import MenuButtons from "../../components/pages/salao/menu_buttons/menu_buttons";
import SideMenu from "../../components/side_menu/sidemenu";
import Complements from "../../components/menu_allday/complements";
import List from "../../components/list/list";
import { Unauthorized } from "../../pages/unauthorized/unauthorized";
import { filterList } from "../../data";
import { getProducts } from "../../services/data";

import "./menu.scss";
import "../../components/menu_allday/allday.scss";
import "../../components/pages/salao/menu_area/menu_area.scss";

export const Menu = () => {
  const role = localStorage.getItem("userRole");

  const [allDay, setAllDay] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [allItens, setAllItens] = useState([]);
  const [tab, setTab] = useState("Café da Manhã");
  const [isActive, setActive] = useState({ tab: "breakfast" });

  function handleSelected(e) {
    const button = e.target.textContent;
    const buttonValue = e.currentTarget.value;
    setActive({ ...isActive, tab: buttonValue });
    setTab(button);
  }

  useEffect(() => {
    getProducts().then((list) => {
      setAllItens(list);
      setAllDay(filterList(list, "sub_type", "drinks", "side"));
      setBreakfast(filterList(list, "type", "breakfast"));
    });
  }, []);

  const [value, setValue] = useState({
    tipo: "",
    sabor: "carne",
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
    addItem(e, foundHamburger.id);
    setValue({ ...value, adicionais: null });
  }

  const addItem = (e, targetId) => {
    e.preventDefault();
    const foundItem = cartList.findIndex((item) => item.id === targetId);
    let updatedItemList = [...cartList];
    if (foundItem !== -1) {
      updatedItemList[foundItem].qtd++;
    } else {
      updatedItemList = [
        ...cartList,
        allItens.find((product) => {
          if (product.id === targetId) {
            product.qtd = 1;
            return product;
          }
          return null;
        }),
      ];
    }
    setCartList([...updatedItemList]);
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
    }
    setCartList([...updatedItemList]);
  };

  const deleteItem = (event, index) => {
    event.preventDefault();
    const updatedItemList = [...cartList];
    updatedItemList.splice(index, 1);
    setCartList(updatedItemList);
  };

  const formRef = useRef();
  const handleResetForm = () => {
    formRef.current.reset();
    setCartList([]);
  };

  const [productsResume, setProductsResume] = useState([]);
  useEffect(() => {
    setProductsResume(
      cartList.map((item) => {
        return {
          id: item.id,
          qtd: item.qtd,
        };
      })
    );
  }, [cartList]);

  const handleToggle = (e) => {
    const buttonValue = e.currentTarget.value;

    function type() {
      return (value.tipo === buttonValue) ? false : buttonValue;
    }
    setValue({ ...value, tipo: type() });
    setActive({ ...isActive, hamburger: type() });
  };

  const handleFlavorSelection = (e) => {
    const flavor = e.target.value;
    setValue({ ...value, sabor: flavor });
  }

  const handleExtraSelection = (e) => {
    const extra = e.target.value;
    function active() {
      return value.adicionais === extra ? false : extra;
    }
    setValue({ ...value, adicionais: active() });
  }

  return (
    <>
      {role === "salao" ? (
        <>
          <SideMenu />
          <MenuButtons handleSelected={handleSelected} isActive={isActive.tab} />

          <main className="big-container">
            <MenuArea>
              {tab === "Almoço/Jantar" ? (
                <>
                  <AllDay
                    isActive={value.tipo}
                    onClick={(e) => {
                      handleToggle(e);
                    }}
                  >
                    {value.tipo ? (
                      <Complements
                        isActive={value}
                        onClick={addHamburger}
                        handleFlavor={handleFlavorSelection}
                        handleExtra={handleExtraSelection}
                      />
                    ): <p>astroburger</p>}
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
              handleReset={handleResetForm}
              orderResume={productsResume}
            />
          </main>
        </>
      ) : (
        <Unauthorized />
      )}
    </>
  );
};
