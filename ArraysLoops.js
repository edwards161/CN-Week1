// Array Syntax
//Arrays store mutliple variables under a single variable name
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
];

console.log(coffeeOrder)

//Remember, index starts with 0!
console.log(coffeeOrder[2])
console.log(coffeeOrder[1])

//Will replace
coffeeOrder[1] = "Jake - Tea, not coffee!";
console.log(coffeeOrder[1]);

//.length() on an array will output number of items NOT characters
console.log(coffeeOrder.length);
console.log()

//Adds item to the end of array
coffeeOrder.push("Donna - espresso")
console.log(coffeeOrder)

//Removes last item from the end of array
coffeeOrder.pop()
console.log(coffeeOrder)


//Activity 1 & 2

let favSongs = [
    "The Stone Roses - Fools Gold",
    "Paul Engemann - Push It To The Limit",
    "Aqua - Barbie Girl"
]

favSongs.push("The Doors - People Are Strange")
favSongs.push("The Prodigy - Firestarter")
favSongs.pop()
//.shift()Removes the first item
//favSongs.shift()
console.log(favSongs)

//Iteration sequences, selections, LOOPS
//i stands for index, which is widely used in loops. However, it could be anything you like.
//REMEMBER ++ is incrementing!
for(let i = 2; i < favSongs.length; i++){
    console.log(favSongs[i]);
}

let multiplesTwo = [];

for(let i = 0; i < 20; i++){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`)

//For Loops …run a finite or limited number of times. 
//While Loops …run while a condition is met (or not)

let ageHuman = 15;

while(ageHuman < 18){
    console.log("You are a child");
    ageHuman++;
}

console.log("You're an adult!");

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);