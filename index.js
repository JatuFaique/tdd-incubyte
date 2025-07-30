export function add(parameter) {
    // If the parameter is an empty string, return 0
    if (parameter === "") {
        return 0;
    }
    if (typeof parameter === 'string') {
        const { delimiters, numberString } = extractDelimiterAndNumbersString(parameter);
        let numbers = getNumbersFromString(numberString, delimiters[0]);
        // Check for negative numbers
        const negatives = numbers.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
        }
        // Ignore numbers greater than 1000
        numbers = numbers.filter(num => num <= 1000);

        return numbers.reduce((acc, num) => acc + num, 0);
    }
    return 0;
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
    let delimiters = [','];
    if (str.startsWith('//')) {
        const parts = str.split('\n');
        delimiterSection = parts[0].substring(2);
        // Match all delimiters enclosed in square brackets
        const matches = delimiterSection.match(/\[(.*?)\]/g);

        if (matches) {
            delimiters = matches.map(m => m.slice(1, -1)); 
        } else {
            delimiters = [delimiterSection];
        }
    }
    return {
        delimiters,
        numberString: str
    };
}