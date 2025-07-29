export function sum(parameter) {
    // Check if the parameter is a string and split it by commas then parse as int
    if (typeof parameter === 'string') {
        return parameter.split(',').reduce((acc, num) => acc + parseInt(num, 10), 0);
    }
}