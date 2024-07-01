//promises jb nhi tha tb hum Q or bluebird jaisi library ko use krte the asynchronus programming k liye
//DB calls , network , cryptography

//Promise is object
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task 1 completed');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Promise one consumed');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task 2 completed');
        resolve()
    },1000)
})
.then(function(){
    console.log('Promise 2  consumed');
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Task 3 completed');
        resolve({username :"rituljain",id :2})
    },1000)
})
.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false
       if(error){
        reject('ERROR : something went wrong')
       }
       else{
        resolve({username:"ritul",email:"ritul@google.com"})
       }
    },1000)
})
promiseFour
.then((user)=>{
   return user.username
})
.then((username) =>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('Promise is either resolve or rejected');
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error){
         reject('ERROR : js went wrong')
        }
        else{
         resolve({username:"ritul",email:"ritul@google.com"})
        }
     },1000)
})
//we can use async await in place of then and catch
async function consumePromiseFive(){
    try{
        const res = await promiseFive
        console.log(res);
    }
    catch(error){
       console.log(error);
    }
}

consumePromiseFive()


 async function getAllUser(){
    try{
        const res = await fetch("https://api.github.com/users/rituljain")
        //conversion of string data to json also takes time that's why we have to add await over there also
        const data = await res.json()
        console.log(data);
    }
    catch(error){
        console.log('e:',error);
    }
  
}

getAllUser()

fetch("https://api.github.com/users/rituljain")
.then((response)=>{
   return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("error :- ",error);
})

//queue formed for fetch is called as microtask queue or priority queue
