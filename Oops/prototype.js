const myName = "Ritul     "
const myChannel = "Er.rituljain                               "

String.prototype.trueLength= function(){
  return this.trim().length
}

console.log(myName.trueLength());
console.log(myChannel.trueLength());
console.log(myChannel.length);


const myHero = ["thor","spiderman"]
const myHeroDetail = {
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function(){
        console.log(`Spide power is ${this.spiderman}`);
    }
}


Object.prototype.ritul = function(){
    return ('Ritul is available for all objects');
}

Array.prototype.sayRitul = function(){
    return 'ritul'
}
// console.log(myHeroDetail.sayRitul());
console.log(myHero.sayRitul());

