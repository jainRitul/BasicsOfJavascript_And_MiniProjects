const course = {
    courseName :"Js in hindi",
    price:999,
    courseInstructor : "Ritul Jain"
}


//everytime we want to get the value from an we have to write this kind of syntax so for ease of use we will do another method
console.log(course.courseInstructor);


//ease of code writing in this
const {courseInstructor : Instructor} = course
//now you can access the key of obj using only one word
console.log(Instructor);









//this is because we want to learn react in future
// const fun = ({company})=>{

// }
// fun(company = "ritul")