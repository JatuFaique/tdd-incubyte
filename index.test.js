import { add } from './index.js';

test('Test two number input', () => {
  expect(add("1,2")).toBe(3);
});

// add any number of numbers
test('Test multiple number', () => {
  expect(add("1,2,3")).toBe(6);
});

// test Input: “”, Output: 0
test('Test empty string input', () => {
  expect(add("")).toBe(0);
});