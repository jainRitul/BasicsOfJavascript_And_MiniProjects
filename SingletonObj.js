const tinderUser = new Object()   // singleton obj

tinderUser.id = "123abc"
tinderUser.name  = "ritul"
tinderUser.age = 20
tinderUser.isLoggedIn = true
tinderUser.mySym = Symbol("key1")
console.log(tinderUser);

const tinderAnotherUser = {} //non singleton obj
console.log(tinderAnotherUser);  

const regularUser = {
    fullName : {
        userFullName : {
            firstName:"ritul",
            lastName :"Jain"
        }
    },
    email :"user@google.com",
    age :20

}
console.log(regularUser.age);
console.log(regularUser.fullName.userFullName.lastName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4 = {5:"e",6:"f"}
//not recommeded to do 
// const obj3 = {obj1,obj2,obj4}

//this also
// const obj3 = Object.assign({},obj1,obj2,obj4)

//use spread operator
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);


const newUser = [
    {
        id:1,
        name : "ritul"
    },
    {
        id:2,
        name : "prinjal"
    },
    {
        id:3,
        name : "nehal"
    },
    {
        id:4,
        name : "sarvesh"
    },
]

console.log(newUser[1].name);

console.log(tinderUser);
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));