//basic function
let name = 'Jared';
console.log(name);

//camel case 
let firstName = 'Jared';

let interestRate = .03;
console.log(interestRate);

/* Prim Value Types
String Number Boolean undefined null */
 
let names = 'kelly'; //String Literal
let age = 22; // Number Literal
let isApproved = true; // Boolean Literal
let middleName = undefined;
let selectedColor = null; 

//Dynamic Types
//  Static cannot be changed (const)
//  Dynamic can change (let)

//Ref types
//Objects Array Function

//object Literal
let person = {
    name: 'Jared',
    age: 22
};
console.log(person);
// Dot Notation to eddit 
person.name = 'Estrea';
//Bracker Notation to eddit object if taget prop has spaces
person['name'] = 'rin';

//arrays can be dynamic
let myColors = ['red', 'black', 'white'];
myColors[2] = 'pink'
console.log(myColors[0]);


//functions to preform task
function greet(name, lastName) {
    console.log('Hello ' + name +' ' + lastName);
}
//To call function
greet('Estrea', 'Krin');
greet('rin'); // this will return ' Hello Rin undefined' due to last name being missing

//function cals

function square(number) {
   return number*number;  
}

console.log(square(12));  
