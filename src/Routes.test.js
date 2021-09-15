// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import { Routes } from "./Routes";
import { Home } from './pages/Home/Home.js';
import { Sobre } from './pages/Sobre/Sobre.js';
import { ErrorPage } from './pages/PageNotFound/index.js';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

jest.mock('./pages/Home/Home.js');
jest.mock('./pages/Sobre/Sobre.js');
jest.mock('./pages/PageNotFound/index.js');

describe("Tests for Router", () => {
  test("Should render page Home on default route", () => {
    // Arrange
    // Home.mockImplementation(() => <div>HomePageMock</div>);
    Home.mockReturnValue("HomePageMock");

    // Act
    render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    );

    // Assert
    // expect(screen.getByText("HomePageMock")).toBeInTheDocument();
    expect(document.body.textContent).toBe('HomePageMock');
    expect(Home).toHaveBeenCalledTimes(1);
  });

  test("Should render page Sobre for sobre route", () => {
    
    Sobre.mockImplementation(() => <div>SobrePageMock</div>);
    
    render(
      <MemoryRouter initialEntries={['/sobre']}>
        <Routes/>
      </MemoryRouter>
    );

    expect(screen.getByText("SobrePageMock")).toBeInTheDocument();
    expect(Sobre).toHaveBeenCalledTimes(1);
  });

  test("Should render page PageNotFound for invalid route", () => {
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
