let Name = "ritul"
let repoCount = 50
console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`);


const gameName = new String("ritul-jain")
//it has many methods to work upon
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.replace('jain','dosi'));
console.log(gameName.substring(0,4));
//-8 means 8th character from the end and endIndex is 5
console.log(gameName.slice(-8,5));
console.log(gameName.indexOf('-'));
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newName = "         jainritul     " 
//trim method remove extra space
console.log(newName.trimStart());
console.log(newName);

console.log(gameName.includes("jain"));

console.log(gameName.split("-"));
