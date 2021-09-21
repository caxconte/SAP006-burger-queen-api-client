import './style.scss';

const Button = ({ variant, children, onClick, testid }) => {
  const className = `button ${variant}`
  return (
    <button className={className} onClick={onClick} data-testid={testid}>
      {children}
    </button>
  )
}

export default Button;