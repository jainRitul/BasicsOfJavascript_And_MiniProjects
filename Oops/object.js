function multiple(num){
    return num *5;
}
multiple.power  = 2
multiple.ritul  = 2
console.log(multiple(5))
console.log(multiple.power)
console.log(multiple.ritul)
console.log(multiple.prototype);





const createUser = function(user,price){
    this.user =user;
    this.price = price;
}
console.log(createUser.prototype);

createUser.prototype.increment = function(){
    this.price++
}
console.log(createUser.prototype);
createUser.prototype.printMe = function(){
    console.log(this.price);
}
console.log(createUser.prototype);
const chai = new createUser("chai",23)
const tea = new createUser("tea",230)

chai.printMe()
tea.printMe()