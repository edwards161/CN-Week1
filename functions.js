//Functions are used to break up code into smaller, reusuable chunks

let coffeeIsGrinding = true;

const pressGrindBeans = () => {
    if (coffeeIsGrinding) {
        console.log("Coffe is grinding")
    }
    else {
        console.log("Coffee is not grinding")
    }
}

pressGrindBeans() 

const cashWithdrawal = (amount, accNum) => {
    console.log(`Withdrawing ${amount} from account ${accNum}`);
}

cashWithdrawal (300, 123456);
cashWithdrawal (600, 678910);

//Activity1
/* function factorial (n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
} */

//Activity 1 after 
let factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}

console.log(factorial(34));

//Activity2
let orderCount = 0;

const takeOrder = (topping, sauce) => {
    console.log(`Pizza with ${topping} and ${sauce}`);
    orderCount++;
}

takeOrder("cheese", "tomato");