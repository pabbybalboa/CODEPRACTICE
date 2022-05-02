//JSWAY

//Store data in arrays

//Write a program that creates array muskateers. Show each array element with for loop. Add `d'Artagnan` to array. Show each array element using forEach method. Remove Aramis. Show each array element using for-of loop.

let muskateers = ["Athos", "Porthos", "Aramis"]
for(let i=0; i < muskateers.length; i++){
    console.log(muskateers[i])
}

muskateers.push(`D'Artagnan`)

muskateers.forEach(muskateers => {
    console.log(muskateers)
})

muskateers.splice(2,1)

for(muskateers of muskateers){
    console.log(muskateers)
}

//Write a program that creates an array, then calculates and shows the sum of it's values.
let values = [3, 11, 7, 2, 9, 10]
let sum = 0
for(let i=0; i<values.length; i++){
    sum += values[i]
}
console.log(sum)

//Write a program that takes the same values array and shows the maximum value.
console.log(Math.max(...values))

//Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
let command = []
while(true){
    let input = prompt("What is the right command?")
    if(input === "Stop" || input === null){
        break
    }
    command.push(input)
    console.log(command)
}


//OBJECTS

//Create an RPG character object with a name, health points and strength points. Then add experience points and a method to describe azuroth.

const character = {
    name: "Azuroth",
    health: 150,
    strength: 15000,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength, and ${this.xp} XP points.`
    }
}
character.health -= 20 //Takes an arrow to the knee.
character.strength += 1500 //Drinks a strength potion.
character.xp += 2000 //Azuroth defeats his foe.
console.log(character.describe())


//Complete the following program to add the dog object definition:

const dog = {
    name: "Lotus",
    species: "Schanuzer",
    size: "30 inches",

    bark(){
        return "Woof woof!"
    }
}

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`)
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`)


//Complete the following program to add the circle object definition. The radius value is the input by the user.

const r = Number(prompt("Enter the circle radius:"))
const circle = {
    radius: r,

    circumfrence(){
        return (2 * (Math.PI) * r)
    },

    area(){
        return ((Math.PI) * (r ** 2))
    }
}

console.log(`It's circumfrence is ${circle.circumfrence()}`)
console.log(`Its area is ${circle.area()}`)


//Write a program that creates an account object with the following characteristics: name, balance, credit, and describe.

const account = {
    name: "Alex",
    balance: 0,

    credit(){
        let number = 0
        return number += balance
    },

    describe(){
        return `owner: ${this.name}, balance ${this.balance}`
    }
}
console.log(account.describe())
account.balance += 250 //credit 250
console.log(account.describe())
account.balance -= 80 //debit 80
console.log(account.describe())

