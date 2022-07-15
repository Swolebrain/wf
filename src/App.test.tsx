import React from 'react';
import { render, screen } from '@testing-library/react';
import WFRouter from './WFRouter';

test('renders learn react link', () => {
  render(<WFRouter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
