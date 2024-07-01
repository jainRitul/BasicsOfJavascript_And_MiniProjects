function sayMyName(){
  console.log("R");
  console.log("I");
  console.log("T");
  console.log("U");
  console.log("L");
}

// sayMyName // refernce of function
sayMyName() //execution of function

function addTwoNum(num1,num2){//parameter
   return num1+num2;
}
const res = addTwoNum(2,null);//arguments
console.log(res);

function isUserLoggedIn (username = "ritul"){
    if(!username){
        return "Please log in"
    }
    return `${username} just logged in`
}
console.log(isUserLoggedIn())



//rest opertor in js
//num only print 220 and 330 becuse before that val1 takes 100 and val2 takes 2002
//... triple dot is also called as spread operator and rest operator based on there use
function calculateCartPrice(val1,val2,...num){
 return num
}
console.log(calculateCartPrice(100,2002,220,330))

//obj as a paramtere
const user = {
    name :"ritul jain",
    age:20
}
function getUserDetail(anyObj){
    return `user name is ${anyObj.name} and age is ${anyObj.age}`
}
console.log(getUserDetail(user));
console.log(getUserDetail({
    name:"prinjal jain",
    age:12
}));

function getMarks(anyArr){
    return anyArr[1]
}
console.log(getMarks([10,20,301,30]));