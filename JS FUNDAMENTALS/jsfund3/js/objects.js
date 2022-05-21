//javascript.info
//Objects

//Write the code, one like for each action:
    //Create an empty object user.
    let user = {}
    //Add the property name with the value John.
    user.name = "John"
    //Add the property surname with the value Smith.
    user.surname = "Smith"
    //Change the value of name to Pete.
    user.name = "Pete"
    //Remove the property name from the object.
    delete user.name

//Write the function isEmpty which returns true if the object has no properties, false otherwise.
let schedule = {}
function isEmpty(obj){
    for(let key in obj){
        //if the loop has started, there is a property so you return false
        return false;
    }
    return true
    //if the loop didn't start, returns true
}

//Write code to sum all salaries and store in the variable sum. Should be 390. If salaries is zero, result must be zero.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}
let sum = 0
for (let key in salaries){
    sum += salaries[key]
}
    //Didnt need to be a function. Here you declare sum as zero. Using for in loop you use key for each property in salaries. The execution will add to the sum each key in salaraies.

//Create function multiplyNumeric(objec) that multiplies all numeric property values of obj by 2. For example:
//Before the call
let menu = {
    width: 200,
    height: 300,
    title: "My Menu"
}
multiplyNumeric(menu)
//after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
}

function multiplyNumeric(menu){
    for(key in menu){ //use for in loop to loop through each property
        if (typeof menu[key] == 'number'){ //add a conditional to the loop that checks if its a number. if it is then multiplies by 2
            menu[key *= 2] //multiplies by 2 and adds it to the key or property
        }
    }
}

//do again
//