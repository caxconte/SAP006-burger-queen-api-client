import Button from "../../../UI/button/button";
import "./menu_buttons.scss"

function MenuButtons({ handleSelected, isActive }) {

  return (
    <nav className="menu-buttons">
        <Button
          variant="menu-buttons-category"
          onClick={handleSelected}
          value={"breakfast"}
          type="button"
          id={"breakfast"}
          className="btn btn-menu-buttons-category"
          active={isActive}
        >
          Café da Manhã
        </Button>

        <Button
          variant="menu-buttons-category"
          onClick={handleSelected}
          value={"lunch"}
          type="button"
          id={"all-day"}
          className="btn btn-menu-buttons-category"
          active={isActive}
        >
          Almoço/Jantar
        </Button>
    </nav>
  );
}

export default MenuButtons;
