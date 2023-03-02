import { render, screen } from '@testing-library/react';
import App from './App';

test('renders The Resident Zombie title', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Resident Zombie/i);
  expect(linkElement).toBeInTheDocument();
});
