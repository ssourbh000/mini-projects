// Q7. Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case?
// File name suggestion: swapCase.js
// Test Data :
// console.log(swapCase(‘AaBbc’)); // “aAbBC”


const swapCase = (str) => {
    let a = str.split("");
    for(let i=0; i<a.length; i++){
        if(a[i] === a[i].toLowerCase())
        a[i] = a[i].toUpperCase();

        else
        a[i] = a[i].toLowerCase();
    }
    return a.join("");
}

console.log(swapCase("aBcdE"));