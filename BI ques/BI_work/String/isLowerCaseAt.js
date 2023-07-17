// Q15. Write a JavaScript function to test whether the character at the provided (character) index is upper case?
// File name suggestion: isLowerCaseAt.js
// Test Data :
// console.log(isLowerCaseAt(‘Js STRING EXERCISES’, 1)); // true

const isLowerCaseAt = (str, num) => {
    let a = str.split(" ");
    let b = a.join("");
    if(b[num] == b[num].toLowerCase())
    return true;
    else
    return false;
    
}

console.log(isLowerCaseAt("Js STRING EXERCISES",3));