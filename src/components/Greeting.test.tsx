// src/components/Greeting.test.tsx
// ─── Chapter 4: Component Rendering Tests ───────────────────────
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

describe('Greeting Component', () => {

  it('renders the greeting message with the given name', () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
  });

  it('renders the age paragraph when age is provided', () => {
    render(<Greeting name="Bob" age={30} />);
    expect(screen.getByText('You are 30 years old.')).toBeInTheDocument();
  });

  it('does NOT render age paragraph when age is omitted', () => {
    render(<Greeting name="Carol" />);
    // queryByText returns null (does not throw) when element is absent
    expect(screen.queryByText(/years old/)).not.toBeInTheDocument();
  });

  it('renders an h1 heading element', () => {
    render(<Greeting name="Dave" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Hello, Dave!');
  });
});
