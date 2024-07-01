"use strict" //treat all js code as newer version of js

// alert("Hello"); // we are using node js not browser
//ECMA script is the standards defined to write code in js


//Primitive :-   number , string , bigint, symbol , boolean ,null , undefined
// Non Primitive :- Array , Object , Function

const bigNumber = 3423323234344343545n
console.log(typeof bigNumber)


//symbol  :- it always give unique value to the variable if you declare it as an same value than also
const uniq = Symbol('123')
const uniq2 = Symbol('123')
console.log(uniq === uniq2);
console.log(typeof uniq);

let name  = "Ritul Jain"
let age = 20
let isEmployeed = false


// number
// string 
// null - > standalone value
// undefined -> undefined
// symbol
// boolean

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof "ritul");



//Array
//it's type is object 
const heros = ["shaktiman","barbie","doremon"]
console.log(heros);
console.log(typeof heros);


//it's type is object 
const myObj = {
    name : "Ritul Jain",
    age : 20,
    Div : 22
}
console.log(myObj);
console.log(typeof myObj);


//it will return type as function but internally it is function obj
const myFun = function(){
    console.log("Er. Ritul Jain");
}
myFun()
console.log(typeof myFun);