import Input from '../../components/UI/Input/Input'
import { useState } from 'react';
import './Login.scss';
import { signInWithEmailAndPassword } from '../../services/index'

const SignIn = (event, email, password) => {
  event.preventDefault()
  return (
    signInWithEmailAndPassword(email, password)
      .then(() => console.log('logou'))
      .catch(() => console.log('deu ruim'))
  )
}

function initialState() {
  return { email: '', password: '' };
}

export const Login = () => {
  const [values, setValues] = useState(initialState);

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
          <Input
            variant="login"
            placeholder="E-mail"
            type="email"
            value={values.email}
            name="email"
            onChange={(e) => onChange(e)}></Input>
        </div>
        <div className="Login_form-control">
          <Input
            variant="login"
            placeholder="Senha"
            type="password"
            value={values.password}
            name="password"
            onChange={(e) => onChange(e)}></Input>
        </div>
        <p className="Login-error">&nbsp;</p>
        <button
          onClick={(e) => SignIn(e, values.email, values.password)}
          type="submit"
          className="btn btn-primary">
          Acessar
        </button>
      </form>
    </section>
  )
}