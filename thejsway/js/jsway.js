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
