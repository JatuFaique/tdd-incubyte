export function add(parameter) {
    // If the parameter is an empty string, return 0
    if (parameter === "") {
        return 0;
    }
    if (typeof parameter === 'string') {
        // Handle custom delimiters
        const { delimiter, numberString } = extractDelimiterAndNumbersString(parameter);
        let numbers = getNumbersFromString(numberString, delimiter);
        return numbers.reduce((acc, num) => acc + num, 0);
    }
}

/**
 * Parses a string of numbers separated by commas or newlines and returns an array of integers.
 * @param {string} str - The input string containing numbers.
 * @returns {number[]} - An array of integers parsed from the input string.
 */
function getNumbersFromString(str,delimiter = ',') {
    return str.split(new RegExp(`[${delimiter}\n,]+`)).map(num => parseInt(num, 10)).filter(num => !isNaN(num));
}

/**
 * Extracts the custom delimiter and the numbers string from the input.
 * If the input starts with "//", it treats the next line as a custom delimiter.
 * @param {string} str - The input string potentially containing a custom delimiter.
 * @returns {Object} - An object containing the delimiter and the numbers string.
 */
function extractDelimiterAndNumbersString(str) {
    let delimiter = ',';
    if (str.startsWith('//')) {
        const parts = str.split('\n');
        delimiter = parts[0].substring(2);
        str = parts.slice(1).join('\n'); // Join the rest of the string
    }
    return {
        delimiter,
        numberString: str
    };
}