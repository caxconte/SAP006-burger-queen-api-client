import './Input.css';

const Input = ({ variant, placeholder, type, name, label, onClick, onChange }) => {
  const classes = `input ${variant}`
  return (
    <label>
      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        name={name}
        onClick={onClick}
        onChange={onChange}>
      </ input>
      {label}
    </label>
  )
}

export default Input;
