//JS IN PRACTICE

//VARIABLES
// Declare two variables: admin and name. Assign the value "John" to name. Cope the value from name to admin. Show the value of admin using alert.

let admin = name;
let name = "John";
alert(admin);

//Create variable with the name of our planet. Create a variable with the name of the current user to a website.

let ourPlantName = "Earth"
let currentVistorName = "Pablo"

//CONDITIONALS IF ? BRANCHING
//Using the if.else construct, write code which asks 'What is the official name of JavaScropt? If visitor enters ECMAScript output right otherwise you dont know emcascript.

let value = "What is the official name of JavaScript?"; 
    if (value == 'EMCAScript'){
        alert('Right!');
    }else{
        alert("You don't know? EMCASript")
    }


//Using if..else, write code which gets a number via promt then shows in alert: 1, if value is greater than zero, -1 if less than zero, 0 if equal to zero

let num = prompt('Type a number', 0);
if ( num > 0 ){
    alert(1)
}else if (num < 0 ){
    alert(-1)
}else {
    alert(0)
}

//Rewrite using a conditional operator

let num1 = (num1 > 0) ? alert(1) : (num1 < 0) ? alert(-1) : alert(0);

let result = (a + b < 4) ? 'Below' : 'over';
//^Javaspcript.info fundamentals conditionals task 3


//Rewrite using multiple ternary operators. Javascript.info fundamentals conditions task 4
let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';
