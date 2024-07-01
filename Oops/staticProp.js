class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }
    static createId(){
        console.log(`Id is : abc`);
    }
}
const ritul = new User("ritul")
ritul.logMe()
// ritul.createId()  we can't static method


class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}
const newTeacher = new Teacher("shipli","shil@gmail.com")
// newTeacher.createId()