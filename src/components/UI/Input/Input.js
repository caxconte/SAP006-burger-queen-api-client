import './Input.scss';

const Input = ({ variant, placeholder, type }) => {
  const classes = `input ${variant}`
  return (
    <input className = {classes} placeholder={placeholder} type={type}></ input>
  )
}

export default Input;
