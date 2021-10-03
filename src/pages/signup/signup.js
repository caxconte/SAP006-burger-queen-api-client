import "./signup.scss";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Input from "../../components/UI/input/input";
import Button from "../../components/UI/button/button";
import Modal from "../../components/modal/modal";
import Img from "../../components/UI/image/img";

import { signUp } from "../../services/index";

const validate = (values) => {
  const mailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!values.email || mailFormat.test(values.email) === false) {
    return "Escreva um email válido";
  } else if (!values.password || values.password.length < 6) {
    return "A senha deve ter no mínimo 6 dígitos";
  } else if (values.password !== values.repeatPassword) {
    return "As senhas não conferem";
  } else if (!values.role) {
    return "Escolha o setor";
  }
  return "";
};

function initialStateModal() {
  return { header: "", icon: "", testid: "", children: "", isOpen: false, type:"" };
}

function initialState() {
  return { email: "", password: "", repeatPassword: "", role: "" };
}

export const SignUpPage = () => {
  const history = useHistory();
  const [errorNotice, setError] = useState("");

  const timeOut = (path) => {
    const timer = setTimeout(() => {
      history.push(`/${path}`);
    }, 2000);
    return () => clearTimeout(timer);
  };

  const [modal, setModalValues] = useState(initialStateModal);
  const modalProps = (code, message) => {
    let modalValues;
    if (code !== undefined) {
      modalValues = {
        header: "Erro: " + code,
        children: message,
        icon: "error",
        isOpen: true,
        type: "btn-on"
      }
    } else {
      modalValues = {
        header: "Cadastro realizado com sucesso!",
        icon: "success",
        children: "",
        isOpen: true,
      };
    }
    setModalValues(modalValues);
  };

  const SignUp = (event) => {
    event.preventDefault();
    const invalid = validate(values);
    setError(invalid);

    if (!invalid) {
      signUp(values.email, values.password, values.role)
        .then((response) => {
          if (response.token) {
            modalProps();
            timeOut(response.role);
          } else {
            const code = response.code;
            const message = response.message;
            modalProps(code, message);
          }
        })
        .catch((error) => {
          history.push("/ErrorPage");
        });
    }
  };

  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <section id="signUp" className="Login signUp">
      <Img
        className="Logo"
        width="250px"
        height="250px"
        src="/Logo.png"
        alt="Astro Burger Logo"
      />

      <form id="signup_form">
        <fieldset>
          <div className="form-control">
            <Input
              variant="login"
              placeholder="E-mail"
              type="email"
              name="email"
              onChange={onChange}
            ></Input>
          </div>
          <div className="form-control">
            <Input
              variant="login"
              placeholder="Senha"
              type="password"
              name="password"
              onChange={onChange}
            ></Input>
          </div>
          <div className="form-control">
            <Input
              variant="login"
              placeholder="Repita a Senha"
              type="password"
              name="repeatPassword"
              onChange={onChange}
            ></Input>
          </div>
          <div className="Signup_radio-container">
            <Input
              testid="input-salao"
              type="radio"
              value="salao"
              name="role"
              label="salão"
              onChange={onChange}
            ></Input>
            <Input
              testid="input-cozinha"
              type="radio"
              value="kitchen"
              name="role"
              label="cozinha"
              onChange={onChange}
            ></Input>
          </div>
          <p className="paragraph-error">{errorNotice} &nbsp;</p>
        </fieldset>
        <Button onClick={SignUp} variant="primary" testid="signup-btn">
          cadastrar
        </Button>
      </form>

      <p className="have-account">
        Já possui cadastro? Faça seu {" "}
        <Link to="/" className="do-login">
          LOGIN
        </Link>
        .
      </p>

      <div id="modal">
        <Modal
          open={modal.isOpen}
          onClose={() => setModalValues({ isOpen: false })}
          testid={modal.testid}
          header={modal.header}
          icon={modal.icon}
          children={modal.children}
          type={modal.type}>
        </Modal>
      </div>
    </section>
  );
};
