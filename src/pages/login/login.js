import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import reactDom from "react-dom";

import Input from "../../components/UI/input/input";
import Button from "../../components/UI/button/button";
import Modal from "../../components/modal/index";

import { loginWithEmailAndPassword } from "../../services/index";

import "./login.scss";

export const LoginPage = () => {
  const history = useHistory();
  const [errorNotice, setError] = useState("");
  const mailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const navigateTo = (paths) => {
    const timer = setTimeout(() => {
      history.push(paths);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!values.email || mailFormat.test(values.email) === false) {
      setError("Escreva um email válido");
    } else if (!values.password || values.password.length < 6) {
      setError("E-mail ou senha digitados incorretamente...");
    } else {
      loginWithEmailAndPassword(values.email, values.password)
        .then((user) => {
          const token = user.token;
          const role = user.role;

          localStorage.setItem("userToken", token);

          if (token !== null && role === "salao") {
            reactDom.render(
              <Modal
                header="Login efetuado com sucesso!"
                icon="success"
                children="Você será redirecionado em até 3 segundos..."
              />,
              document.getElementById("modal")
            );
            navigateTo("/salao");
          } else if (token !== null && role === "cozinha") {
            reactDom.render(
              <Modal
                header="Login efetuado com sucesso!"
                icon="success"
                children="Você será redirecionado em até 3 segundos..."
              />,
              document.getElementById("modal")
            );
            navigateTo("/cozinha");
          } else {
            const code = user.code;
            const message = user.message;
            reactDom.render(
              <Modal
                header={"Erro: " + code}
                children={message}
                icon="error"
              />,
              document.getElementById("modal")
            );
          }
        })
        .catch((error) => {
          history.push("/ErrorPage");
          throw Error(error.message);
        });
    }
  };

  return (
    <section id="Login" className="Login">
      <img
        className="Logo"
        width="250px"
        height="250px"
        src="/Logo.png"
        alt="Astro Burger Logo"
      />

      <form id="login_form">
        <div className="form-control">
          <Input
            variant="login"
            placeholder="E-mail"
            type="email"
            value={values.email}
            name="email"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-control">
          <Input
            variant="login"
            placeholder="Senha"
            type="password"
            value={values.password}
            name="password"
            onChange={(e) => onChange(e)}
          />
        </div>
        <p className="paragraph-error">{errorNotice} &nbsp;</p>
        <Button
          variant="primary"
          onClick={(e) => onSubmit(e, values.email, values.password)}
          type="submit"
          className="btn btn-primary"
          role="button"
        >
          Acessar
        </Button>
      </form>
      <Link to="/signup" className="cadastre">
        Cadastre-se!
      </Link>
      <div id="modal"></div>
    </section>
  );
};
