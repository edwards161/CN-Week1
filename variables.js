//Activity1 
let favColour = "red";
let firstName = "Jake";
let age = 23;

console.log (`My name is ${firstName}, I am ${age} years old and my favourite colour is ${favColour}!`)


console.log (firstName + " " + age)
//Using string template literal
console.log (`My name is ${firstName}`)

let i = 10;
console.log(i)
i = i+2;
console.log(i)
//below is a better way of assigning 
i+=2;
console.log(i)


//Activity2
let breakfast =  "cereal"
let lunch = "sandwich"
let dinner = "chicken"

console.log(`My meals today will be ${breakfast}, ${lunch} and ${dinner}`)


//Activity3
console.log(new Date)
let todaysDate = new Date();
let birthDay = new Date('2023,01,01')

console.log(todaysDate)
console.log(birthDay);
console.log(birthDay.getTime())

let timeUntil = birthDay.getTime() - todaysDate.getTime()
console.log(timeUntil)
let daysUntil = Math.ceil(timeUntil / (1000 * 3600 * 24));
console.log(daysUntil)
console.log(`It is ${daysUntil} days from your birthday!`)






