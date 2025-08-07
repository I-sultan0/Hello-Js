// Variable Declaration (var, let & const) - Defining a variable with a keyword which will display its properties.

// var-> [not in current use] It can be redeclare and its value can be reassigned.
var varDeclaration = "abc";
console.log(varDeclaration);
var varDeclaration = "Var - redeclared";
console.log(varDeclaration);
varDeclaration = "Var - value reassigned";
console.log(varDeclaration);

// let -> Its value can be reassigned.
let letDeclaration = "Let - 1st value";
// let letDeclaration = "Let - Redeclared";  //Throws Error
console.log(letDeclaration);
letDeclaration = "Let - reassigned Value";
console.log(letDeclaration);

// const -> Its value is constant. [Neither redeclare nor reassigned]
const constDeclaration = "Constant Value";
// constDeclaration = "Reassigning";  //Throws Error
//const constDeclaration = "Redeclared";  // Throws Error
console.log(constDeclaration);

// JS Data Types - 1.Primitives & 2.Objects

// Primtitves - string, number, boolean, undefined and null
// Objects - objects, array, function

// Primitives holds their value directly, when you copy a primitive data type,
//  you create a completely independent copy.
let primitiveNumber = 10;
let copyPrimitiveNumber = primitiveNumber;
copyPrimitiveNumber = 20;
console.log(`primitiveNumber - ${primitiveNumber}`);

// Objects holds a reference to their value, when you copy an Object data type,
//  you copy their reference value rather than actual value, so when you update the copied
//  version of an Object data type it changes the value of the original since both have the same reference value.

const objectType = { a: "apple", b: "banana", c: { d: "doctor", e: "egg" } };
const copyObjectType = objectType;
copyObjectType.a = "aeroplane";
console.log(`objectType - ${JSON.stringify(objectType, 2)}`);

// But there is a way to create a true copy of an object type. We can use JSON.parse(JSON.stringify(ObjectType))

const trueCopy = JSON.parse(JSON.stringify(objectType));
trueCopy.c.d = "dog";
console.log(objectType);
console.log(trueCopy);

// Summary -
// Use let and const based on the code requirement.
// Primtive types create an independent copy but Object types didn't.
