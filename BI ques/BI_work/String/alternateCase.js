// Q8. Write a JavaScript function that takes a string which can have both lower and upper case letters as a parameter and converts alternate character to upper case & lower case, starting from upper case?
// File name suggestion: alternateCase.js
// Test Data :
// console.log(alternateCase(‘samsung’)); // “SaMsUnG”


const alternateCase = (str) => {
    let a = str.split("");
    for(let i=0; i<a.length; i=i+2){
        if(i%2 == 0)
        a[i] = a[i].toUpperCase();
        else
        a[i] = a[i].toLowerCase();
    }
    return a.join("");
}

console.log(alternateCase("samsung"));