import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { Routes } from "./Routes";
import LoginPage from './pages/login/login.js';
import { SignUpPage } from './pages/signup/signup.js';
import { ErrorPage } from './pages/404/index.js';

import { MemoryRouter } from 'react-router';

jest.mock('./pages/home/home.js');
jest.mock('./pages/404/index.js');
jest.mock('./pages/login/login.js');
jest.mock('./pages/signup/signup.js');

describe("Tests for Router", () => {
  test("Should render page Login on default route", () => {
    // Arrange
    LoginPage.mockImplementation(() => <div>HomePageMock</div>);
    // Home.mockReturnValue("HomePageMock");

    // Act
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    // expect(document.body.textContent).toBe('HomePageMock');
    expect(LoginPage).toHaveBeenCalledTimes(1);
  });

  test("Should render page SignUp for signup route", () => {
    
    SignUpPage.mockImplementation(() => <div>SignUpPageMock</div>);
    
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <Routes/>
      </MemoryRouter>
    );

    expect(screen.getByText("SignUpPageMock")).toBeInTheDocument();
    expect(SignUpPage).toHaveBeenCalledTimes(1);
  });

  test("Should render page 404 for invalid route", () => {
    // Arrange
    ErrorPage.mockImplementation(() => <div>PageNotFoundMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={['/invalid/route']}>
        <Routes />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText("PageNotFoundMock")).toBeInTheDocument();
    expect(ErrorPage).toHaveBeenCalledTimes(1);
  });
});
