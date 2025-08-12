//1.  All the Mathematical Operator works same as usual with numbers (+,-,*,/,**,%)

// Increment & Decrement
let xInc = 5;
let yDec = 8;

const zInc = xInc++; //zInc first save the value of xInc and then update the variable.
const zDec = yDec--; // similar to zInc, it saves first then update the variable.

console.log(zInc, zDec); //5,8
console.log(xInc, yDec); //6,7

const pInc = ++xInc; //pInc first update the variable then saves the value.
const pDec = --yDec; //similar to pInc.

console.log(pInc, pDec); //7,6
console.log(xInc, yDec); //7,6

// 2. Comparison Operator - Same as you study in Schools (>,<,=,!,)

// '==' compare the value, '===' compare the value and type
// Comparison Operator often works by attaching two of them - >=, <=, !=, !==
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 != 6); // true
console.log(5 !== "5"); // true
