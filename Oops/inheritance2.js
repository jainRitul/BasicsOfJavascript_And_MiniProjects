class User{
    constructor(username)
    {
        this.username = username
    }

    logMe(){
      console.log (`USERNAME IS ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username , password,email){
        super(username)
        this.password = password
        this.email = email
    }
    addCourse(){
        console.log(`this cousrse is added by ${this.username}`);
    }
}
const userOne = new Teacher("ritul","ritul@gmail.com",233)
const userTwo = new User("siya")

userOne.logMe();
userTwo.logMe();

userOne.addCourse();
console.log(userOne instanceof Teacher);
console.log(userOne instanceof User);

//parent class can't use the methods defined by child class