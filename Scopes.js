
if(true){
    let a  = 10 
    const b= 20
    var c = 40
    console.log(a);
    console.log(c);
}
//here is the matter of scope comes into picture when var is taken as keyword for initializing than it's not check scope of variable
console.log(c);


//IMP for interview
//Hoisting concept
addone(3)
function addone(num){
    return num+1
}

//if you write syntax for function like these than you cannot access the function before initialization'
addTwo(3)
const addTwo = function(num){
    return num+2
}