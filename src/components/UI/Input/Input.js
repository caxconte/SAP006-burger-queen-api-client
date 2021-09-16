import './Input.css';

const Input = ({ variant, placeholder, type, name }) => {
  const classes = `input ${variant}`
  return (
    <input
      className={classes}
      placeholder={placeholder}
      type={type}
      name={name}>
    </ input>
  )
}

export default Input;
