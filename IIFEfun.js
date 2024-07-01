//Immediately invoked function expression

// Because our application could include many functions and global variables from different source files, it's important 
// to limit the number of global variables. If we have some initiation code that we don't need
//  to use again, we could use the IIFE pattern. As we will not reuse the code again, using
//  IIFE in this case is better than using a function declaration or a function expression.



//named IIFE function
(function fun(){
   console.log(`DB CONNECTED`);
})()


//if you don't write semicolon after IIFE function than it will not execute because we have to end if function explicitly 
//IIFE is used to avoid polluting the global space
((name)=>{
   console.log(`DB CONNECTED TWO ${name}`);
})('ritul')