import Button from "../UI/Button/Button";
import Img from "../UI/image/img";
import "./sideMenu.scss";
import { AiFillEdit } from 'react-icons/ai';
import { FaClipboardList, FaSignOutAlt } from 'react-icons/fa';

const SideMenu = () => {
  const newEntry = () => {
    console.log('novo pedido')
  }

  return (
    <section className='sideMenu-container'>
      <Img
        className="Logo"
        width="100px"
        height="100px"
        src="/Logo.png"
        alt="Astro Burger Logo" />
      <div className='menuButtons-container'>
        <Button
          variant='secondary'
          onClick={newEntry}
          icon={<AiFillEdit />}
          children='novo pedido'></Button>
        <Button
          variant='secondary'
          onClick={newEntry}
          icon={<FaClipboardList />}
          children='pedidos'></Button>
        <Button
          variant='secondary'
          onClick={newEntry}
          span="material-icons"
          icon='table_restaurant'
          children='mesas' ></Button>
        <Button
          variant='secondary'
          onClick={newEntry}
          span="material-icons"
          icon='menu_book'
          children='menu'></Button>
      </div >

        <Button
          variant='signout-btn'
          span='signout-btnContainer'
          onClick={newEntry}
          icon={<FaSignOutAlt />} ></Button>
    </section>
  )
}

export default SideMenu;