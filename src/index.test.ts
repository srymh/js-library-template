import { describe, it, expect } from 'vitest';
import { echo } from '.';

describe('echo', () => {
  it('should return the same message', () => {
    expect(echo('hello')).toBe('hello');
  });
});
