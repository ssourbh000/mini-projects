// Q4. Write a JavaScript function to parameterize a string?
// File name suggestion: stringParameterize.js
// Test Data :
// console.log(stringParameterize(“Robin Singh from USA.“)); // “robin-singh-from-usa”


const stringParamaterize = (str) => {
    let arr = str.toLowerCase();
    let a = arr.split(" ");
    // for(let i=0; i<a.length-1; i++){
    //     a[i] = a[i] + '-';
    // }
    // return a.join("");
    return a.join("");
}
console.log(stringParamaterize("I love my Bharat"));
