import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Find zFuse Header', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/zFuse/i);
  expect(linkElement).toBeInTheDocument();
});
