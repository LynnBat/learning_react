import { render, screen } from '@testing-library/react';
import MyApp from './App';

test('loads and displays greeting', async () => {
  render(<MyApp />); 
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
})

test('button is present', () => {
  render(<MyApp />);
  expect(screen.getByRole('button')).toBeEnabled();
});

test('button changes text upon clicking', () => {
  render(<MyApp />);
  expect(screen.getByText('Hello, world!'));

  screen.getByRole('button').click();
  expect(screen.getByText('Hello, world!')).not.toEqual('Hello, world!');
});
