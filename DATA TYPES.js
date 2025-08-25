// DATATYPES

"Use strict"; //treat all JS code as newer version
// its not compulsory now to write use strcit as now already it is in strict mode 

// alert(3+3) // we are using nodeJS not browser
// console.log(3+3); console.log("GANESH"); /* here if we not put semicolon after first console then their we be error and after putting, it will work but does not looks readable so write the next console in next line */

let name="Ganesh"
let age=19

//srting= names
// number= 2 to power 53 is its range
// BigInt= beyond 2 to power 53 this is used
// null=stanalone value
// Boolean=true or false
// undefined 
// symbol= for uniqueness

//object 

console.log(typeof "Ganesh");
console.log(typeof age);
console.log(typeof 19);
console.log(typeof null);
console.log(typeof undefined);

// CONVERION OF DATA TYPES/

let Score ="20"
console.log(typeof Score);

let valueInNumber = Number(Score) // if we want to convert it into Boolean write Boolean instead of Number // same for string
console.log(typeof valueInNumber);

let Marks ="20anas"
console.log(typeof Marks);

let valueInMarks = Number(Marks)
console.log(typeof valueInMarks);
console.log(valueInMarks); // Nan(Not a number)
// if its null instead of any number so output will be object for type   and after conversion it will become number and for only print it will come 0 after conversion 
// if its undefined instead of any number so output will be undefined for type   and after conversion it will become number and for only print it will come NaN after conversion
// if its boolean true instead of any number so output will be boolean for type   and after conversion it will become number and for only print it will come 1 after conversion
// // if its boolean false instead of any number so output will be boolean for type   and after conversion it will become number and for only print it will come 0 after conversion
// 1 => true // 0 => false
// " " => false
// "Ganesh" => true

// COMPARISON OF DATA TYPES

// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 >= 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// here == and ><= works differently and js converts null as 0 so null>0 is false and null >= 0 is true 

console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);

// === means strcit check

console.log("2" === 2); // here datatype wil also be checked 

