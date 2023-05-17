/***********************************************************************
Write a function `breakDownObj(obj)` that takes in an object as a parameter
and returns an array containing:  all the keys from the object **and** all the
values of the object.

**Hint**: Use spread syntax to spread out elements into an array!


Examples:
let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
breakDownObj(object1); // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]

let object2 = {location: 'NY', borough: 'Brooklyn'};
breakDownObj(object2); // => [ 'location', 'borough', 'NY', 'Brooklyn' ]
***********************************************************************/

// iterate through the object
// put all the keys into an array
// put all the values into a second array
// join the 2 arrays together
// return the joined array

function breakDownObj(obj) {
  let keysArray = [];
  let valuesArray = [];

  for (let keys in obj) {
    let values = obj[keys];
    keysArray.push(keys);
    valuesArray.push(values);
  }
  return [...keysArray, ...valuesArray];
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = breakDownObj;
