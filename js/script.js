console.log ("Hello")
var name;
name ="mary";

//Lesson Task 2

//question 1
var integer = 3;
var decimal = 4.7;

//Question 2
var daysOfTheWeek = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday";
console.log(daysOfTheWeek)

//Question 3
var additon = 5+5;
var subtraction = 3-1;
var multiplication = 3*3;
var division = 10/5;

//Question 4
var loggedIn = false

//Question 5
var sentence = "The frogs are angry"
console.log(sentence.length)

//Question 6
var timeElapsed;
var totalPrice;

//Question 7
var number1 = "53";
var number2 = "44.6";

var convertNumber1 = parseInt(number1);
var convertNumber2 = parseFloat(number2);

//Question 8
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

var typeOfPet = typeof pet;
console.log(typeOfPet);

var typeOfAge = typeof age;
console.log (typeOfAge);

var typeOfDiscoundApplied = typeof discountApplied;
console.log(typeOfDiscoundApplied);

var typeOfTimeleft = typeof timeLeft;
console.log(typeOfTimeLeft);

//Question 9
var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

//Question 10
var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue"

//Lesson Task 3

//Question 1
var firstNumber = 34;
var secondNumber = 89;

if (firstNumber < secondNumber) {
    console.log ("The first number is smaller than the second")
}

//Question 2
var age = 11;
var minimumAge = "13" 

if (age >= parseInt(minimumAge)){
    console.log ("You're old enough")
} else {
    console.log ("You're not old enough")
}

//Question 3
var income = "11.050"
var maximumIncome = "13.075"

if (parseFloar(income) <= parseFloat(maximumIncome)){
    console.log ("Maximum income requirement met")
} else {
    console.log ("Maximum Income requirement not met")
}

//Question 4
var studentAge = 16;

var message;

if (studentAge >= 6 && studentAge <= 13) {
    message = "Barneskole"
} else if (studentAge >= 14 && studentAge <= 16) {
    message = "Ungdomsskole"
} else if (studentAge >= 17 && studentAge <= 19) {
    message = "Videregående skole"
} else {
    message = "Invalid age"
}
 console.log(message)

//Question 5
var colour = "blue";

if ((colour === "orange")) {
    console.log("This colour is a bit rubbish");
}

//Question 6
var invoicePaid = false;

if (invoicePaid === false) {
    console.log("Not paid");
}

//Question 7
var selectedNumber = 11;
var winningNumber = "15";

if (selectedNumber !== parseInt(winningNumber)) {
    console.log("You lose again");
}

//Question 8
var daysOfTheWeek = 2;

var dayName;

switch (daysOfTheWeek) {
    case 1:
        dayName = "Monday"
        break;

    case 2:
        dayName = "Tuesday"
        break;

    case 3:
            dayName = "Wednesday"
            break;    

    case 4:
        dayName = "Thursday"
        break;

    case 5:
        dayName = "Friday"
        break;

    case 6:
        dayName = "Saturday"
        break;

    case 7:
        dayName = "Sunday"
        break;
}

console.log(dayName);

//Lesson 4 Loops

//Question 1
for (var i = 0; i <= 7; i++){
    console.log(i)
}

//Question 2
for (var i = 10; i > 0; i--){
    console.log(i)
}

//Question 3
for (var i = 10; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}