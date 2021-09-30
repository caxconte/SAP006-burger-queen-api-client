import LoginPage from "./login";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import * as services from "../../services/index.js";

jest.mock("../../services/index.js");

describe("Input Email", () => {
  it("should show 'Escreva um email válido' to user when email input is empty", async () => {
    render(<LoginPage />);

    const emailInput = screen.queryByPlaceholderText("E-mail");

    userEvent.type(emailInput, { target: { value: "" } });

    expect(emailInput.value).toBe("");
    expect(services.loginWithEmailAndPassword).toHaveBeenCalledTimes(1);
    const elem = screen.getByText("Escreva um email válido");
    expect(elem).toBeInTheDocument();
  });
})