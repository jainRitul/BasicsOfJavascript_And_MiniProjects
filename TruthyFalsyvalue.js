const userEmail = []
if(userEmail){
    console.log("Got user email");
}
else{
    console.log("Don't have user email");
}

//truthy values
// []," ",'false','0',{},function(){}


//falsy values
// 0 , -0, false , "",bigint,null,0n,undefined , NaN


if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("obj is empty");
}

//false == 0 return true
// false == '' return true
// 0 == '' return true


// Nullish coalescing operator : null undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
val2 = undefined ?? 13 ?? 20
console.log(val1);
console.log(val2);
