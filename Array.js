

const newArr = new Array(1,2,3,42,56)
console.log("Push Pop And Length");
console.log(newArr.length);
console.log(newArr.push(0));
console.log(newArr.pop());
console.log(newArr);

//shift and unshift 
console.log("Shift and Unshift");
newArr.shift()
console.log(newArr);
newArr.unshift(12);
console.log(newArr);


//slice will not change the original array and not include the end index
//splice will change the original array and include the end index
const myArr = [1,2,3,4,5]
console.log("Slice and splice");
const slicedArr = myArr.slice(1,3)
console.log(slicedArr);
console.log(newArr);


//it will remove the items from  1 to 3 from original arr
const splicedArr = newArr.splice(1,3);
console.log(splicedArr);
console.log(newArr);


const car = ["BMW","Oddi","MG","Tesla"]
const bike = ["Honda","Hero","Tata","Bajaj"]
//this is giving the new length of arr after pushing the values
console.log(car.push(bike))
console.log(car);
console.log(car[4][3]);

//concat method return an new array with modification not modifying the original on
const concatArr = car.concat(bike);
console.log(car);
console.log(concatArr);


//concat and push is not recommeded practice to do with merging of arr that's why spread operator comes
const spreadArr = [...bike,...car]
console.log(spreadArr);


//arr in arr
const all_new_ele = [1,2,3,[4,6,6],[8,[9,0,8]]]
console.log(all_new_ele.flat(Infinity));

console.log(Array.isArray("Ritul"));
console.log(Array.from("Ritul"));

//here we have to specify from where we want to make an arr
console.log(Array.from({name : "ritul"}));


let score1=100
let score2=300
let score3=200
let score4=400
console.log(Array.of(score1,score2,score3,score4));