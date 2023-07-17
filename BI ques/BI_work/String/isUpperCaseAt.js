// Q14. Write a JavaScript function to test whether the character at the provided (character) index is upper case?
// File name suggestion: isUpperCaseAt.js
// Test Data :
// console.log(isUpperCaseAt(‘Js STRING EXERCISES’, 1)); // false


const isUpperCaseAt = (str, num) => {
    let a = str.split(" ");
    let b = a.join("");
    if(b[num] == b[num].toUpperCase())
    return true;
    else
    return false;
}

console.log(isUpperCaseAt("Js STRING EXERCISES",1));