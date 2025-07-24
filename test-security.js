// test-security.js - Security test file
const expression = '1 + 1';
eval(`console.log(${expression})`); // Should trigger security warning

const fs = require('fs');
const userInput = process.argv[2];
fs.readFile(userInput, 'utf8', () => {}); // Should trigger filename warning
