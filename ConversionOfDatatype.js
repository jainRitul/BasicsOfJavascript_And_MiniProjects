let  age = 20
console.log(age);
console.log(typeof age);
console.log(typeof(age));

let stringAge = "20abc"
//at this type of input you may get wrong result because 20abc is Nan
console.log(typeof stringAge);
let numberAge = Number(stringAge)
console.log(typeof numberAge);
console.log(numberAge);


let isLoggedIn  = 1
console.log(isLoggedIn);
console.log(typeof isLoggedIn);

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log( typeof booleanIsLoggedIn);


let score = Number(null)
console.log(score);
console.log(typeof score);


let score2 = Number(undefined)
console.log(score2);
console.log(typeof score2);



let num1 ,num2,num3
num1 = num2 = num3 = 2+2
console.log(num1);
console.log(num2);

console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");



//comparison
console.log("2" > 1);

//this type of comparsion will not give predicatable result
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


//undefined comparison with 0 will always give 0 as o/p
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2);
console.log("2" == 2);