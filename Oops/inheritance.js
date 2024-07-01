const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    fullTime : true
}
const user = {
    username : "computer",
    __proto__ : Teacher 
}

Teacher.__proto__ = TeachingSupport

//modern syntax
Object.setPrototypeOf(Teacher,TeachingSupport)