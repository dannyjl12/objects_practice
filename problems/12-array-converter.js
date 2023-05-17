/***********************************************************************
Write a function `arrayConverter(array)` that will intake an
array as an argument and returns an object representing the count of each
value in the array. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(arrayConverter(["apple", "apple"])); // => {apple: 2}
console.log(arrayConverter(["mango", "pineapple"])); // => {mango: 1, pineapple: 1}
console.log(arrayConverter(["apple", "banana", "potato", "banana"])); // => {apple: 1, banana: 2, potato: 1}
***********************************************************************/

// loop through and if it doesn't contain the word, add key to the object
// if it does contain the word, add a counter for that word


// create a function that iterates through the array
//

function arrayConverter(array) {
  let object = {};
  let value = 1

  array.forEach(function(key){
    if (object[key] === undefined) {
      object[key] = value;
    } else {
        object[key] = object[key] + 1;
    }
  });
  return object;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = arrayConverter;
