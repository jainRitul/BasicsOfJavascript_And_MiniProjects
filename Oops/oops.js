const user = {
    name :"rituljain",
    age : 20,
    getUserDetail : function(){
        console.log('hi ritul');
        console.log(`username : ${this.name}`);
        console.log(this);
    }
    
}
// console.log(user.getUserDetail());
// console.log(this);

// new keyword jo h vo liye use krte h taki ek hi object literal  s hum multiple instances bna sku
// new jo h vo constructor function h

const obj = new Object()
const date = new Date()

//about new := 
// new keyword h vo phle empty create hota h phir uske andr jitni bhi value hai 
// vo inject hoti h phir 
// this  keyword us newly created object ko refer krta phir vo apko return hojata h 

const userDetail = function(username,isLoggedIn,loginCount){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    

    this.greetings = function(){
        console.log(`${this.username}`);
    }
    //yh nhi bhi likhoge toh bhi implicitly return hohi jyga
    return this
}


//toh agr hum yh approach krnge new instance banane k liye toh old instance ko override krga 
//puri tarah s naye instance k liye new keyword ko use kro
// const userOne = userDetail("ritul",true,12)
// // console.log(userOne);
// const userTwo = userDetail("rituljain",true,12)
// console.log(userOne);



const userOne = new userDetail("ritul",true,12)
// console.log(userOne);
const userTwo = new userDetail("rituljain",true,12)
console.log(userOne.constructor);
console.log(userTwo);

// console.log(userOne instanceOf userDetail) 