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
        <input
          id="email"
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="E-mail" />
      </div>
      <div className="Login_form-control">
        <input 
          id="password"
          type="password"
          name="password"
          onChange={onChange}
          value={values.password}
          placeholder="Senha" />
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