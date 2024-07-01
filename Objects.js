//when you create an obj from constructor than it is singleton obj and if you declare obj as direct literals than that is not a singlton obj
//ways to create an obj are Singleton and object literal


//singleton
//Object.create

//Object Literals
const mySym = Symbol("Key1");
const JSuser = {
    name : "Ritul Jain",
    "full name" : "ritul sandeep jain",
    age : 20,
    address :"Rajasthan",
    lastLoggedIn : ["Monday","Saturday"],
    [mySym]: "mykey1",
    email : "ritul@google.com",

}

console.log(JSuser.address);
console.log(JSuser["address"]);

//this will give you an error
// console.log(JSuser[address]);
//symbol ko humesha object k andr brackts m hi likhna h
console.log(typeof(JSuser.mySym));
console.log(JSuser[mySym]);

//you can't access it without using []
console.log(JSuser["full name"]);

JSuser.email = "ritul@microsoft.com"
//freeze method used to make the object unchangeable
// Object.freeze(JSuser)
JSuser.email = "ritul@google.com"
console.log(JSuser);

JSuser.greeting = function(){
    console.log(`Hello js user ${this["full name"]}`);
}
console.log(JSuser.greeting());