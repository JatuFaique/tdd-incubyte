import { sum } from './index.js';

test('Test two number input', () => {
  expect(sum("1,2")).toBe(3);
});

// add any number of numbers
test('Test multiple number', () => {
  expect(sum("1,2,3")).toBe(6);
});

// test Input: “”, Output: 0
test('Test empty string input', () => {
  expect(sum("")).toBe(0);
});