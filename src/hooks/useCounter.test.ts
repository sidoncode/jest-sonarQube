// src/hooks/useCounter.test.ts
// ─── Chapter 7: Testing Custom Hooks with renderHook ────────────
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter Hook', () => {

  it('initialises with default value 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('initialises with a custom value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('increments count by 1', () => {
    const { result } = renderHook(() => useCounter());

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('decrements count by 1', () => {
    const { result } = renderHook(() => useCounter(5));

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(4);
  });

  it('resets count to initial value', () => {
    const { result } = renderHook(() => useCounter(3));

    act(() => {
      result.current.increment();
      result.current.increment();
      result.current.reset();
    });

    expect(result.current.count).toBe(3);  // back to initialValue
  });

  it('increments by a given number', () => {
    const { result } = renderHook(() => useCounter(0));

    act(() => {
      result.current.incrementBy(7);
    });

    expect(result.current.count).toBe(7);
  });
});
