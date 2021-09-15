import './style.scss';

const Button = (props) => {
  const className = `button ${props.variant}`
  console.log(className);
  return (
    <button className={className}>
      {props.children}
    </button>
  )
}

export default Button;