import './style.scss';

const Button = ({ variant, children, onClick }) => {
  const className = `button ${variant}`
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button;