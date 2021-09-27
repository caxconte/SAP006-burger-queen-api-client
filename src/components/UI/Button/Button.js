import './button.scss';

const Button = ({ variant, children, onClick, testid, icon, span, spanIcon }) => {
  const className = `button ${variant}`
  return (
    <button className={className} onClick={onClick} data-testid={testid}>
      <span className={span}>{icon}</span>
      {children}
    </button>
  )
}

export default Button;