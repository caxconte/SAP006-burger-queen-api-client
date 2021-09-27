import { render, fireEvent } from '@testing-library/react'
// import { act } from 'react-dom/test-utils'
// import { userEvent } from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';

import { LoginPage } from './login';
// import * as services from '../../services/index.js';

// const emailInput = screen.queryByPlaceholderText('E-mail');
// const passwordInput = screen.queryByPlaceholderText('Senha');
// const loginButton = screen.queryByRole('button');

const email = 'test@test.com';
const password = "testtest";

describe("LoginPage", () => {
  describe("with valid inputs", () => {
    it('calls the onSubmit function', () => {
      const mockOnSubmit = jest.fn()
      const {queryByPlaceholderText, queryByRole} = render(<MemoryRouter><LoginPage onSubmit={mockOnSubmit}/></MemoryRouter>)

        fireEvent.change(queryByPlaceholderText('E-mail'), { target: { value: 'test@test.com'}})
        fireEvent.change(queryByPlaceholderText('Senha'), { target: { value: 'testtest'}})
        fireEvent.click(queryByRole("button"))

      expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    })
  })

  describe('with invalid email', () => {
    it('renders the email validation error', () => {
      // const {queryByPlaceholderText, container} = render(<Router><LoginPage /></Router>)

      
    })
  })
  describe('with invalid password', () => {
    it('renders the password validation error', () => {
      
    })
  })
})
