// src/components/Badge.test.tsx
// ─── Chapter 8: Snapshot Tests ──────────────────────────────────
import { render } from '@testing-library/react';
import Badge from './Badge';

describe('Badge Snapshot Tests', () => {

  it('matches snapshot for success badge', () => {
    const { asFragment } = render(<Badge type="success" label="Passed" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot for error badge', () => {
    const { asFragment } = render(<Badge type="error" label="Failed" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot for warning badge', () => {
    const { asFragment } = render(<Badge type="warning" label="Warning" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches snapshot for info badge', () => {
    const { asFragment } = render(<Badge type="info" label="Info" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
