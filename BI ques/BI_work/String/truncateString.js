// Q3. Write a JavaScript function to extract a specified number of characters from a string?
// File name suggestion: truncateString.js
// Test Data :
// console.log(truncateString(“Robin Singh”,4)); // “Robi”


const truncateString = (str) => {
    return str.slice(0,3)
}

console.log(truncateString("Robin"));