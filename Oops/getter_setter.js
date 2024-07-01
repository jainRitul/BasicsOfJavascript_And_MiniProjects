class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return `${this._password}ritul`
    }
    set password(value){
         this._password = value.toUpperCase()
    }
    get email(){
        return `${this._email}ritul`
    }
    set email(value){
         this._email = value.toUpperCase()
    }
}


const ritul = new User("ritul@gmail.com" , "jain")
console.log(ritul.password);
console.log(ritul.email);
