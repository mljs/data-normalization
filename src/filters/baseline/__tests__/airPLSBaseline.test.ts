import { toBeDeepCloseTo, toMatchCloseTo } from 'jest-matcher-deep-close-to';
import { test, expect } from 'vitest';

import baseline from '../../__tests__/data/baseline';
import { airPLSBaseline } from '../airPLSBaseline';

expect.extend({ toBeDeepCloseTo, toMatchCloseTo });

test('airPLSBaseline', () => {
  const result = airPLSBaseline(baseline);
  expect(result.data).toMatchCloseTo({
    x: Float64Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]),
    y: Float64Array.from([0, 0, 0, 0, 4, 0, 0, 0, 0]),
  });
});
