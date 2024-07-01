//Stack(primitive) and Heap(Non Primitive)
//value stored in Stack is taken as call by value and value stored in Heap is taken as call by reference

//Primitive datatypes are stored as call by value and non primitve are stored as call by reference
let user = {
   email :"ritul@googledotcom",
   id : 1
}
//we are giving same refercne to anotherUser and it is an obj so stored in heap memory
let anotherUser = user
anotherUser.email = "rituljain@googledotcom"
//value of both the user are changed to new because anotherUser ' s email value has changed
console.log(anotherUser);
console.log(user);



//name anotherName stored in stack so it is called by value so as we change the value of anotherName value of Name will not change
let name = "Ritul"
let anotherName = name
anotherName="prinjal"
console.log(name);
console.log(anotherName);




