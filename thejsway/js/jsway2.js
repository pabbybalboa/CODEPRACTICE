//The JS Way continued.

//Write Functions.
//Complete the following program so that it asks the user for his first and last names, then show the results of the sayHello() function.

let firstName = prompt("What is your first name?")
let lastName = prompt("What is your last name?")
function sayHello(firstName, lastName){
    const message = `Hello, ${firstName} ${lastName}!`
    return message
}
console.log(sayHello(`${firstName}`, `${lastName}`))

//Complete the following program so that the square1 and square2 functions work properly.

function square1(x){
    return x ** 2
}
const square2 = y => y ** 2
console.log(square1(0))
console.log(square1(2))
console.log(square1(5))

console.log(square2(0))
console.log(square2(2))
console.log(square2(5))

function square3(z){
    for(let z = 0; z <=10; z++){
        console.log( z ** 2 )
    }
    return z
}
console.log(square3())

//Let's pretend the JavaScript Math.min() function didn't exist. Complete the following program so that the min function returns the minimum of the two recieved numbers.
function min(min1,min2){
    if(min1 <= min2){
        return min1
    }else{
        return min2
    }
}
console.log(min(4.5,5))
console.log(min(19,9))
console.log(min(1,1))


//Complete the following program so that it offers the four basic arithmetical operations.
function calculate(num1,operation,num2){
    return eval(num1 + operation + num2)
}
console.log(calculate(4,"+",6))
console.log(calculate(4,"-",6))
console.log(calculate(2,"*",0))
console.log(calculate(12,"/",0))

//Write a program containing two functions to calculate the circumfrence and area of a circle defined by its radius. Test it using user input.

function circumfrence(radius){
    return Math.PI * (radius ** 2)
    //pi r**2
}

function area(radius){
    return 2 * Math.PI * radius
    //2 pi r
}

console.log(circumfrence(8))
console.log(circumfrence(9))
console.log(area(8))
console.log(area(9))