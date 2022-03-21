let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny"){
    console.log("Check again");
}
else if(place == "Manc" && weather == "Cloudy"){
        console.log("That's Manchester")
    }
else {
    console.log("Surely it's raining?")
}


//activity1

let age = 18

if (age >= 18){
    console.log("Yes I can serve you")
}
else{
    console.log("Sorry, you aren't old enough")
}

//activity2

//activity3

let password = "password123";
console.log(`Password length is ${password.length}`)

if (password.length < 8){
    console.log("Error. Your password is too short.")
} else {console.log(`Your password is ${password}`)}

//activity4

let num = 10;
if (num % 3 === 0 || num % 5 === 0){
    console.log(`${num} is divisible by 3 or 5`)
} else {console.log(`${num} is NOT divisible by 3 or 5`)}

//activity5
if (num % 3 && 5 === 0){
    console.log("fizz buzz")
} else if (num % 5 === 0){
    console.log("buzz")
} else if (num % 3 === 0){
    console.log("fizz")
} else {console.log(`${num}`)}

//activity6
let palNum = 1002;
let numAsString = palNum.toString(); 
let reverseStr = numAsString.split('').reverse().join('');

console.log(typeof numAsString);
console.log(reverseStr)

if (palNum == reverseStr){
    console.log(`${palNum} is a palindrome`)
} else {
    console.log(`${palNum} is not a palindrome`)
}