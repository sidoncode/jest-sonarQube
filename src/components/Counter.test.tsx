// src/components/Counter.test.tsx
// ─── Chapter 5: User Interaction Tests ──────────────────────────
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {

  it('displays initial count of 0', () => {
    render(<Counter />);
    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('increments count when Increment button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });

  it('decrements count when Decrement button is clicked', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: 'Decrement' }));

    expect(screen.getByText('Count: -1')).toBeInTheDocument();
  });

  it('resets count to 0 after incrementing twice', async () => {
    const user = userEvent.setup();
    render(<Counter />);

    await user.click(screen.getByRole('button', { name: 'Increment' }));
    await user.click(screen.getByRole('button', { name: 'Increment' }));

    expect(screen.getByText('Count: 2')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Reset' }));

    expect(screen.getByText('Count: 0')).toBeInTheDocument();
  });

  it('renders all three buttons', () => {
    render(<Counter />);
    expect(screen.getByRole('button', { name: 'Increment' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Decrement' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument();
  });
});
