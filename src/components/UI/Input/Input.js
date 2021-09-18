import './Input.css';

const Input = ({ variant, placeholder, type, name, label, onChange, value }) => {
  const classes = `input ${variant}`
  return (
    <label>
      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}>
      </ input>
      {label}
    </label>
  )
}

export default Input;
