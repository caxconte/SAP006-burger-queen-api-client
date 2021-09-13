import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { MemoryRouter } from 'react-router';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Routes from './Routes';
import { Home } from './pages/Home/Home.js';
import { Sobre } from './pages/Sobre/Sobre.js';
import { Error } from './pages/PageNotFound/index.js';
import { Route } from 'react-router-dom';

