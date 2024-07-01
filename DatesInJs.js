//  date is pain point in js but temporal api is trying to implemnet an easier version to use the dates but it's not implemeted  in all the browswe till now so we have to use all style of date
//typeof date is object
const currDate = new Date() 
console.log(currDate);
console.log(currDate.toString());
console.log(currDate.getTime());
console.log(currDate.toISOString());
console.log(currDate.toJSON());
console.log(currDate.toDateString());
console.log(currDate.toTimeString());
console.log(typeof currDate);


const myCreatedDate = new Date(2024,5,2,5,3);
console.log(myCreatedDate.toDateString());

const myDate = new Date("2024-06-02");
console.log(myDate.toLocaleString());


const myTimeStamp = Date.now()
 console.log(myTimeStamp);

//this will give the time in seconds
console.log(Math.floor(Date.now()/1000));
console.log(currDate.getMonth());

console.log(currDate.toLocaleString('default',{
      weekday:"short"
}));