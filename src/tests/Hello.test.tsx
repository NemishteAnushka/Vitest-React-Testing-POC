import { render, screen } from '@testing-library/react';
import Hello from '../component/Hello';

test('renders hello message', () => {
  render(<Hello name="Vite" />);
  expect(screen.getByText('Hello Vite')).toBeInTheDocument();
});
