//javascript.info
//Array Method Tasks

//Write a funciton camelize(str) that changes dash-seperated words into camel-cased words. Remove the dashes and each word after becomes uppercased.
function camelize(str){
   return str
   .split('-') //splits into array of seperate words
   .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)) //Capitalizes first letters of all array items except the first one. Uppercases following words.
   .join('') //Joins words into single string.
}

//Write function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to be and returns a result as an array.
function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b))
}

//Write a function filterRangeInPlace(arr,a,b) that gets an array arr and removers from it all values except those that are between a and b. The test is a <= arr[i] <= b.
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
}

//Sort in decreasing order:
let arr = [5, 2, 1, -10, 8]
let newArr = arr.sort((a, b) => b - a)

//We have an array of strings arr. We'd like to have a sorted copy of it, but keep arr unmodified. Create function copySorted(arr) that returns such a copy.
let arr2 = ["HTML", "Javascript", "CSS"]
function copySorted(arr){
    return arr.slice().sort()
}

//whats next