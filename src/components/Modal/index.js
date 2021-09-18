import reactDom from 'react-dom';
import './Modal.css'

const Modal = ({ header, children, icon }) => {
  let iconClass = '';
  icon === 'error' ? iconClass = 'far fa-times-circle' : iconClass = 'far fa-check-circle';

  const CloseModal = () => {
    reactDom.render('', document.getElementById('modal'));
  }

  return (
    <div>
      <div className="modal">
        <i className={iconClass}></i>
        <div>
          <p className="msg">{header}</p>
          <p>{children}</p>
        </div>
        <button className="close-button" onClick={CloseModal}>ok</button>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Modal;
