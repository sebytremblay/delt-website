
let name = 'April'; // String Literal
let age = 19; // Number Literal
let isApproved = true; // Boolean Literal
let selectedColor = null; // Null Literal
//selectedColor = 'red';
console.log(name);

// Variable names cannot be a reserved keyword such as let, if, else, var etc.
// Variable names should be meaningful.
// Variable names cannot start with a number like 1name. WHy would you want to naywas, it's useless. 
// Variable names cannot contain a space or hyphen (-).

let firstName = undefined;
let lastName = 'Norton';

const interestRate = 0.3;
// interestRate = 1;
console.log(interestRate);

let person = {
    name: 'April',
    age: 19
};

// Dot Notation (this is more concise and more commonly used)
person.name = 'April Norton';
person.age = 20;

// Bracket Notation (this is used when the property name is not known until runtime)
let selection = 'name';
person[selection] = 'April Erin Norton';

console.log(person);
console.log(person.name);


let selectedColors = ['red', 'blue'];
// Arrays are dynamic and can be changed at any time. 
// Arrays can hold different data types.
// Arrays are zero-based index.
selectedColors[2] = 1;

console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors.length);
// An array is a data structure that we use to represent a list of items.

// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + " " + lastName);
}

greet('April', 'Norton');

// Calculating a value
function square(number) {
    return number * number;
}

square(2);

// A function is a set of statements that performs a task or calculates a value.
console.log(square(2));