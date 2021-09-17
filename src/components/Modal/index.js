import './index.css'

const Modal = ({children, childrenTwo, icon}) => {
  let iconClass='';
  icon=== 'error'? iconClass="far fa-times-circle" : iconClass="far fa-check-circle"

  return (
    <div>
      <div className="modal">
        <i className={iconClass}></i>
        <p className="msg">{children}</p>
        <p className="msg">{childrenTwo}</p>
        <p>Você será redirecionado em <br /> alguns instantes...</p>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Modal;
