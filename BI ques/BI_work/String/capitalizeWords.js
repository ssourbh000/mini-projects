// Q6. Write a JavaScript function to capitalize the first letter of each word in a string?
// File name suggestion: capitalizeWords.js
// Test Data :
// console.log(capitalizeWords(‘js string exercises’)); // “Js String Exercises”


const capitalizeWords = (str) => {
    let a = str.split(" ");
    for (let i = 0; i < a.length; i++) {
        a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    return a.join(" ");
}

console.log(capitalizeWords("I love my country"));