/***********************************************************************
Write a function `appleCounter(appleObj)` that takes in an object containing a
number of keys that have the word 'apple' contained within them. The `appleCounter`
function will be in charge of returning the number of keys that contain the word
"apple".

**Hint**: you may want to take all the keys and lower case them for easier
searching.


Example:
let obj = { banana: "yay!" };
appleCounter(obj); // => 0

let obj1 = { crabapple: "yum!" };
appleCounter(obj1); // => 1

let obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
appleCounter(obj2); // => 2


let obj3 = {
  crabApple: "yum!",
  honeyApple: "super yum",
  banana: "yay",
  bigapple: "NYC"
};
appleCounter(obj3); // => 3
***********************************************************************/

/*
create a function that
  iterate through the object keys and put them in an array
  iterate through each word in the array

*/

function appleCounter(appleObj) {
  let appleString = ''

  for (let keys in appleObj) {
    appleString += keys.toLowerCase();
  }

  let count = 0;

  for (let i = 0; i < appleString.length; i++) {
    if ('apple' === appleString[i] + appleString[i+1] + appleString[i+2] + appleString[i+3] + appleString[i+4]) {
      count++
    }
  }
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = appleCounter;
