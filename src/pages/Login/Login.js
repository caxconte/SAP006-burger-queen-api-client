import Input from '../../components/UI/Input/Input'
import { useState } from 'react';
import './Login.scss';
import Button from '../../components/UI/Button'

function initialState() {
  return { email: '', password: '' };
}

export const Login = () => {
  const [ values, setValues ] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({ 
      ...values,
      [name]: value,
     })
  }

  return (
  <section id="Login" className="Login">
    <img
      className="Logo"
      width="250px"
      height="250px"
      src="/Logo.png"
      alt="Astro Burger Logo" />
    
    <form>
      <div className="Login_form-control">
        <Input variant="login" placeholder="E-mail" type="email" onChange={onChange}></Input>
      </div>
      <div className="Login_form-control">
        <Input variant="login" placeholder="Senha" type="password" onChange={onChange}></Input>
      </div>
      <p className="Login-error">&nbsp;</p>
      {/* MEU BOTÃO AQUI */}

      <Button
        variant="primary">
      ACESSAR
      </Button>
      
      {/* <button
        type="submit"
        className="btn btn-primary">
        Acessar
      </button> */}
    </form>
  </section>
  )
}