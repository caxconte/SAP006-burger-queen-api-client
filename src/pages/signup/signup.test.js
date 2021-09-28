import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { Routes } from "../../Routes";
import { MemoryRouter } from "react-router-dom";
import { SignUpPage } from "./signup";
import * as services from "../../services/index.js";

jest.mock("../../services/index.js");

describe("SignUpPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render success modal", async () => {
    const response = { token: "testtoken" }
    services.signUp.mockResolvedValueOnce(response);

    // Render page
    render(<SignUpPage />)

    // Find the elements
    const emailInput = screen.queryByPlaceholderText("E-mail");
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const repeatPasswordInput = screen.queryByPlaceholderText("Repita a Senha");
    const roleCozinhaInput = screen.queryByTestId("input-cozinha");
    const buttonSubmit = screen.queryByTestId("signup-btn");
    const modalContainer = screen.queryByTestId("modal");
    expect(modalContainer).not.toBeInTheDocument();

    // act
    const email = "test@test.com";
    const password = "testtest";

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.type(repeatPasswordInput, password);
    userEvent.click(roleCozinhaInput);
    userEvent.click(buttonSubmit);

    expect(emailInput.value).toBe(email);
    expect(passwordInput.value).toBe(password);
    expect(repeatPasswordInput.value).toBe(password);
    expect(services.signUp).toHaveBeenCalledTimes(1);
    expect(services.signUp).toHaveBeenCalledWith(email, password, "cozinha");
    await waitFor(() => {
      const elem = screen.queryByTestId("modal");
      expect(elem).toBeInTheDocument();
    });
  })

  it("should render error modal", async () => {
    const response = { code: "test", message: "test" }
    services.signUp.mockResolvedValueOnce(response);

    render(<SignUpPage />)

    const emailInput = screen.queryByPlaceholderText("E-mail");
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const repeatPasswordInput = screen.queryByPlaceholderText("Repita a Senha");
    const roleCozinhaInput = screen.queryByTestId("input-cozinha");
    const buttonSubmit = screen.queryByTestId("signup-btn");
    const modalContainer = screen.queryByTestId("modal");
    expect(modalContainer).not.toBeInTheDocument();

    const email = "test@test.com";
    const password = "testtest";

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.type(repeatPasswordInput, password);
    userEvent.click(roleCozinhaInput);
    userEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      const elem = screen.queryByTestId("modal");
      expect(elem).toBeInTheDocument();
    });
  })

  it("should render ErrorPage when error is catched", async () => {
    const response = { code: "error", message: "error" };
    services.signUp.mockRejectedValueOnce(Error(response));

    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <Routes />
      </MemoryRouter>
    );

    const emailInput = screen.queryByPlaceholderText('E-mail');
    const passwordInput = screen.queryByPlaceholderText('Senha');
    const repeatPasswordInput = screen.queryByPlaceholderText('Repita a Senha');
    const roleCozinhaInput = screen.queryByTestId('input-cozinha');
    const buttonSubmit = screen.queryByTestId('signup-btn');
    const modalContainer = screen.queryByTestId('modalSuccess');
    expect(modalContainer).not.toBeInTheDocument();

    const email = 'test@test.com';
    const password = "testtest";

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.type(repeatPasswordInput, password);
    userEvent.click(roleCozinhaInput);
    userEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      const elem = screen.getByText('Error');
      expect(elem).toBeInTheDocument();
    });
  })
    
})

describe("Input Email", () => {
  it("should show 'Escreva um email válido' to user when email input is empty", async () => {
    render(<SignUpPage />);

    const emailInput = screen.queryByPlaceholderText("E-mail");
    const buttonSubmit = screen.queryByTestId("signup-btn");

    userEvent.type(emailInput, { target: { value: "" } });
    userEvent.click(buttonSubmit);

    expect(emailInput.value).toBe("");
    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = screen.getByText("Escreva um email válido");
    expect(elem).toBeInTheDocument();
  });
})

describe("Input Password", () => {
  it("should show 'A senha deve ter no mínimo 6 dígitos' to user when password input is empty", async () => {
    render(<SignUpPage />);

    const emailInput = screen.queryByPlaceholderText("E-mail");
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const buttonSubmit = screen.queryByTestId("signup-btn");

    userEvent.type(emailInput, "test@test.com");
    userEvent.type(passwordInput, "");
    userEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = screen.getByText("A senha deve ter no mínimo 6 dígitos");
    expect(elem).toBeInTheDocument();
  });
});

describe("Input Repeat Password", () => {
  it("should show 'As senhas não conferem' to user when password input and repeat password input are different", async () => {
    render(<SignUpPage />);

    const emailInput = screen.queryByPlaceholderText("E-mail");
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const repeatPasswordInput = screen.queryByPlaceholderText("Repita a Senha");
    const buttonSubmit = screen.queryByTestId("signup-btn");

    userEvent.type(emailInput, "test@test.com");
    userEvent.type(passwordInput, "test1234");
    userEvent.type(repeatPasswordInput, "differentPassword");
    userEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = screen.getByText("As senhas não conferem");
    expect(elem).toBeInTheDocument();
  });
});

describe("Inputs type Radio", () => {
  it("should show 'Escolha o setor' to user when one of the inputs radio is not selected", async () => {
    render(<SignUpPage />);

    const emailInput = screen.queryByPlaceholderText("E-mail");
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const repeatPasswordInput = screen.queryByPlaceholderText("Repita a Senha");
    const buttonSubmit = screen.queryByTestId("signup-btn");

    userEvent.type(emailInput, "test@test.com");
    userEvent.type(passwordInput, "test1234");
    userEvent.type(repeatPasswordInput, "test1234");
    userEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = screen.getByText("Escolha o setor");
    expect(elem).toBeInTheDocument();
  });
});