// src/utils/math.test.ts
// ─── Chapter 3: Pure Function Tests ─────────────────────────────
import { add, multiply, divide, isEven } from './math';

describe('Math Utilities', () => {

  // ── add() ──────────────────────────────────────────────────────
  describe('add()', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should handle negative numbers', () => {
      expect(add(-1, 1)).toBe(0);
    });

    it('should add floats correctly', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  // ── multiply() ─────────────────────────────────────────────────
  describe('multiply()', () => {
    it('should multiply two numbers', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    it('should return zero when multiplying by zero', () => {
      expect(multiply(99, 0)).toBe(0);
    });

    it('should handle negative multiplication', () => {
      expect(multiply(-3, 4)).toBe(-12);
    });
  });

  // ── divide() ───────────────────────────────────────────────────
  describe('divide()', () => {
    it('should divide two numbers correctly', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should return a float for non-whole division', () => {
      expect(divide(7, 2)).toBe(3.5);
    });
  });

  // ── isEven() ───────────────────────────────────────────────────
  describe('isEven()', () => {
    it('should return true for even numbers', () => {
      expect(isEven(4)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(isEven(7)).toBe(false);
    });

    it('should return true for zero', () => {
      expect(isEven(0)).toBe(true);
    });
  });
});
