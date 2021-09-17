import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Input from '../../components/UI/Input/Input.js'
import Button from '../../components/UI/Button.js';

import { loginWithEmailAndPassword } from '../../services/index';

import './Login.scss';

export const Login = () => {
  const [values, setValues] = useState({ 
    email: '',
    password: ''
  });

  const history = useHistory();
  function navigateTo(path) {
    history.push(path);
  }

  function onChange(event) {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  function onSubmit(event) {
    event.preventDefault()
    return (
      loginWithEmailAndPassword(values.email, values.password)
        .then(response => {
          response.json()
            .then(user => {
              const token = user.token;
              console.log(token);
              const role = user.role;
    
              localStorage.setItem('userToken', token);
    
              if (token !== null && role === 'salao'){
                navigateTo('/salao');
              } else if (token !== null && role === 'cozinha'){
                navigateTo('/cozinha');
              } else {
                alert('Usuário não cadastrado')
              }
          })
        })
        .catch(() => console.log('deu ruim'))
    )
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
        <Button
        variant="primary"
          onClick={(e) => onSubmit(e, values.email, values.password)}
          type="submit"
          className="btn btn-primary">
          Acessar
        </Button>
      </form>
    </section>
  )
}
