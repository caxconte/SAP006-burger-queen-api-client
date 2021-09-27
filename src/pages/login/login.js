import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Input from "../../components/UI/input/input";
import Button from "../../components/UI/button/button";
import Modal from "../../components/modal/modal";
import Img from "../../components/UI/image/img";

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

  function initialStateModal() {
    return { header: "", icon: "", children: "", isOpen: false };
  }

  const [modal, setModalValues] = useState(initialStateModal);
  const ModalProps = (code, message) => {
    let modalValues;
    if (code !== undefined) {
      modalValues = {
        header: "Erro: " + code,
        children: message,
        icon: "error",
        isOpen: true
      }
    } else {
      modalValues = {
        header: "Login efetuado com sucesso!",
        icon: "success",
        children: "Você será redirecionado em até 3 segundos...",
        isOpen: true
      }
    }
    setModalValues(modalValues);
  }

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

          if (token !== undefined) {
            console.log(token)
            ModalProps()
            navigateTo(`/${role}`);
          } else {
            const code = user.code;
            const message = user.message;
            ModalProps(code, message);
          }
        })
        .catch((error) => {
          history.push("/ErrorPage");
          // throw Error(error.message);
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
        >
          Acessar
        </Button>
      </form>
      <Link to="/signup" className="cadastre">
        Cadastre-se!
      </Link>
      <div id="modal">
        <Modal
          open={modal.isOpen}
          onClose={() => setModalValues({ isOpen:false })}
          header={modal.header}
          icon={modal.icon}
          children={modal.children}
        />
      </div>
    </section>
  );
};
