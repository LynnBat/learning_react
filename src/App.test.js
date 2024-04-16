import { render, screen } from '@testing-library/react';
import MyApp from './App';

describe('My App', () => {
  beforeEach(() => {
    render(<MyApp />); 
  })

  it('loads and displays greeting', async () => {
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
  })
  
  it('has a button', () => {
    expect(screen.getByRole('button')).toBeEnabled();
  });

  describe('Button', () => {
    it('changes text upon clicking', () => {
      expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    
      screen.getByRole('button').click();
      expect(screen.getByText(/Hello, [A-Za-z]+!/)).not.toEqual('Hello, world!');
    });
  })
})
