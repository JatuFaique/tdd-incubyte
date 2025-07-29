export function sum(parameter) {
    // If the parameter is an empty string, return 0
    if (parameter === "") {
        return 0;
    }
    // Check if the parameter is a string and split it by commas then parse as int
    if (typeof parameter === 'string') {
        return parameter.split(',').reduce((acc, num) => acc + parseInt(num, 10), 0);
    }
}