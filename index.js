export function add(parameter) {
    // If the parameter is an empty string, return 0
    if (parameter === "") {
        return 0;
    }
    // Check if the parameter is a string and split it by commas then parse as int
    if (typeof parameter === 'string') {
        return getNumbersFromString(parameter).reduce((acc, num) => acc + num, 0);
    }
}

/**
 * Parses a string of numbers separated by commas or newlines and returns an array of integers.
 * @param {string} str - The input string containing numbers.
 * @returns {number[]} - An array of integers parsed from the input string.
 */
function getNumbersFromString(str) {
    return str.split(/[\n,]+/).map(num => parseInt(num, 10)).filter(num => !isNaN(num));
}