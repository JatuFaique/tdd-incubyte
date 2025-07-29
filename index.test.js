import { sum } from './index.js';

test('adds "1,2" to equal 3', () => {
  expect(sum("1,2")).toBe(3);
});

// add any number of numbers
test('adds "1,2,3" to equal 6', () => {
  expect(sum("1,2,3")).toBe(6);
});

// test Input: “”, Output: 0
test('Test empty string input', () => {
  expect(sum("")).toBe(0);
});