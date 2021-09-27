import reactDom from "react-dom";
import Button from "../UI/button/button";
import "./modal.scss";

const Modal = ({ header, children, icon }) => {
  let iconClass = "";
  icon === "error"
    ? (iconClass = "far fa-times-circle")
    : (iconClass = "far fa-check-circle");

  const CloseModal = () => {
    reactDom.render("", document.getElementById("modal"));
  };

  return (
    <div>
      <div className="modal">
        <i className={iconClass}></i>
        <div>
          <p className="msg">{header}</p>
          <p className="modal-paragraph">{children}</p>
        </div>
        <Button onClick={CloseModal} children="ok"></Button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default Modal;
