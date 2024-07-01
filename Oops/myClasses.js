class User{
    constructor(username,password,email){
        this.username= username
        this.password = password
        this.email = email
    }

    encryptPassword(){
        return `${this.username}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User("ritul","jain","ritul@google.com")
console.log(userOne.changeUserName());
console.log(userOne.encryptPassword());


//behind the scene
// function User(username,password,email){
//    this.username = username
//    this.password = password
//    this.email = email
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUserName = function(){
//     return `${this.username.toUpperCase()}`
// }
// const chai = new User("ritul","ritul@gmail.com",122)
// console.log(chai.changeUserName());
// console.log(chai.encryptPassword());
