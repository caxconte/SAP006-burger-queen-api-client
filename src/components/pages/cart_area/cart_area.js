import { useState, useEffect } from "react";
import { postOrders } from "../../../services/data";
import { useHistory } from "react-router-dom";
import CartClient from "../cart_client/cart_client";
import CartItem from "../cart_product/product_cart";
import BtnSection from "../cart_product/cart_buttons";
import Modal from "../../modal/modal";

import "./cart_area.scss";

function CartArea({ products, onClick, addItem, reduceItem, formRef, handleReset, orderResume }) {
  const history = useHistory();
  function initialStateModal() {
    return { header: "", icon: "", children: "", isOpen: false, type: "" };
  }

  const [modal, setModalValues] = useState(initialStateModal);
  const modalProps = (code, message) => {
    let modalValues;
    if (code !== undefined) {
      modalValues = {
        header: "Erro: " + code,
        children: message,
        icon: "error",
        isOpen: true,
        type: "btn-on"
      }
    } else {
      modalValues = {
        header: "Pedido efetuado com sucesso!",
        icon: "success",
        children: "",
        isOpen: true,
        type: "btn-on"
      }
    }
    setModalValues(modalValues);
  }

  const initialOrderState = {
    client: "anônimo",
    table: "1",
  }
  const [order, setOrder] = useState(initialOrderState);

  function handleClientName(e) {
    setOrder({ ...order, client: e.target.value });
  }

  function handleClientTable(e) {
    setOrder({ ...order, table: e.target.value });
  }

  function resetOrder() {
    handleReset();
    setOrder(initialOrderState);
  };

  function handleProductsResume(e) {
    postOrders(order, productsResume)
      .then((response) => {
        console.log("resposta ", response);
        if (response.code) {
          const code = response.code;
          const message = response.message;
          modalProps(code, message);
          resetOrder();
        } else {
          modalProps();
        }
      })
      .catch(() => {
        history.push("/ErrorPage");
      });
  }

  const [productsResume, setProductsResume] = useState([]);
  useEffect(() => {
    setProductsResume(...[orderResume]);
  }, [orderResume]);

  // useEffect(() => {
  //   console.log("order", order)
  //   console.log("productsResume", productsResume)
  // })

  return (
    <section className="cart-area">
      <CartClient
        value={order}
        handleClientName={handleClientName}
        handleClientTable={handleClientTable}
        formRef={formRef}
      />
      <CartItem
        itemList={products}
        onClick={onClick}
        addItem={addItem}
        reduceItem={reduceItem}
      />

      <BtnSection
        confirm={handleProductsResume}
        cancel={resetOrder} />
      <Modal
        open={modal.isOpen}
        onClose={() => setModalValues({ isOpen: false })}
        header={modal.header}
        icon={modal.icon}
        children={modal.children}
        type={modal.type}
      />
    </section >
  )
}
export default CartArea;
