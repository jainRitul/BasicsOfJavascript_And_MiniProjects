const  nums = [1,3,4,5,6,7,8,9,1]
let newNums = nums.filter( val => val > 4)
console.log(newNums);

newNums = []
nums.forEach((num) =>{
    if(num  > 4){
        newNums.push(num)
    }
})
console.log(newNums);


let books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        edition: 1,
        price : 2999,
        publishingYear: 1925
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        edition: 1,
        price : 999,
        publishingYear: 1997
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        edition: 1,
        price : 99,
        publishingYear: 1960
    },
    {
        title: "1984",
        genre: "Dystopian",
        edition: 1,
        price : 299,
        publishingYear: 1949
    }
];

let userBooks = books.filter((item)=>{
    return item.publishingYear > 1995
})
console.log(userBooks);

//map on array
// const newNumbers = nums.map((val) => val+10)
// console.log(newNumbers);

//map and filter chaining
const newNumbers = nums.filter(val => val > 4).map(val => val +10)
console.log(newNumbers);


//reduce function
const sum = nums.reduce(function(acc,curr) {
    console.log(`acc := ${acc} and curr := ${curr}`);
    return acc+curr
},0)
console.log(sum);

const newSum = nums.reduce((acc,curr) => acc+curr)
console.log(newSum);


const bookPrice = books.reduce((acc,curr)  => acc + curr.price , 0)
console.log(bookPrice);