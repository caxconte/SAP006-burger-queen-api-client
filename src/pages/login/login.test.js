import LoginPage from "./login";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as services from "../../services/index.js";

jest.mock("../../services/index.js");

describe("LoginPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render success modal", async () => {
    const response = { userToken: "tes ttoken" };
    services.loginWithEmailAndPassword.mockResolvedValueOnce(response);

    // Render page
    render(<LoginPage />);

    // Find the elements
    const emailInput = screen.queryByPlaceholderText("E-mail");
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const buttonLogin = screen.queryByTestId("login-btn");
    const modalContainer = screen.queryByTestId("modal");
    expect(modalContainer).not.toBeInTheDocument();

    // act
    const email = "caxconte@gmail.com";
    const password = "123456";

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(buttonLogin);

    expect(emailInput.value).toBe(email);
    expect(passwordInput.value).toBe(password);
    expect(services.loginWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(services.loginWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    );

    await waitFor(() => {
      const elem = screen.queryByTestId("modal");
      expect(elem).toBeInTheDocument();
    });
  });

  it("should show 'Escreva um email válido' to user when email input is empty", async () => {
    render(<LoginPage />);

    // Find the elements
    const emailInput = screen.queryByPlaceholderText("E-mail");
    const buttonLogin = screen.queryByTestId("login-btn");

    userEvent.type(emailInput, { target: { value: "" } });
    userEvent.click(buttonLogin);

    expect(emailInput.value).toBe("");
    expect(services.loginWithEmailAndPassword).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const elem = screen.getByText("Escreva um email válido");
      expect(elem).toBeInTheDocument();
    });
  });

  it("should show 'E-mail ou senha digitados incorretamente...' to user when password input is empty or wrong", async () => {
    render(<LoginPage />);

    // Find the elements
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const buttonLogin = screen.queryByTestId("login-btn");

    userEvent.type(passwordInput, { target: { value: "" } });
    userEvent.click(buttonLogin);

    expect(passwordInput.value).toBe("");
    expect(services.loginWithEmailAndPassword).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      const elem = screen.getByText(
        "E-mail ou senha digitados incorretamente..."
      );
      expect(elem).toBeInTheDocument();
    });
  });

  it("should render error modal", async () => {
    const response = { code: "error", message: "error" };
    services.loginWithEmailAndPassword.mockRejectedValueOnce(Error(response));

    // Render page
    render(<LoginPage />);

    // Find the elements
    const emailInput = screen.queryByPlaceholderText("E-mail");
    const passwordInput = screen.queryByPlaceholderText("Senha");
    const buttonLogin = screen.queryByTestId("login-btn");
    const modalContainer = screen.queryByTestId("modal");
    expect(modalContainer).not.toBeInTheDocument();

    // act
    const email = "test@test.com";
    const password = "testtest";

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(buttonLogin);

    expect(emailInput.value).toBe(email);
    expect(passwordInput.value).toBe(password);
    expect(services.loginWithEmailAndPassword).toHaveBeenCalledTimes(1);
    expect(services.loginWithEmailAndPassword).toHaveBeenCalledWith(
      email,
      password
    );

    await waitFor(() => {
      const elem = screen.queryByTestId("modal");
      expect(elem).toBeInTheDocument();
    });
  });
});
