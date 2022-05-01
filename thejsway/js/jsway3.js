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