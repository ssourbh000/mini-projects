// Q10. Write a JavaScript function to insert a string within a string at a particular position (default is 1)?
// File name suggestion: insert.js
// Test Data :
// console.log(insert(‘We are doing some exercises.’)); // “We are doing some exercises.”
// console.log(insert(‘We are doing some exercises.’,’JavaScript ’)); // “JavaScript We are doing some exercises.”
// console.log(insert(‘We are doing some exercises.’,’JavaScript ’,18)); // “We are doing some JavaScript exercises.”

const insert = (str1, str2, num=0) => {
    var str = str1.split(" ");
    
    return str.unshift("JS");
}


console.log(insert('We are doing some exercises','JS'));