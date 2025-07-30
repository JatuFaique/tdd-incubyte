# TDD Incubyte

A simple JavaScript project demonstrating Test-Driven Development (TDD) using Jest. The main functionality is a string calculator that adds numbers from a string input, supporting custom delimiters, error handling for negatives, and ignoring numbers greater than 1000.

## Features

- Add numbers from a string with comma (`,`) or newline (`\n`) delimiters
- Support for custom single or multi-character delimiters (e.g. `//;\n1;2`)
- Throws an error for negative numbers, listing all negatives found
- Ignores numbers greater than 1000
- Fully tested with Jest

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/JatuFaique/tdd-incubyte.git
   cd tdd-incubyte
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running Tests

To run the test suite:
```sh
npm test
```

## Project Structure

```
.
├── index.js         # String calculator implementation
├── index.test.js    # Jest test cases
├── package.json     # Project configuration
└── README.md        # Project documentation
```

## Usage Example

```javascript
import { add } from './index.js';

console.log(add("1,2,3")); // Output: 6
console.log(add("//;\n1;2")); // Output: 3
```

## License
