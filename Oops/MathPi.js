const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

//Math.pi ki value ko hum change nhi kr pa rhe kyuki uske implementation m uski value writable ko false kiya h jo hum change change nhi kr skte

Math.PI = 4
console.log(Math.PI);


const chai = {
    name : "maslachai",
    price:200,
    isAvail : true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))
Object.defineProperty(chai,"name",{
    writable: false,
    enumerable:true,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai)){
   console.log(`${key} , ${value}`);
}