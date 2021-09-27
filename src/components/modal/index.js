import { createPortal } from 'react-dom';
import { FaRegTimesCircle, FaRegCheckCircle } from 'react-icons/fa';
import Button from '../UI/Button/Button';
import Overlay from '../UI/overlay/overlay';
import './modal.scss'

const Modal = ({ open, children, onClose, header, icon, testid }) => {
  if (!open) return null;

  let IconClass, iconStyle = '';
  icon === 'error' ? Error() : Success();

  function Error() {
    IconClass = <FaRegTimesCircle />
    iconStyle = 'times-circle';
  }

  function Success() {
    IconClass = <FaRegCheckCircle />
    iconStyle = 'check-circle'
  }

  const root = document.body;

  const ModalTemplate = (
    <div data-testid={testid}>
      <div className="modal">
        <span className={iconStyle}>{IconClass}</span>
        <div>
          <p className="msg">{header}</p>
          <p>{children}</p>
        </div>
        <Button
          variant="primary"
          onClick={onClose}
          children='ok'>
        </Button>
      </div>
      <Overlay></Overlay>
    </div>
  )
  return createPortal(ModalTemplate, root);
}

export default Modal;