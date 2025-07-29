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

test('Test allow \n as seperator',()=>{
    expect(add("1\n2,3")).toBe(6);
});

test('Test allow multiple combinations of \n and , as seperator',()=>{
    expect(add("1,2\n5,10\n4")).toBe(22);
});

test('Test allow multiple \n without numbers', ()=>{
    expect(add("1,\n\n,4,5,\n")).toBe(10);
});

