import { useState, useEffect } from "react";
import { postOrders } from "../../../services/data";
import { useHistory } from "react-router-dom";
import CartClient from "../cart_client/cart_client";
import CartItem from "../cart_product/product_cart";
import BtnSection from "../cart_product/cart_buttons";
import Modal from "../../modal/modal";

import "./cart_area.scss";

function CartArea({ products, onClick, addItem, reduceItem, formRef, handleCancel, orderResume }) {
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

  const [order, setOrder] = useState({
    client: "anônimo",
    table: "1",
    products: [],
  });

  function handleClientName(e) {
    setOrder({ ...order, client: e.target.value });
  }

  function handleClientTable(e) {
    setOrder({ ...order, table: e.target.value });
  }

  function handleProductsResume(e) {
    postOrders(order)
      .then((response) => {
        console.log("resposta ", response);
        if (response.code) {
          const code = response.code;
          const message = response.message;
          modalProps(code, message);
        } else {
          modalProps();
        }
      })
      .catch(() => {
        history.push("/ErrorPage");
      });
  }

  useEffect(()=>{
    setOrder({ ...order, products: [...orderResume] }); 
  },[orderResume]);

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

      <BtnSection confirm={handleProductsResume} cancel={handleCancel} />
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
