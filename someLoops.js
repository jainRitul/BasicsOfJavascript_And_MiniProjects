//for of loop
const arr = [1,2,3,4,5]
//i will access the element of array 
for (const i  of arr) {
    console.log(i);
}

const str = "greetings"
for (const i of str) {
    console.log(i);
}


//for of loop on map
// map is an object which holds data in the form of key value pair and it store only unique values
const map = new Map();
map.set('IN',"INDIA")
map.set('Fr',"FRANCE")
map.set('USA',"UNITED STATES OF AMERICA")

console.log(map);
for (const [key,value] of map) {
    console.log(key , ':-' , value);
}

//for of will not work for objects so we can use for in for objects
const myObj = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby" ,
    py : "python"
}
//for of not working for object
// for (const [key,value] of myObj) {
//     console.log(key , ':- ' ,value);
// }

//for in for object
for (const key in myObj) {
  console.log(`${key} is shorcut for ${myObj[key]}`);
}

//for in for arr
for (const i in arr) {
   console.log(arr[i]);
}

//for in on map not work 
// for (const[ key ]in map) {
//    console.log(key);
// }


//for each loop on arr
const coding = ["java","cpp","python","swift","ruby","solidity"]
coding.forEach(ele =>{
    console.log(ele);
})

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)


coding.forEach(function(value){
    console.log(value);
})

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


//array of object forEach loop
const knownLang =[
    {
        langName : "Java",
        langFileName : "Java"
    },
    {
        langName : "Python",
        langFileName : "py"
    },
    {
        langName : "JavaScript",
        langFileName : "Js"
    }
]

knownLang.forEach(item =>{
   console.log(item["langFileName"]);
})