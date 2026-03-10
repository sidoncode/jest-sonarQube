// src/components/UserCard.test.tsx
// ─── Chapter 6: Mocking fetch / API calls ───────────────────────
import { render, screen, waitFor } from '@testing-library/react';
import UserCard from './UserCard';

// Replace the global fetch with a Jest mock
global.fetch = jest.fn();

describe('UserCard Component', () => {

  // Reset mock state before each test
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('shows loading state initially', () => {
    // Make fetch never resolve so we stay in "loading"
    (global.fetch as jest.Mock).mockReturnValue(new Promise(() => {}));

    render(<UserCard userId={1} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders user name and email after fetch succeeds', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        id: 1,
        name: 'Jane Doe',
        email: 'jane@example.com',
      }),
    });

    render(<UserCard userId={1} />);

    // Wait until loading disappears and data appears
    await waitFor(() => {
      expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    });

    expect(screen.getByText('jane@example.com')).toBeInTheDocument();
  });

  it('shows error message when fetch fails', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: false,
    });

    render(<UserCard userId={99} />);

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    expect(screen.getByRole('alert')).toHaveTextContent('Error: Failed to fetch user');
  });

  it('calls fetch with the correct URL', async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({ id: 5, name: 'Bob', email: 'bob@x.com' }),
    });

    render(<UserCard userId={5} />);

    await waitFor(() => screen.getByText('Bob'));

    expect(global.fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users/5'
    );
  });
});
