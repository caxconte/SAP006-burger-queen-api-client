import './Input.scss';

const Input = ({ variant, placeholder, type, name, onChange }) => {
  const classes = `input ${variant}`
  return (
    <input
      className={classes}
      placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}>
    </ input>
  )
}

export default Input;
