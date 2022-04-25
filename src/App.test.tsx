import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render counter component', () => {
  render(<App />);
  const counterEl = screen.getByText(/count:/i);
  expect(counterEl).toBeInTheDocument();
});
