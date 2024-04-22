import { render, screen, waitFor } from '@testing-library/react';
import MyApp from './App';

describe('My App', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ results: [{ name: { first: 'Alice' } }] })
    })
  );
    render(<MyApp greeting="Hello, John!" />); 
  })

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('loads and displays greeting', async () => {
    expect(screen.getByText('Hello, John!')).toBeInTheDocument();
  })
  
  it('has a button', () => {
    expect(screen.getByRole('button')).toBeEnabled();
  });

  describe('Button', () => {
    it('changes text upon clicking', async () => {
      screen.getByRole('button').click();

      await waitFor(() => {
        expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
      });
    });
  })
})
