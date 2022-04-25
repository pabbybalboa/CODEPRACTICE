//The JS Way

//3, 2, 1...Code!
//Write a program that displays your name and age.
console.log("Pablo Ruiz", 29)

//Write a program that displays results of adding, subtracting, multiplying, and dividing 6 by 3.
console.log(6+3)
console.log(6-3)
console.log(6*3)
console.log(6/3)

//What will these show?
console.log(4 + 5) //9. Number and will do the math.
console.log("4 + 5") //4+5. String.
console.log("4" + "5") //45. Concatenation.

 //Play with Variables
 //Write a program that asks the user for their first and last name. The program then displays them in one sentence.
 let firstLastName = prompt("What is your full name?")
 alert(`Pleasure to meet you, ${firstLastName}`)

let a = 2
a -= 1
a++ //2
let b = 8
b+=2 //10
const c = a + b * b //102
const d = a * b + b //30
const e = a * (b + b) //40
const f = a * b / a //10
const g = b / a * a //10
console.log(a, b, c, d, e, f, g)

//Write a program that asks user for a raw price. After that, calculates the corresponding final price using a VAT rate of 20.6.
let rawPrice = prompt("What is the raw price?")
alert(`Final price with Vat is ${(Number(rawPrice) * 1.206)}`)

//Write a program that asks for a temperature in Celsius then displays in Fahrenheit.
let temperature = prompt("What is the temperature in Celsius?")
alert(`The temperature in Farenheit is ${(Number(temperature) * (9/5) + 32)} degrees.`)

//Add the necessary code to swap these two variables.

let number1 = 5
let number2 = 3
let temp

temp = number1
number1 = number2
number2 = temp

console.log(number1)
console.log(number2)


//Add conditions
let dayOfWeek = prompt("What day is it?")
if (dayOfWeek == "Monday"){
    alert ("Tomorrow is Tuesday")
}else if(dayOfWeek == "Tuesday"){
    alert ("Tomorrow is Wednesday")
}else if(dayOfWeek == "Wednesday"){
    alert ("Tomorrow is Thursday")
}else if(dayOfWeek == "Thursday"){
    alert ("Tomorrow is Friday")
}else if(dayOfWeek == "Friday"){
    alert ("Tomorrow is Saturday")
}else if(dayOfWeek == "Saturday"){
    alert ("Tomorrow is Sunday")
}else if(dayOfWeek == "Sunday"){
    alert ("Tomorrow is Monday")
}else{
    alert ("That's not a real day")
}
//does not account for spelling errors

//Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
let firstNumber = prompt("Pick a number.")
let secondNumber = prompt("Pick a second number.")
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
if(firstNumber > secondNumber){
    alert( `${firstNumber} is greater than ${secondNumber}`)
}else if(firstNumber < secondNumber){
    alert(  `${secondNumber} is greater than ${firstNumber}`)
}else if(firstNumber == secondNumber){
    alert("Both numbers are equal")
}else{
    alert("Need valid inputs.")
}

//Write a program that accepts a month number and then shows the number of days in that month. 
let monthNumber = Number(prompt("What is the number of the month you're looking for?"))
if(monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12 ){
    alert("There are 31 days in that month.")
}else if(monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11 ){
    alert("There are 30 days in that month.")
}else if(monthNumber == 2 ){
    alert("There are 28 days in that month.")
}else{
    alert("Need a valid month number.")
}

//Repeat Statements.
//Write a program that launches a carousel for 10 turns showing the turn number each time. Improve it so that the number of turns is given by the user.

for(let i = 0; i <= 10; i++){
    console.log(i)
}

let carouselTurns = Number(prompt("How many times will the carousel turn?"))
for(let i = 0; i <= carouselTurns; i++){
    console.log(i)
}

//Make a program that only shows odd numbers between 1 and 10.
for(let i = 1; i <=10; i++){
    if(!(i % 2 === 0)){
        console.log(`${i} is odd.`)
    }
}

let checkEvenOrOdd = Number(prompt("Pick a number between 1 and 10."))
for(let i = checkEvenOrOdd; i <= (checkEvenOrOdd + 10); i++){
    if(i % 2 === 0){
        console.log(`${checkEvenOrOdd} is even!`)
    }else if(!(i % 2 === 0 )){
        console.log(`${checkEvenOrOdd} is odd!`)
    }
}

//Write a program that continues to ask the user for the number until the entered number is less than or equal to 100.
let numberMustBe = Number(prompt("Pick a number, is it the right one?"))
while(numberMustBe <= 100){
    alert("That number works.")
}