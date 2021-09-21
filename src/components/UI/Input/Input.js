import './Input.scss';

const Input = ({ variant, placeholder, type, name, label, onChange, value, testid }) => {
  const classes = `input ${variant}`
  return (
    <label>
      <input
        className={classes}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        data-testid={testid}>
      </ input>
      {label}
    </label>
  )
}

export default Input;
