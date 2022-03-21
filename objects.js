//OBJECTS. Using {} determines that this is an object not a variable or array.

//Activity1
const person = {
    name: "jake",
    age: 23,
    favSongs: [
        "Artist1 - Song1",
        "Artist2 - Song2",
        "Aritst3 - Song3"
    ]
}

console.log(person.name)
console.log(person.favSongs)

//Mini activity - Create alarm clock notification
let dayToday = "Monday";
let alarm = "weekendAlarm";

const alarmOptions = {
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am"
};

if (dayToday == "Saturday" || dayToday == "Sunday"){
    alarmChoice = alarmOptions.weekendAlarm;
    console.log(`Hello Jake: ${alarmChoice}`)
    } else {
        alarmChoice = alarmOptions.weekdayAlarm;
        console.log(`Hello Jake: ${alarmChoice}`)
    }

//Activity 2 - Create object called pet w/key values and methods for food & drink.

const pet = {
    petName: "Beauty",
    typeOfPet: "border collie",
    age: 12,
    colour: "black",
    eat(){
        return this.petName + " is eating.";
    },
    drink(){
        return this.petName + " is drinking.";
    }
}

console.log(pet.eat())
console.log(pet.drink())


//Activity 3 - 
const coffeeShop = {
    drinks: [
        "coffee", 3, 
        "tea", 2,
        "water", 1,
    ]
}

console.log(coffeeShop)