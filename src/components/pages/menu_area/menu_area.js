import "./menu_area.scss"

function MenuArea({ children }) {
  return (
    <section id="menu" className="menu-list">
      {children}
    </section>
  )
}

export default MenuArea;