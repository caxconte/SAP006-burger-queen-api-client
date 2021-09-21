import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Routes } from '../../Routes'
import findRenderedComponentWithType from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { SignUpPage } from './index.js';
import * as services from '../../services/index.js';
// import { signUp } from '../../services/index.js';

jest.mock('../../services/index.js');

describe("SignUpPage", () => {
  let root;

  beforeEach(() => {
    jest.clearAllMocks();
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.removeChild(root);
    root = null;
  });

  it("should render success modal", async () => {
    const response = { token: "testtoken" }
    services.signUp = jest.fn(() => { return Promise.resolve(response) })

    // Render page
    const { queryByPlaceholderText, queryByTestId } = render(<SignUpPage />, root)

    // Find the elements
    const emailInput = queryByPlaceholderText('E-mail');
    const passwordInput = queryByPlaceholderText('Senha');
    const repeatPasswordInput = queryByPlaceholderText('Repita a Senha');
    const roleCozinhaInput = queryByTestId('input-cozinha');
    const buttonSubmit = queryByTestId('signup-btn');
    const modalContainer = screen.queryByTestId('modalSuccess');
    expect(modalContainer).not.toBeInTheDocument();

    // act
    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testtest" } });
    fireEvent.change(repeatPasswordInput, { target: { value: "testtest" } });
    fireEvent.click(roleCozinhaInput);
    fireEvent.click(buttonSubmit);

    expect(emailInput.value).toBe('test@test.com');
    expect(services.signUp).toHaveBeenCalledTimes(1);
    expect(services.signUp).toHaveBeenCalledWith('test@test.com', 'testtest', 'cozinha');
    await waitFor(() => {
      const elem = queryByTestId('modalSuccess');
      expect(elem).toBeInTheDocument();
    });
  })

  it("should render error modal", async () => {
    const response = { code: "test", message: "test" }
    services.signUp = jest.fn(() => { return Promise.resolve(response) })

    const { queryByPlaceholderText, queryByTestId } = render(<SignUpPage />, root)

    const emailInput = queryByPlaceholderText('E-mail');
    const passwordInput = queryByPlaceholderText('Senha');
    const repeatPasswordInput = queryByPlaceholderText('Repita a Senha');
    const roleCozinhaInput = queryByTestId('input-cozinha');
    const buttonSubmit = queryByTestId('signup-btn');

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testtest" } });
    fireEvent.change(repeatPasswordInput, { target: { value: "testtest" } });
    fireEvent.click(roleCozinhaInput);
    fireEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      const elem = queryByTestId('modalError');
      expect(elem).toBeInTheDocument();
    });
  })

  it("should throw Error when error is catched", async () => {
    const response = { code: "error", message: "error" };
    services.signUp = jest.fn(() => { return Promise.reject(Error(response)) });

    const { queryByPlaceholderText, queryByTestId } = render(
      <MemoryRouter initialEntries={['/signup']}>
        <Routes />
      </MemoryRouter>,
      root
    );

    const emailInput = queryByPlaceholderText('E-mail');
    const passwordInput = queryByPlaceholderText('Senha');
    const repeatPasswordInput = queryByPlaceholderText('Repita a Senha');
    const roleCozinhaInput = queryByTestId('input-cozinha');
    const buttonSubmit = queryByTestId('signup-btn');

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "testtest" } });
    fireEvent.change(repeatPasswordInput, { target: { value: "testtest" } });
    fireEvent.click(roleCozinhaInput);
    fireEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      const elem = screen.getByText('Error');
      expect(elem).toBeInTheDocument();
    });
    await expect(services.signUp).rejects.toThrow(Error);
  })

})

describe("Input Email", () => {
  it("should show 'Escreva um email válido' to user when email input is empty", async () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    const { queryByPlaceholderText, queryByTestId, getByText } = render(<SignUpPage />, root);

    const emailInput = queryByPlaceholderText('E-mail');
    const buttonSubmit = queryByTestId('signup-btn');

    fireEvent.change(emailInput, { target: { value: "" } });;
    fireEvent.click(buttonSubmit);

    expect(emailInput.value).toBe('');
    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = getByText('Escreva um email válido');
    expect(elem).toBeInTheDocument();
  });
})

describe("Input Password", () => {
  it("should show 'A senha deve ter no mínimo 6 dígitos' to user when password input is empty", async () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    const { queryByPlaceholderText, queryByTestId, getByText } = render(<SignUpPage />, root);

    const emailInput = queryByPlaceholderText('E-mail');
    const passwordInput = queryByPlaceholderText('Senha');
    const buttonSubmit = queryByTestId('signup-btn');

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "" } });
    fireEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = getByText('A senha deve ter no mínimo 6 dígitos');
    expect(elem).toBeInTheDocument();
  });
});

describe("Input Repeat Password", () => {
  it("should show 'As senhas não conferem' to user when password input and repeat password input are different", async () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    const { queryByPlaceholderText, queryByTestId, getByText } = render(<SignUpPage />, root);

    const emailInput = queryByPlaceholderText('E-mail');
    const passwordInput = queryByPlaceholderText('Senha');
    const repeatPasswordInput = queryByPlaceholderText('Repita a Senha');
    const buttonSubmit = queryByTestId('signup-btn');

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "test1234" } });
    fireEvent.change(repeatPasswordInput, { target: { value: "differentPassword" } });
    fireEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = getByText('As senhas não conferem');
    expect(elem).toBeInTheDocument();
  });
});

describe("Inputs type Radio", () => {
  let root;

  beforeEach(() => {
    jest.clearAllMocks();
    root = document.createElement('div');
    document.body.appendChild(root);
  });

  afterEach(() => {
    document.body.removeChild(root);
    root = null;
  });

  it("should show 'Escolha o setor' to user when one of the inputs radio is not selected", async () => {
    const { queryByPlaceholderText, queryByTestId, getByText } = render(<SignUpPage />, root);

    const emailInput = queryByPlaceholderText('E-mail');
    const passwordInput = queryByPlaceholderText('Senha');
    const repeatPasswordInput = queryByPlaceholderText('Repita a Senha');
    const buttonSubmit = queryByTestId('signup-btn');

    fireEvent.change(emailInput, { target: { value: "test@test.com" } });
    fireEvent.change(passwordInput, { target: { value: "test1234" } });
    fireEvent.change(repeatPasswordInput, { target: { value: "test1234" } });
    fireEvent.click(buttonSubmit);

    expect(services.signUp).toHaveBeenCalledTimes(0);
    const elem = getByText('Escolha o setor');
    expect(elem).toBeInTheDocument();
  });
});