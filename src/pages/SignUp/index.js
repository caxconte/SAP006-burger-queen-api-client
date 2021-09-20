import './SignUp.scss'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button.js';
import { useState } from 'react';
import { signUp } from '../../services/index'
import { useHistory } from 'react-router-dom';
import Modal from '../../components/Modal/index';
import reactDom from 'react-dom';

export const SignUpPage = () => {
  const history = useHistory();
  const [errorNotice, setError] = useState('');
  const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const ResetForm = () => {
    document.getElementById('signup_form').reset();
    setError('');
  }

  const SignUp = (event) => {
    event.preventDefault()
    if (!values.email || mailFormat.test(values.email) === false) {
      setError('Escreva um email válido')
    } else if (!values.password || values.password.length < 6) {
      setError('A senha deve ter no mínimo 6 dígitos')
    } else if (values.password !== values.repeatPassword) {
      setError('As senhas não conferem')
    } else if (!values.role) {
      setError('Escolha o setor')
    } else {
      signUp(values.email, values.password, values.role)
        .then((response) => {
          if (response.token) {
            reactDom.render(<Modal header='Cadastro realizado com sucesso!' icon='success' />, document.getElementById('modal'));
            ResetForm();
          } else {
            // Respuesta de red OK pero respuesta HTTP no OK;
            const code = response.code;
            const message = response.message
            reactDom.render(<Modal header={'Erro: ' + code} children={message} icon='error' />, document.getElementById('modal'));
            ResetForm();
          }
        })
        .catch((error) => {
          // Hubo un problema con la petición Fetch;
          history.push('/ErrorPage')
          throw Error(error.message);
        })
    }
  }

  function initialState() {
    return { email: '', password: '', repeatPassword: '', role: '' };
  }
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  return (
    <section id="signUp" className="Login signUp">
      <img
        className="Logo"
        width="250px"
        height="250px"
        src="/Logo.png"
        alt="Astro Burger Logo" />

      <form id="signup_form">
        <div className="form-control">
          <Input
            variant="login"
            placeholder="E-mail"
            type="email"
            name="email"
            onChange={onChange}>
          </Input>
        </div>
        <div className="form-control">
          <Input
            variant="login"
            placeholder="Senha"
            type="password"
            name="password"
            onChange={onChange}>
          </Input>
        </div>
        <div className="form-control">
          <Input
            variant="login"
            placeholder="Repita a Senha"
            type="password"
            name="repeatPassword"
            onChange={onChange}>
          </Input>
        </div>
        <div className="Signup_radio-container">
          <Input
            variant=""
            type="radio"
            value="salao"
            name="role"
            label="salão"
            onChange={onChange}>
          </Input>
          <Input
            variant=""
            type="radio"
            value="cozinha"
            name="role"
            label="cozinha"
            onChange={onChange}>
          </Input>
        </div>
        <p className="paragraph-error">{errorNotice} &nbsp;</p>
        <Button
          onClick={SignUp}
          className="btn btn-primary"
          children="cadastrar"
          variant="primary">
        </Button>
      </form>
      <div id="modal"></div>
    </section>
  )
}