const user = {
    username : "Ritul",
    price : 999,
    welecomeMessage : function(username){
        console.log(`${this.username} , welcome to our website`);
        console.log(this);
    }
}

user.welecomeMessage()
user.username = "jainritul"
user.welecomeMessage()
console.log(this);


function fun1(){
   let username = "ritul"
   console.log(this.username);
   console.log(this);
}
fun1()

//iske andr this data dega
const fun2 = function() {
   let username = "ritul"
   console.log(this.username);
   console.log(this);
}
fun2()

//arrow fun m  this keyword empty obj dega
const fun3 = () => {
   let username = "ritul"
   console.log(this.username);
   console.log(this);
}
fun3()



//agr curly braces h toh return keyword lgna hi pdga 

// const addNum = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addNum(3,4))

// const addNum = (num1,num2)=> num1+num2
// console.log(addNum(3,4))

//yha p apne ap vo smjh jyga 
const addNum = (num1,num2)=> (num1+num2)
console.log(addNum(3,4))

//aise likhenge toh undefined ayga but isko wrap krdenge braces m toh shi value aaygi jaisa ki niche kiya h humne
const userDetail = ()=>{username : "rituljain"} // o/p := undefined
console.log(userDetail());


const userDetail2 = ()=>({username : "rituljain"}) // o/p := { username: 'rituljain' }
console.log(userDetail2());