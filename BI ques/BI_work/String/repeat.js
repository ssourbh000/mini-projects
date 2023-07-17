// Q9. Write a JavaScript function to concatenates a given string n times (default is 1)?
// File name suggestion: repeat.js
// Test Data :
// console.log(repeat(‘Ha!’)); // “Ha!”
// console.log(repeat(‘Ha!’,2)); // “Ha!Ha!”
// console.log(repeat(‘Ha!’,3)); // “Ha!Ha!Ha!”

const repeat = (str, number=1) => {
    if(number == 1)
    return str;
    else
    return str+repeat(str,number-1);
}

console.log(repeat('Ha!'));