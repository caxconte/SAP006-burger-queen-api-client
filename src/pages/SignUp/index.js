import './index.css'
import Input from '../../components/UI/Input/Input'
import { useState } from 'react';
import { signUp } from '../../services/index'
import { useHistory } from 'react-router-dom';
import Modal from '../../components/Modal';

export const SignUpPage = () => {

  const [errorNotice, setError] = useState('');
  const history = useHistory();
  const mailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const [modalContainer, setModal] = useState('');

  const SignUp = (event) => {
    event.preventDefault()
    if (values.email === '' || mailFormat.test(values.email) === false) {
      setError('Escreva um email válido')
    } else if (values.password === '' || values.password.length < 6) {
      setError('A senha deve ter no mínimo 6 dígitos')
    } else if (values.password !== values.repeatPassword) {
      setError('As senhas não conferem')
    } else if (values.role === '') {
      setError('Escolha o setor')
    } else {
      signUp(values.email, values.password, values.role)
        .then((response) => {
          if (response.ok) {
            setModal(<Modal children= 'Cadastro realizado com sucesso!' icon='success'></Modal>);
            // history.push('/', { from: 'HomePage' })
          } else {
            console.log('Respuesta de red OK pero respuesta HTTP no OK ');
            response.json()
            .then((text)=>{
              console.log(text)
              const code = text.code;
              const message = text.message
              setModal(<Modal children={'Erro: '+ code} childrenTwo={message} icon='error'></Modal>);
            })
          }
        })
        .catch((error) => console.log('Hubo un problema con la petición Fetch:' + error.message))
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

      <form>
        <div className="Login_form-control">
          <Input
            variant="login"
            placeholder="E-mail"
            type="email"
            value={values.email}
            name="email"
            onChange={onChange}></Input>
        </div>
        <div className="Login_form-control">
          <Input
            variant="login"
            placeholder="Senha"
            type="password"
            value={values.password}
            name="password"
            onChange={onChange}></Input>
        </div>
        <div className="Login_form-control">
          <Input
            variant="login"
            placeholder="Repita a Senha"
            type="password"
            value={values.repeatPassword}
            name="repeatPassword"
            onChange={onChange}></Input>
        </div>
        <div className="Signup_radio-container">
          <Input
            variant=""
            type="radio"
            value="salão"
            name="role"
            label="salão"
            onClick={onChange}
          ></Input>
          <Input
            variant=""
            type="radio"
            value="cozinha"
            name="role"
            label="cozinha"
            onClick={onChange}
          ></Input>
        </div>
        <p className="SignUp-error">{errorNotice} &nbsp;</p>
        <button
          onClick={(e) => SignUp(e)}
          type="submit"
          className="btn btn-primary">
          Cadastrar
        </button>
      </form>
      <div id="modal">{modalContainer}</div>
    </section>
  )
}