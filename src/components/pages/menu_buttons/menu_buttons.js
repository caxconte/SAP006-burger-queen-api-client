import Button from "../../UI/button/button";
import "./menu_buttons.scss"

function MenuButtons({ handleButtonTypeClick }) {
  return (
    <nav className="menu-buttons">
        <Button
          variant="menu-buttons-category"
          onClick={() => handleButtonTypeClick}
          value={"Todas as Categorias"}
          type="button"
          className="btn btn-menu-buttons-category"
        >
          Todas as Categorias
        </Button>

        <Button
          variant="menu-buttons-category"
          onClick={() => handleButtonTypeClick}
          value={"breakfast"}
          type="button"
          className="btn btn-menu-buttons-category"
        >
          Café da Manhã
        </Button>

        <Button
          variant="menu-buttons-category"
          onClick={() => handleButtonTypeClick}
          value={"lunch"}
          type="button"
          className="btn btn-menu-buttons-category"
        >
          Almoço/Jantar
        </Button>
    </nav>
  );
}

export default MenuButtons;
