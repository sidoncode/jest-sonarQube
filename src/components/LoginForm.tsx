// src/components/LoginForm.tsx
// ─── Chapter 5: Form Input Testing ──────────────────────────────
import { useState } from 'react';

interface Props {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm = ({ onSubmit }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
    setError('');
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      {error && <p role="alert">{error}</p>}

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
