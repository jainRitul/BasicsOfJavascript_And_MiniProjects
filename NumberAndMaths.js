const score = 400
console.log(score);

const newScore = new Number(500)
console.log(newScore);
console.log(newScore.toString().length);

//to set the precision after decimal
console.log(newScore.toFixed(1));
const num = 123.5555
console.log(num.toPrecision(2));

const hundereds = 1000000
console.log(hundereds.toLocaleString('en-IN'));
console.log(Number.MIN_VALUE);


// ***********************Math******************************

console.log(Math.min(2,3,41,1));
console.log(Math.max(2,3,41,1));
console.log(Math.abs(-2));
console.log(Math.pow(2,3));
console.log(Math)
console.log(Math.sqrt(25));

console.log(Math.round(4.255));
console.log(Math.floor(4.7555));
console.log(Math.ceil(4.2555));


//Random function in Math

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+ 1);

let min = 10
let max = 20

console.log(Math.floor(Math.random() * (max-min+1))+10);