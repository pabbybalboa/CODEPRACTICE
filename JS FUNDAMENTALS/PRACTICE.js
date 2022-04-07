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


//LOGICAL OPERATORS

// What is the code below going to output?
alert ( null || 2 || undefined )
// 2 because it's the first truthy value

//What will the code below output?
alert ( alert(1) || 2 || alert(3) )
//1 then 2. Alert runs showing 1 but returns alert undefined. 2 is truthy, so the execution is halted and shows on outer alert.

//What is the code below going to show?
alert ( 1 && null && 2 )
// Null because it's the first falsy value from the list.

//What is the code below going to show?
alert ( alert(1) && alert(2) )
//1 then undefined. The first alert runs and shows 1 (no meaningful return) then && runs and returns undefined as falsey value.

//What will the result be?
alert( null || 2 && 3 || 4 )
//3. Treats the 2 && 3 as parentheses and the && takes precedence so returns 3 as the first truthy value. Same as null ( 2 && 3 = 3) 4.

//Write an if condition to check that age is between 14 and 90 inclusively. 
let age 
    if (age >= 14 && age <= 90){
}

//Write an if condition to check that age is not between 14 and 90 inclusively. Create two, one using not, the second without.
let age1
    if ( !(age1 >= 14 && age1 <= 90)){
    }
    if (age1 < 14 && age1 > 90){
    }

//Which of these alerts are going to execute?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
//First and third. First- result is -1, truthy so it runs. Second- doesn't run, falsey. Third- Executes and results 1.

//Write code which asks for login with promt.
//If visitor enters "Admin", promt for pasword, if input is an empty line or esc-show canceled, if another string, show "I don't know you."
//The password is checked: if equals "TheMaster" then show "Welcome!". another string, show "wrong password". empty string or cancelled, show "canceled".
//My try
let prompt = "Who's there?"
let input
let password
    if (input = "Admin"){
        if (password = "TheMaster"){
            alert("Welcome!")
        }else if (password = !"TheMaster"){
            alert("Wrong Password")
        }else 
            alert("Canceled")
        
    }else if( input = !"Admin"){
        alert("I don't know you.")
    }else
        alert('Canceled')
    
//Solution
let userName = promt("Who's there?", '');
if (userName === 'Admin'){
    let pass = promt('Password?', '');
    if (pass === 'TheMaster'){
        alert('Welcome')
    }else if (pass === '' || pass === null){
        alert('Canceled')
    }else{
        alert('Wrong Password')
    }
}else if (userName === '' || userName === null){
    alert('Canceled')
}else{
    alert("I don't know you.")
}


//FUNCTIONS

//The following function returns true if age is greater than 18. Rewrite it to perform the same, without if, in a single line in two variations: using ? and using || OR.
function checkAge (age){
    if (age > 18){
        return true;
    }else{
        return confirm('Did your parents allow you?')
    }
}
//Using ?
function checkAge (age){
    return (age > 18) ? true : confirm('Did your parents allow you?');
}
//Using ||OR
function checkAge (age){
    return (age > 18) || confirm('Did your parents allow you?');
}

//Write a function min(a,b) which returns the least of two numbers a and b.
//using conditionals
function min(a,b){
    if (a < b){
        return a
    }else{
        return b
    }
}
//using ?
function min (a,b){
    (a < b) ? a : b;
}

//Write a function pow(x,n) that returns x in power n. In other words multiplies itself n times and returns result.
function pow(x,n){
    returns (x**n)
}
//come back to this one