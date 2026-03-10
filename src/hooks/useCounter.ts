// src/hooks/useCounter.ts
// ─── Chapter 7: Custom Hook ──────────────────────────────────────
import { useState } from 'react';

export const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);
  const reset = () => setCount(initialValue);
  const incrementBy = (n: number) => setCount((c) => c + n);

  return { count, increment, decrement, reset, incrementBy };
};
