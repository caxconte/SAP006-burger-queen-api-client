import { useState } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/UI/input/input";
import Button from "../../components/UI/button/button";
import Modal from "../../components/modal/modal";
import Img from "../../components/UI/image/img";

import { loginWithEmailAndPassword } from "../../services/index";

import "./login.scss";

const validate = (values) => {
  const mailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!values.email || mailFormat.test(values.email) === false) {
    return "Escreva um email válido";
  } else if (!values.password || values.password.length < 6) {
    return "E-mail ou senha digitados incorretamente...";
  }
  return "";
}

function LoginPage() {
  const history = useHistory();
  const [errorNotice, setError] = useState("");

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

  function initialStateModal() {
    return { header: "", icon: "", children: "", isOpen: false, type: "" };
  }

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
        header: "Login efetuado com sucesso!",
        icon: "success",
        children: "Redirecionando...",
        isOpen: true
      }
    }
    setModalValues(modalValues);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const invalid = validate(values);
    setError(invalid);

    if (!invalid) {
      loginWithEmailAndPassword(values.email, values.password)
        .then((user) => {
          const token = user.token;
          const role = user.role;
          
          if (token !== undefined) {
            localStorage.setItem("userToken", token);
            localStorage.setItem("userRole", role);
            localStorage.setItem("userId", user.id);
            modalProps();
            navigateTo(`/${role}`);
          } else {
            const code = user.code;
            const message = user.message;
            modalProps(code, message);
          }
        })
        .catch((error) => {
          history.push("/ErrorPage");
        });
    }
  };

  return (
    <section id="Login" className="Login">
      <Img
        className="logo"
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
          testid="login-btn"
        >
          Acessar
        </Button>
      </form>
      <a href="/signup" className="cadastre">
        Cadastre-se!
      </a>
      <div id="modal">
        <Modal
          open={modal.isOpen}
          onClose={() => setModalValues({ isOpen: false })}
          header={modal.header}
          icon={modal.icon}
          children={modal.children}
          type={modal.type}
        />
      </div>
    </section>
  );
};

export default LoginPage;