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

test('Test to support different delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('Test to support different delimiters with multiple numbers', () => {
    expect(add("//$\n1,2\n3$4")).toBe(10);
});

test('Test negative numbers should throw an error', () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed -2");
});

test('Test negative numbers should throw an error with multiple negatives', () => {
    expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});

test('Test numbers greater than 1000 should be ignored', () => {
    expect(add("1,2,1001")).toBe(3);
});

test('Test delimiter with delimiter longer than one character', () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
});

