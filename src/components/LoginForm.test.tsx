// src/components/LoginForm.test.tsx
// ─── Chapter 5 & 6: Form + Mock Function Tests ──────────────────
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {

  it('renders email and password inputs', () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('renders a Login button', () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('calls onSubmit with email and password when form is submitted', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();          // ← mock function tracks calls
    render(<LoginForm onSubmit={mockSubmit} />);

    await user.type(screen.getByLabelText('Email'), 'sid@example.com');
    await user.type(screen.getByLabelText('Password'), 'secret123');
    await user.click(screen.getByRole('button', { name: 'Login' }));

    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith('sid@example.com', 'secret123');
  });

  it('shows validation error when fields are empty', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    await user.click(screen.getByRole('button', { name: 'Login' }));

    expect(screen.getByRole('alert')).toHaveTextContent('Both fields are required.');
    expect(mockSubmit).not.toHaveBeenCalled();  // ← onSubmit should NOT fire
  });

  it('does not show error message initially', () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
